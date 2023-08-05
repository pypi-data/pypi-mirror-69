# Legendary
## A free and open-source Epic Games Launcher alternative
![Logo](https://repository-images.githubusercontent.com/249938026/80b18f80-96c7-11ea-9183-0a8c96e7cada)

[![Discord](https://discordapp.com/api/guilds/695233346627698689/widget.png?style=shield)](https://discord.gg/UJKBwPw) [![Twitter Follow](https://img.shields.io/twitter/follow/legendary_gl?label=Follow%20us%20for%20updates%21&style=social)](https://twitter.com/legendary_gl)

Legendary is an open-source game launcher that can download and install games from the Epic Games platform on Linux and Windows.
It's name as a tongue-in-cheek play on tiers of [item rarity in many MMORPGs](https://wow.gamepedia.com/Quality).

Right now Legendary is in beta and not feature-complete. You might run into some bugs or issues.
If you do please [create an issue on GitHub](https://github.com/derrod/legendary/issues/new) so we can fix it.

**What works:**
 - Authenticating with Epic's service
 - Downloading and installing your games and their DLC
 - Delta patching/updating of installed games
 - Launching games with online authentication (for multiplayer/DRM)
 - Syncing cloud saves (compatible with EGL)
 - Running games with WINE on Linux

**Planned:**
 - Simple GUI for managing/launching games
 - Importing/Exporting installed games from/to the Epic Games Launcher
 - Better interfaces for other developers to use Legendary in their projects
 - Lots and lots of bug fixes, optimizations, and refactoring...

## Requirements

- Linux or Windows (64-bit)
- python 3.8+ (64-bit on Windows)
- PyPI packages: `requests`, optionally `setuptools` and `wheel` for setup/building

## How to run/install

### Package Manager

Several distros already have (unofficial) packages available, check out the [Available Linux Packages](https://github.com/derrod/legendary/wiki/Available-Linux-Packages) wiki page for details.

Currently this includes
[Arch](https://github.com/derrod/legendary/wiki/Available-Linux-Packages#arch-aur),
[Fedora](https://github.com/derrod/legendary/wiki/Available-Linux-Packages#fedora), and
[openSUSE](https://github.com/derrod/legendary/wiki/Available-Linux-Packages#opensuse)
but more will be available in the future.

### Standalone
Download the `legendary` or `legendary.exe` binary from [the latest release](https://github.com/derrod/legendary/releases/latest)
and move it to somewhere in your `$PATH`/`%PATH%`. Don't forget to `chmod +x` it on Linux.

The Windows .exe and Linux executable were created with PyInstaller and will run standalone even without python being installed.
Note that on Linux glibc >= 2.25 is required, so older distributions such as Ubuntu 16.04 or Debian stretch will not work.

### Python package

Legendary is available on [PyPI](https://pypi.org/project/legendary-gl/), to install simply run:
```bash
pip install legendary-gl
```

#### Manually from the repo
- Install python3.8, setuptools, wheel, and requests
- Clone the git repository and cd into it
- Run `python3.8 setup.py install`

#### Ubuntu 20.04 example

Ubuntu 20.04's standard repositories include everything needed to install legendary:
````bash
sudo apt install python3 python3-requests python3-setuptools-git
git clone https://github.com/derrod/legendary.git
cd legendary
sudo python3 setup.py install
````

Note that in this example we used `sudo` to install the package on the system, this may not be advisable depending on your setup.

### Directly from the repo (for dev/testing)

- Install python3.8 and requests (optionally in a venv)
- cd into `legendary/` (the folder with `cli.py`)
- run `PYTHONPATH=.. python3.8 cli.py`

## Quickstart

To log in:
````
$ legendary auth
````
Authentication is a little finicky since we have to go through the Epic website. The login page should open in your browser and after logging in you should be presented with a JSON response that contains a code, just copy and paste the code into your terminal to log in.
On Windows you can use the `--import` flag to import the authentication from the Epic Games Launcher. Note that this will log you out of the Epic Launcher.

Listing your games
````
$ legendary list-games
````
This will fetch a list of games available on your account, the first time may take a while depending on how many games you have.

Installing a game
````
$ legendary install Anemone
````
**Important:** the name used for these commands is the app name, *not* the game's name! The app name is in the parentheses after the game title in the games list.

List installed games and check for updates
````
$ legendary list-installed --check-updates
````

Launch (run) a game with online authentication
````
$ legendary launch Anemone
````
**Tip:** most games will run fine offline (`--offline`), and thus won't require launching through legendary for online authentication. You can run `legendary launch <App Name> --offline --dry-run` to get a command line that will launch the game with all parameters that would be used by the Epic Launcher. These can then be entered into any other game launcher (e.g. Lutris/Steam) if the game requires them.

Importing a previously installed game
````
$ legendary import Anemone /mnt/games/Epic/WorldOfGoo
````
**Note:** Importing will require a full verification so Legendary can correctly update the game later.

Sync savegames with the Epic Cloud
````
$ legendary sync-saves
````
**Note:** When this command is run the first time after a supported game has been installed it will ask you to confirm or provide the path to where the savegame is located.

## Usage

````
usage: legendary [-h] [-v] [-y] [-V] {auth,install,download,update,repair,uninstall,launch,list-games,list-installed,list-files,list-saves,download-saves,sync-saves,verify-game,import-game} ...

Legendary v0.0.X - "Codename"

optional arguments:
  -h, --help            show this help message and exit
  -v                    Set loglevel to debug
  -y                    Default to yes for all prompts
  -V                    Print version and exit

Commands:
  {auth,install,download,update,repair,uninstall,launch,list-games,list-installed,list-files,list-saves,download-saves,sync-saves,verify-game,import-game}
    auth                Authenticate with EPIC
    install (download,update,repair)
                        Download a game
    uninstall           Uninstall (delete) a game
    launch              Launch a game
    list-games          List available (installable) games
    list-installed      List installed games
    list-files          List files in manifest
    list-saves          List available cloud saves
    download-saves      Download all cloud saves
    sync-saves          Sync cloud saves
    verify-game         Verify a game's local files
    import-game         Import an already installed game

Individual command help:

Command: auth
usage: legendary auth [-h] [--import] [--code <exchange code>] [--delete]

optional arguments:
  -h, --help            show this help message and exit
  --import              Import EGS authentication data
  --code <exchange code>
                        Use specified exchange code instead of interactive authentication.
  --delete              Remove existing authentication data


Command: install
usage: legendary install <App Name> [options]

Aliases: download, update

positional arguments:
  <App Name>            Name of the app

optional arguments:
  -h, --help            show this help message and exit
  --base-path <path>    Path for game installations (defaults to ~/legendary)
  --game-folder <path>  Folder for game installation (defaults to folder in metadata)
  --max-shared-memory <size>
                        Maximum amount of shared memory to use (in MiB), default: 1 GiB
  --max-workers <num>   Maximum amount of download workers, default: 2 * logical CPU
  --manifest <uri>      Manifest URL or path to use instead of the CDN one (e.g. for downgrading)
  --old-manifest <uri>  Manifest URL or path to use as the old one (e.g. for testing patching)
  --base-url <url>      Base URL to download from (e.g. to test or switch to a different CDNs)
  --force               Ignore existing files (overwrite)
  --disable-patching    Do not attempt to patch existing installations (download entire changed file)
  --download-only, --no-install
                        Do not mark game as intalled and do not run prereq installers after download
  --update-only         Abort if game is not already installed (for automation)
  --dlm-debug           Set download manager and worker processes' loglevel to debug
  --platform <Platform>
                        Platform override for download (disables install)
  --prefix <prefix>     Only fetch files whose path starts with <prefix> (case insensitive)
  --exclude <prefix>    Exclude files starting with <prefix> (case insensitive)
  --install-tag <tag>   Only download files with the specified install tag (testing)
  --enable-reordering   Enable reordering to attempt to optimize RAM usage during download
  --dl-timeout <sec>    Connection timeout for downloader (default: 10 seconds)
  --save-path <path>    Set save game path during install.
  --repair              Repair already installed game by downloading corrupted/missing files


Command: uninstall
usage: legendary uninstall [-h] <App Name>

positional arguments:
  <App Name>  Name of the app

optional arguments:
  -h, --help  show this help message and exit


Command: launch
usage: legendary launch <App Name> [options]

Note: additional arguments are passed to the game

positional arguments:
  <App Name>            Name of the app

optional arguments:
  -h, --help            show this help message and exit
  --offline             Skip login and launch game without online authentication
  --skip-version-check  Skip version check when launching game in online mode
  --override-username <username>
                        Override username used when launching the game (only works with some titles)
  --dry-run             Print the command line that would have been used to launch the game and exit
  --language <two letter language code>
                        Override language for game launch (defaults to system settings)
  --wrapper <wrapper command>
                        Wrapper command to launch game with


Command: list-games
usage: legendary list-games [-h] [--platform <Platform>] [--include-ue] [--csv] [--tsv]

optional arguments:
  -h, --help            show this help message and exit
  --platform <Platform>
                        Override platform that games are shown for
  --include-ue          Also include Unreal Engine content in list
  --csv                 List games in CSV format
  --tsv                 List games in TSV format


Command: list-installed
usage: legendary list-installed [-h] [--check-updates] [--csv] [--tsv]

optional arguments:
  -h, --help       show this help message and exit
  --check-updates  Check for updates when listing installed games
  --csv            List games in CSV format
  --tsv            List games in TSV format


Command: list-files
usage: legendary list-files [-h] [--force-download] [--platform <Platform>] [--manifest <uri>] [--csv] [--tsv] [--hashlist] [--install-tag <tag>] [<App Name>]

positional arguments:
  <App Name>            Name of the app (optional)

optional arguments:
  -h, --help            show this help message and exit
  --force-download      Always download instead of using on-disk manifest
  --platform <Platform>
                        Platform override for download (disables install)
  --manifest <uri>      Manifest URL or path to use instead of the CDN one
  --csv                 Output in CSV format
  --tsv                 Output in TSV format
  --hashlist            Output file hash list in hashcheck/sha1sum compatible format
  --install-tag <tag>   Show only files with specified install tag


Command: list-saves
usage: legendary list-saves [-h] [<App Name>]

positional arguments:
  <App Name>  Name of the app (optional)

optional arguments:
  -h, --help  show this help message and exit


Command: download-saves
usage: legendary download-saves [-h] [<App Name>]

positional arguments:
  <App Name>  Name of the app (optional)

optional arguments:
  -h, --help  show this help message and exit


Command: sync-saves
usage: legendary sync-saves [-h] [--skip-upload] [--skip-download] [--force-upload] [--force-download] [--save-path <path>] [--disable-filters] [<App Name>]

positional arguments:
  <App Name>          Name of the app (optional)

optional arguments:
  -h, --help          show this help message and exit
  --skip-upload       Only download new saves from cloud, don't upload
  --skip-download     Only upload new saves from cloud, don't download
  --force-upload      Force upload even if local saves are older
  --force-download    Force download even if local saves are newer
  --save-path <path>  Override savegame path (only if app name is specified)
  --disable-filters   Disable save game file filtering (in case it breaks)


Command: verify-game
usage: legendary verify-game [-h] <App Name>

positional arguments:
  <App Name>  Name of the app

optional arguments:
  -h, --help  show this help message and exit


Command: import-game
usage: legendary import-game [-h] <App Name> <Installation directory>

positional arguments:
  <App Name>            Name of the app
  <Installation directory>
                        Path where the game is installed

optional arguments:
  -h, --help            show this help message and exit
````


## Config file

Legendary supports some options as well as game specific configuration in `~/.config/legendary/config.ini`:
````ini
[Legendary]
log_level = debug
; maximum shared memory (in MiB) to use for installation
max_memory = 1024
; default install directory
install_dir = /mnt/tank/games
; locale override, must be in RFC 1766 format (e.g. "en-US")
locale = en-US

; default settings to use (currently limited to WINE executable)
[default]
; (linux) specify wine executable to use
wine_executable = wine

; default environment variables to set (overriden by game specific ones)
[default.env]
WINEPREFIX = /home/user/legendary/.wine

; Settings to only use for "AppName"
[AppName]
; launch game without online authentication by default
offline = true
; Skip checking for updates when launching this game
skip_update_check = true
; start parameters to use (in addition to the required ones)
start_params = -windowed
wine_executable = /path/to/proton/wine64
; override language with two-letter language code
language = fr

[AppName.env]
; environment variables to set for this game (mostly useful on linux)
WINEPREFIX = /mnt/tank/games/Game/.wine
DXVK_CONFIG_FILE = /mnt/tank/games/Game/dxvk.conf
````
