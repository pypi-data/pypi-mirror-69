import os
import shutil
import subprocess
import zipfile
from platform import architecture

import click
from picomc.account import AccountError
from picomc.env import Env, get_filepath
from picomc.logging import logger
from picomc.utils import ConfigLoader, assert_java, join_classpath


class NativesExtractor:
    def __init__(self, instance, vobj):
        self.instance = instance
        self.vobj = vobj
        self.ndir = get_filepath("instances", instance.name, "natives")

    def __enter__(self):
        os.makedirs(self.ndir, exist_ok=True)
        dedup = set()
        for fullpath in self.vobj.lib_filenames(natives=True):
            if fullpath in dedup:
                logger.debug(
                    "Skipping duplicate natives archive: " "{}".format(fullpath)
                )
                continue
            dedup.add(fullpath)
            logger.debug("Extracting natives archive: {}".format(fullpath))
            with zipfile.ZipFile(fullpath) as zf:
                # TODO take exclude into account
                zf.extractall(path=self.ndir)

    def __exit__(self, ext_type, exc_value, traceback):
        logger.debug("Cleaning up natives.")
        shutil.rmtree(self.ndir)
        # print(self.ndir)


def sanitize_name(name):
    return name.replace("..", "_").replace("/", "_")


def process_arguments(arguments_dict):
    """This is a horrible function the only purpose of which is to die and be
    rewritten from scratch. Along with the native library preprocessor."""

    def match_rule(rule):
        # This launcher currently does not support any of the extended
        # features, which currently include at least:
        #   - is_demo_user
        #   - has_custom_resolution
        # It is not clear whether an `os` and `features` matcher may
        # be present simultaneously - assuming not.
        if "features" in rule:
            return False

        osmatch = True
        if "os" in rule:
            # FIXME:
            # The os matcher may apparently also contain a version spec
            # which is probably a regex matched against the java resported
            # os version. See 17w50a.json for an example. Ignoring it for now.
            # This may lead to older versions of Windows matchins as W10.
            # The "name" key is apparently also not required (1.13-pre4.json)
            # and an "arch" rule may be present instead. Possible values are
            # currently unknown.
            if "name" in rule["os"]:
                osmatch = osmatch and rule["os"]["name"] == Env.platform
            if "arch" in rule["os"]:
                logger.warn("Matching arch rule, this may not work.")
                arch = {"32": "x86"}.get(architecture()[0][:2], "?")
                osmatch = osmatch and rule["os"]["arch"] == arch
        if osmatch:
            return rule["action"] == "allow"
        return None

    def subproc(obj):
        args = []
        for a in obj:
            if isinstance(a, str):
                args.append(a)
            else:
                allow = "rules" not in a
                for rule in a["rules"]:
                    m = match_rule(rule)
                    if m is not None:
                        allow = m
                if not allow:
                    continue
                if isinstance(a["value"], list):
                    args.extend(a["value"])
                elif isinstance(a["value"], str):
                    args.append(a["value"])
                else:
                    logger.error("Unknown type of value field.")
        return args

    return (subproc(arguments_dict["game"]), subproc(arguments_dict.get("jvm")))


class BackupDict(dict):
    def __getitem__(self, i):
        try:
            return dict.__getitem__(self, i)
        except KeyError:
            return Env.gconf[i]


class InstanceConfigLoader(ConfigLoader):
    def __init__(self, instance_name):
        default_config = {"version": "latest"}
        cfg_file = os.path.join("instances", instance_name, "config.json")
        ConfigLoader.__init__(self, cfg_file, default_config, dict_impl=BackupDict)


class Instance:
    def __init__(self, name):
        self.name = sanitize_name(name)

    def __enter__(self):
        self._cl = InstanceConfigLoader(self.name)
        self.config = self._cl.__enter__()
        return self

    def __exit__(self, ext_type, exc_value, traceback):
        self._cl.__exit__(ext_type, exc_value, traceback)
        del self.config
        del self._cl

    def get_java(self):
        return self.config["java.path"]

    def populate(self, version):
        self.config["version"] = version

    def launch(self, account, version=None):
        vobj = Env.vm.get_version(version or self.config["version"])
        logger.info("Launching instance {}!".format(self.name))
        logger.info("Using minecraft version: {}".format(vobj.version_name))
        logger.info("Using account: {}".format(account))
        gamedir = get_filepath("instances", self.name, "minecraft")
        os.makedirs(gamedir, exist_ok=True)
        vobj.prepare_launch(gamedir)
        with NativesExtractor(self, vobj):
            self._exec_mc(account, vobj, gamedir)

    def _exec_mc(self, account, v, gamedir):
        # this is temporary. FIXME
        # This 'function' is quickly getting worse and worse.
        # Rewrite it.

        java = [self.get_java()]

        assert_java(java[0])

        java.append("-Xms{}".format(self.config["java.memory.min"]))
        java.append("-Xmx{}".format(self.config["java.memory.max"]))
        java += self.config["java.jvmargs"].split()
        libs = list(v.lib_filenames())
        libs.append(v.jarfile)
        classpath = join_classpath(*libs)

        version_type, user_type = (
            ("picomc", "mojang") if account.online else ("picomc/offline", "offline")
        )

        # Make functions out of these two
        natives = get_filepath("instances", self.name, "natives")

        mc = v.vspec.mainClass

        if hasattr(v.vspec, "minecraftArguments"):
            mcargs = v.vspec.minecraftArguments.split()
            sjvmargs = ["-Djava.library.path={}".format(natives), "-cp", classpath]
        elif hasattr(v.vspec, "arguments"):
            mcargs, jvmargs = process_arguments(v.vspec.arguments)
            sjvmargs = []
            for a in jvmargs:
                a = a.replace("${", "{")  # oof FIXME
                a = a.format(
                    natives_directory=natives,
                    launcher_name="picomc",
                    launcher_version="0",  # Do something proper here. FIXME.
                    classpath=classpath,
                )
                sjvmargs.append(a)

        account.refresh()

        smcargs = []
        for a in mcargs:
            # This should be done differently. FIXME
            a = a.replace("${", "{")
            a = a.format(
                auth_player_name=account.gname,
                auth_uuid=account.uuid,
                auth_access_token=account.access_token,
                # Only used in old versions.
                auth_session="token:{}:{}".format(account.access_token, account.uuid),
                user_type=user_type,
                user_properties={},
                version_type=version_type,
                version_name=v.version_name,
                game_directory=gamedir,
                assets_root=get_filepath("assets"),
                assets_index_name=v.vspec.assetIndex["id"],
                game_assets=v.get_virtual_asset_path(),
            )
            smcargs.append(a)

        fargs = java + sjvmargs + [mc] + smcargs
        logger.debug("Launching: " + " ".join(fargs))
        subprocess.run(fargs, cwd=gamedir)

    @staticmethod
    def exists(name):
        name = sanitize_name(name)
        return os.path.exists(get_filepath("instances", name, "config.json"))

    @staticmethod
    def remove(name):
        shutil.rmtree(get_filepath("instances", name))


def instance_list():
    import os

    yield from (
        name for name in os.listdir(get_filepath("instances")) if Instance.exists(name)
    )


g_iname = ""


@click.group()
@click.argument("instance_name")
def instance_cli(instance_name):
    """Manage your instances."""
    instance_name = sanitize_name(instance_name)
    global g_iname
    g_iname = instance_name


@click.command()
@click.argument("instance_name")
@click.argument("version", default="latest")
def create_instance(instance_name, version):
    """Create a new instance."""
    if Instance.exists(instance_name):
        logger.error("An instance with that name already exists.")
        return
    with Instance(instance_name) as inst:
        inst.populate(version)


@click.command()
def list_instances():
    """Show a list of instances."""
    print("\n".join(instance_list()))


@instance_cli.command()
def remove():
    if Instance.exists(g_iname):
        Instance.remove(g_iname)
    else:
        logger.error("No such instance exists.")


@instance_cli.command()
@click.option("--account", default=None)
@click.option("--version-override", default=None)
def launch(account, version_override):
    """Launch the instance."""
    if account is None:
        account = Env.am.get_default()
    else:
        account = Env.am.get(account)
    if not Instance.exists(g_iname):
        logger.error("No such instance exists.")
        return
    with Instance(g_iname) as inst:
        try:
            inst.launch(account, version_override)
        except AccountError as e:
            logger.error("Not launching due to account error: {}".format(e))


@instance_cli.command()
def dir():
    """Print root directory of instance."""
    if not g_iname:
        print(get_filepath("instances"))
    else:
        # Careful, if configurable instance dirs are added, this breaks.
        print(get_filepath("instances", g_iname))


def register_instance_cli(picomc_cli):
    picomc_cli.add_command(instance_cli, name="instance")
    picomc_cli.add_command(create_instance)
    picomc_cli.add_command(list_instances)
