# Dotfiles course from CodelyTV
Estimated time ~ 1 hour

* https://github.com/CodelyTV/dotly
* https://github.com/rgomezcasas/dotfiles
* https://github.com/CodelyTV/dotfiles
* https://github.com/islomar/dotfiles


## General
* They like cloning the `dotfiles` repo under `$HOME/.dotfiles`.
* They move the dot files to the repo folder and then they create a symbolic link: `ln -s $HOME/.dotfiles/.bashrc $HOME/.bashrc`
* What they move: `.profile`, `.bash_profile`, `.bashrc`, `.zshrc`, `.gitconfig/`, `.gitignore_global`, `.gitattributes`, `.zlogin`
* They use [skhd](https://github.com/koekeishiya/skhd) for OSX hotkeys management.
* In Mac, the config can also be un der `$HOME/Library/Application\ Support/`
    * e.g. for VS Code, they made symbolic links to files under `Code/User`, like `keybindings.json`, `settings.json` and `snippets`.
* How to know where an application keeps its configuration?
    * `lsof`: list open files
    * `lsof -c "iTerm"`: to see all the files opened by iTerm
    * But sometimes the config files are only opened at the beginning or when something is changed. In that case, run `lsof -r2 -c "iTerm"`: it will run every 2 seconds, so you can then change the iTerm configuration and see the differences between the moment when the change was done and before.
* Sometimes the most practical thing to do is to create a symbolic link to a whole folder. In that case, we can include in the `.gitignore` the files from the folder that we are not interested in.


## How to export all the programs installed
* **brew**
`brew bundle dump --file="$HOMEBREW_BUNDLE_FILE_PATH" --force`

* **apt**
`apt list --installed > apt-installed.txt`

* **pip**
`pip3 freeze > "$DOTFILES_PATH/langs/python/requirements.txt"`

* **npm**
`ls -1 /usr/local/lib/node_modules | grep -v npm >"$DOTFILES_PATH/langs/js/global_modules.txt"`

* **composer**
Hacemos un symlink del `~/.composer/composer.json`


## Performance issues
* Group all the scripts: https://github.com/rgomezcasas/dotfiles/tree/master/scripts
* You can use doclogs in the scripts, e.g. https://github.com/rgomezcasas/dotfiles/blob/master/scripts/mysql/general_log#L7
* Group all the scripts in a `dot` command.
  * https://github.com/rgomezcasas/dotfiles/blob/master/bin/dot
  * `dot <nameOfTheScriptsFolder> <nameOfTheScript> <arguments>`
  * It shows autocomplete
  * It also reads the doclogs (help)
  * It can be cumbersome... another option: use the `dotly` tool :-)


## dotly
* https://github.com/CodelyTV/dotly
* Wrapper de zim.
* Installer.


## Recommended apps
* [Alfred (OSX)](https://www.alfredapp.com/): for productivity, shortcuts, etc.
    * Alternatives in Linux: Albert and [rofi](https://github.com/davatorium/rofi)
* [navi](https://github.com/denisidoro/navi)
    * Documentation, interactive shell, cheatsheets for commands.