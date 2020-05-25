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
    * `alias ll="ls -lart"`

## Bindings
* `bindkey -l`: to see all the existing bindings
* `bindkey -M main`: to see all the bindings for the core of the main of zsh.
* We can declare functions inside the `.zshrc`.
* By convention, the binding functions should start with underscore. E.g.
```
_display_message() {
    echo "ls -la"
}

zle     -N   _display_message #register the function as a widget (it needs to be a widget in order to create a binding)
bindkey '^h' _display_message
```
* [zle: Zsh-Line-Editor](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html)


## Performanceraptor
* Try [fzf](https://github.com/junegunn/fzf), a command-line fuzzy finder. E.g. `brew install fzf`
    * [Vim universe. fzf - command line fuzzy finder](https://www.youtube.com/watch?v=qgG5Jhi_Els)
    * `fzf -e` for exact matches only
    * `fzf | xargs ls -l`
    * `vim ~/**` + Tab: the double asterisk call fzf
    * `cd /**`: fuzzy search used to changed to another directory
    * vim -o `fzf`
    * Ctrl+T to list files with fzf
    * `ssh **`: it pulls most recent IPs and config from sshconfig
    * `kill -9` + Tab
    * `fzf --preview 'bat --style=numbers --color=always {} | head -500'`: to show preview files on a right window
* Example of use:
```
_display_message() {
    dirtomove = $(ls | fzf)
    cd "$dirtomove"
}

zle     -N   _display_message
bindkey '^h' _display_message
```
* `history` in an alias for `fc -rl`
```
_reverse_search() {
    selected_command=$(fc -rl 1 | awk '{$1="";print substr($0,2)}' | fzf)
    echo -n $selected_command
}
zle -N _reverse_search
bindkey '^r' _reverse_search
```

## Zsh themes
* `PROMPT="this is my prompt"`
* `RPROMPT="%T"`: to show the time on the right
* The variables that we can use in the shell are: http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html#Prompt-Expansion
* http://zsh.sourceforge.net/Doc/Release/Shell-Builtin-Commands.html#Shell-Builtin-Commands
* `print -P "%n @ %d: "`: print in prompt mode
* [CodelyTV Theme](https://github.com/CodelyTV/dotfiles/blob/master/terminal/zsh/themes/prompt_codelytv_setup)
* In order to activate the propmt substitution (and execute functions), you need to include `setopt PROMPT_SUBST` on the top of your `.zshrc`
```
git_prompt_info() {
    inside_git_repo="$(git rev-parse --is-inside-work-tree 2>/dev/null)"

    if [ "$inside_git_repo" ]; then
        current_branch=$(git branch --show-current)
        print -P " on %{%F{yellow}%}$current_branch%{%f%}"
    else
        echo ""
}

prompt_exit_code() {
    local EXIT="$?"

    if [ $EXIT -eq 0 ]; then
        echo -n green
    else
        echo -n red
    fi
}

PROMPT='%{%F{$(prompt_exit_code)}%}%n%{%f%} @ %d$(git_prompt_info): '
```

## Oh My Zsh
* https://github.com/ohmyzsh/ohmyzsh
* It overrides the `.zshrc`, creating a backup with name `.zshrc.pre-oh-my-zsh`
* `time zsh -i -c exit`: to measure how much time it takes to load zsh.
    * `-i` means interactive
    * `-c` to run a command (`exit` in this case)
* Never touch %ZSH/oh-my-zsh.sh
* [Oh My Zsh Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
* Optionally to hide the “user@hostname” info when you’re logged in as yourself on your local machine, add prompt_context(){} at the bottom of your ~/.zshrc. See [here](https://github.com/agnoster/agnoster-zsh-theme/issues/39#issuecomment-307338817) to learn how to only show your username instead.
* `PS1` is the same than `PROMPT`
* Their `ls` is an alias to https://github.com/ogham/exa

### Plugins
* You have lots of plugins, e.g. for composer.
* Recommended: zsh-autosuggestions and zsh-syntax-highlightning
* Other people recommendations: 
    * https://github.com/hlissner/zsh-autopair
    * https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fzf


### Alias
* `alias` shows you all the alias
* You can add more aliases either insie `.zshrc` or under `$ZSH_CUSTOM`

## Improve performance
* iTerm2: instead of using Login shell, use Command with `/bin/zsh`
* https://htr3n.github.io/2018/07/faster-zsh/ >> add zprof for profiling
* `for i in $(seq 1 10); do time zsh -i -c exit; done`
* They'd rather ~50 ms, though ~100 ms is good enough.

### Another option: ZIM
* https://github.com/zimfw/zimfw
* They use ZIM.
    * `curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh`
* Before installing it, you would need to uninstall OhMyZsh (there is a script of that).
* It uses a `.zimrc`
* https://github.com/zimfw/zimfw/wiki/Themes

### Lazy slow functions
1. Extract your function to another file, e.g. to `algo_que_tarda.sh`
2. Inside `.zshrc`, declare:
```
function aqt {
    fname=$(declare -f -F algo_que_tarda)

    [ -n "$fname" ] || source "~/algo_que_tarda"

    algo_que_tarda
}
```
3. This way, the load of the function `algo_que_tarda` is done in an async way, and we save that time when we actually call `algo_que_tarda`.
4. To avoid having to rename the function for not getting into an infinite loop, we can do something like this:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

nvm() {
    unset -f nvm node npm
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    nvm "$@"
}
```

### Feedback
* Simple option:
```
function progress_bar() {
    echo -ne '#####                     (33%)\r\c'
    sleep 1
    echo -ne '#############             (66%)\r\c'
    sleep 1
    echo -ne '#######################   (100%)\r\c'
    echo -ne '\n'
}
```
* Advanced option: https://github.com/edouard-lopez/progress-bar.sh

## Other tips
* Configure zsh in Intellij: Tools > Terminal > Shell path > `/bin/zsh`
* Upgrade ohmyzsh: 
    * `upgrade_oh_my_zsh`
    * It does not upgrade neither zsh nor the plugins
    * To upgrade the plugins: `cd $HOME/.oh-my-zsh/plugins $$ git pull`
* Upgrade zim: `zimfw update && zimfw upgrade`
* Create auto-completes:
    * https://mads-hartmann.com/2017/08/06/writing-zsh-completion-scripts.html
    * http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Completion-System
    * We create a folder called `completions` under the zsh home.
    * Inside, you can create a file for each autocompletion, e.g.:
        * https://github.com/CodelyTV/dotfiles/blob/master/terminal/zsh/completions/_dot
        * E.g. `dot <TAB>` to show everything under a specific folder


## Interesting links
### Tools
    * https://denysdovhan.com/spaceship-prompt/
    * https://github.com/codelytv/dotfiles
    * https://github.com/zsh-users/zsh-syntax-highlighting
    * https://github.com/zsh-users/zsh-autosuggestions
    * https://github.com/sharkdp/bat
    * https://github.com/junegunn/fzf
    * https://github.com/ogham/exa
    * https://htr3n.github.io/2018/07/faster-zsh/ >> add zprof for profiling
    * https://github.com/rupa/z
        * https://askubuntu.com/questions/250012/how-do-i-install-z-script
    * https://github.com/wting/autojump

### Readings    
    * https://www.reddit.com/r/zsh/comments/ak0vgi/a_comparison_of_all_the_zsh_plugin_mangers_i_used/
    * https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html
    * https://www.freecodecamp.org/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156/
