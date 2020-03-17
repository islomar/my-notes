# ZSH Terminal
* https://pro.codely.tv/library/terminal-zsh/about/
* https://github.com/codelytv/dotfiles
* Estimated time: ~3.5 hours


## Bash vs Zsh vs Fish
* `sh` is a specification, and then you have several implementations, e.g. zsh, bash, dash.
* Fish is not compatible with `sh`.
* Zsh is much faster than bash.
* Mac OSX comes by default with zsh.
* Terminal for OSX: iTerm. For Ubuntu, `Terminator`.


## Terminal vs Console vs Shell
* [Terminal emulator](https://en.wikipedia.org/wiki/Terminal_emulator)
    * It can run a shell inside.
    * E.g. Terminal (Mac), iTerm, Terminator, etc.
* [Shell](https://en.wikipedia.org/wiki/Shell_(computing))
    * It could be a CLI or GUI.
    * E.g. bash, zsh, fish.
* Multiplexers: e.g. tmux, screen (by default in *Nix systems), byobu.
* Windows manager: e.g. for OSX we have Spectacle, Magnet

## Terminals
* iTerm2
    * https://www.iterm2.com/
    * Recommendations:
        * Remove borders (from Preferences)
* Windows Terminal: https://devblogs.microsoft.com/commandline/introducing-windows-terminal/
* Linux Terminal: Terminator
* Cross-OS terminals:
    * https://github.com/zeit/hyper Very popular, lots of plugins.
    * https://eugeny.github.io/terminus/ Not very performant, it consumes a lot of RAM... :-/

## Install and configure zsh
* `.zlogin`: for config related with graphical environments. We can ignore it...
* `.zshenv`: global env for all our sessions. The convention is to include here all the exports, e.g `export GOPATH=xxxxx`
* `.zshrc`: default config file. It is run each time we create a new session (same for the other files).
* If you want to hide the typical first line appearing when opening a new session (e.g. `Last login: Mon Mar 16 13:00:56 on ttys002`), just create an empty file with name `.hushlogin`


## Aliases
* https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/common-aliases
* Initially we can include them in `.zshrc` (we will extract them later).
    * `alias sudo="sudo "`: to be able to do sudo with other aliases.
    * `alias please='sudo $(fc -ln -1)'`


## Interesting links
* https://denysdovhan.com/spaceship-prompt/
* https://github.com/codelytv/dotfiles