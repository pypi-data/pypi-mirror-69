import subprocess
import os

from . import __version__

cmd_env = {
    "PATH": os.environ["PATH"],
    "HOME": os.environ["HOME"],
    "LANG": "C",
    "LC_ALL": "C",
}


def run(cmd):
    return subprocess.check_output(cmd, stderr=subprocess.DEVNULL, env=cmd_env)


if os.path.exists(".git"):
    try:
        git_revision = run(["git", "rev-parse", "HEAD"]).strip().decode("ascii")
        git_revision_url = f"https://github.com/tulir/mautrix-facebook/commit/{git_revision}"
        git_revision = git_revision[:8]
    except (subprocess.SubprocessError, OSError):
        git_revision = "unknown"
        git_revision_url = None

    try:
        git_tag = run(["git", "describe", "--exact-match", "--tags"]).strip().decode("ascii")
        git_tag_url = f"https://github.com/tulir/mautrix-facebook/releases/tag/{git_tag}"
    except (subprocess.SubprocessError, OSError):
        git_tag = None
        git_tag_url = None
else:
    git_revision = "unknown"
    git_revision_url = None
    git_tag = None
    git_tag_url = None

# TODO enable once we reach releases
# if git_tag and __version__ == git_tag[1:].replace("-", ""):
#     version = __version__
#     linkified_version = f"[{version}]({git_tag_url})"
# else:
#     if not __version__.endswith("+dev"):
#         __version__ += "+dev"
#     version = f"{__version__}.{git_revision}"
#     if git_revision_url:
#         linkified_version = f"{__version__}.[{git_revision}]({git_revision_url})"
#     else:
#         linkified_version = version
version = __version__
linkified_version = (f"{version}+[{git_revision}]({git_revision_url})"
                     if git_revision_url else f"{version}+{git_revision}")
