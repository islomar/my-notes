# iTerm2: terminal for macOS
* https://www.iterm2.com/
* https://www.jetbrains.com/help/idea/2020.1/tuning-the-ide.html?_ga=2.126106949.913947388.1584706716-389991166.1584706716#default-dirs
* Rafa's shortcut for iTerm2: Ctrl + Alt + CMD + Space
* Import `CodelyTV.itermcolors` to Color Presets
* Delete iTerm border: Profiles > Window > Style > No Title Bar
    * Not recommended if you drag and drop it to place it or resize it.
    * Only recommended if you use a window manager (e.g. Spectacle)
* They prefer configuring the tabs down instead of up.
* You can create different profiles, e.g. to see clearly if you are connected to Production.
    * One way is to configure a profile with a Command being `ssh user@hostname xx` (obviously do not include the password there!)  
    * You can configure a shortcut for each profile
* You can configure a profile to be automatically activated (e.g. after running an ssh from the shell):
    * Profile > Advanced > Automatic Profile Switching
    * For this to work, you need to run in iTerm2 the "Install Shell Integration". This will add a line in `.zshrc`
    * This "Install Shell Integration" slows down the shell...
    * `/var/root/.zshrc`: copy here that last line included in the regular user's `.zshrc`, changing `$HOME` with the regular user dir, e.g. `/home/islomar`
* Profile > General > Badge: it will appear in the top right corner, big size.
    * https://www.iterm2.com/3.0/documentation-badges.html
    * E.g.: `\(session.username)@\(session.hostname)\nPath: \(session.path)`
    * Another example: `\(session.username)@\(session.hostname)\nPath: \(session.path)\nGit Branch: \(user.git_branch)\nGit Repo: \(user.git_repo)`. This needs to be defined in `.zshrc`:
```
function iterm2_print_user_vars() {
  iterm2_set_user_var git_branch $((git branch 2> /dev/null) | grep \* | cut -c3-)
  iterm2_set_user_var git_repo $((git remote show origin 2> /dev/null) | grep "Fetch URL:" | cut -c14-)
}
```

