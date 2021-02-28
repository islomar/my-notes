# Git course from CodelyTV

- ETA: 12 hours

### General

```
# Nombre del autor
git config --global user.name "Rafa Gómez"
# Email del autor
git config --global user.email "rafa.gomez@codely.tv"
```

- Show which remote branches exist: `git remote -v`
- Change the main branch from master to main: `git config --global init.defaultBranch main`
- It also stashes the new untracked files: `git stash -u`
- Show all the tags that include in its ancestors a specific commit_id: `git tag contains [commit_id]`
- Fetch remote branches and delete locally the ones deleted remotely (all prune): `git fetch -ap`

### Automatizando tareas del día a días

- You can add an `[alias]` section to your `.gitconfig`, for example:
  - `c = !git add -A && git commit`
  - `reset-permissions = !git diff -p -R --no-color | grep -E \"^(diff|(old|new) mode)\" --`
- We can create binaries which were executable by Git:
  - We should create files with preffix `git-` and place them somewhere in our path, giving it execution permissions.
  - e.g. `git-reset-permissions` under `.\bin`
  - Then, we can execute `git reset-permissions`
  - This is great when the alias is big.

### Git Areas

- Untracked: new files
- Working tree: new+existing files, not ready to commit
- Staging: files already prepared to be commited

### Labels vs GitHub Project vs PR status

- **Labels**: Las labels, como su nombre indica, son etiquetas que podemos añadir en nuestra PR (👀 Ojo, no confundamos las labels con los tags vistos en la lección anterior), lo que nos permitirá identificar en qué fase del proceso se encuentra.
- **GitHub projects**: Los projects nos permiten tener nuestro propio panel tipo ‘Kanban’ en una pestaña dentro del propio repositorio, pudiendo definir un backlog acorde a nuestras necesidades
- **PR status**: se puede crear como Draft.

## More interesting links

- https://www.campusmvp.es/recursos/post/git-como-evitar-problemas-con-cambios-de-linea-al-trabajar-en-equipo.aspx
- https://github.com/scmbreeze/scm_breeze
  - SCM Breeze is a set of shell scripts (for bash and zsh) that enhance your interaction with git. It integrates with your shell to give you numbered file shortcuts, a repository index with tab completion, and many other useful features.
- https://github.com/CodelyTV/dotfiles/blob/master/terminal/_aliases/git.sh

## TO DO

- Search the alias `gl` from Rafa
  - `dot git pretty-log`
  - https://github.com/CodelyTV/dotfiles/blob/97762e9d3b2bc0ede05454f39f3544eea382a686/scripts/git/pretty-log
- https://github.com/CodelyTV/pr-size-labeler
- https://mtlynch.io/code-review-love/
