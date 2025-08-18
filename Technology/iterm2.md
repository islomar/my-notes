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

## Shortcuts
* CMD+d: to vertically split the screens.
* CMD+Shift+D: horizontally split the screens.
* CMD+Option+arrow: to move the focus between screens
* CMD+Shif+I:  attach to all the panes, and then you can write the same in all the screens.
    * Also useful to reload the zsh profile eveverywhere
* CMD+F: to search in the terminal (e.g. after a `cat`)
    * After finding the word, you expand the selection with `Tab`
* CMD+Shift+C: start "copy mode". You can move as in vim.
    * `y` to copy it.
    * Ctrl+V+arrow: select columns in a vertical way
    * `g`: it selects from the beginning
    * `G`: it selects to the end
    * `o`: toggle for the cursos, it switches between the start and the end of the selection.
* CMD+Shift+H: paste history

## Toolbelt
* CMD+Shift+B:  open toolbelt
* Features: Profiles, Recent directories, Notes, Jobs, Paste History, Actions...
    * Actions: useful, like a macro.

## Shell integration
* [Utilities](https://www.iterm2.com/documentation-utilities.html)
* `imgls`: ls which shows the image thumbnails
* `imgcat <imageName>`: it shows the image
* `it2copy`, e.g. `cat xx.txt | it2copy` lets you copy the output of a file you your own clipboard when you are in another server.
* `it2attention fireworks`: to locate the cursor

## Scripting
* https://www.iterm2.com/documentation-scripting-fundamentals.html
* Using Python, you can extend the iTerm features.

## Status Bar
* You can configure it to show CPU Utilization, current directory, current user, git branch, etc.
* An alternative to have it in the prompt or the OSX status bar.

## Configuration versioning
* General > Preferences > Load preferences from a custom folder or URL

## Captured Output
* https://iterm2.com/documentation-captured-output.html
* E.g.: to highlight compilation/tests errors
* https://iterm2.com/documentation-triggers.html