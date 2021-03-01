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
- Working tree: new+existing files, not ready to commit, not added to the staging area.
- Staging: files already prepared to be commited

### Labels vs GitHub Project vs PR status

- **Labels**: Las labels, como su nombre indica, son etiquetas que podemos añadir en nuestra PR (👀 Ojo, no confundamos las labels con los tags vistos en la lección anterior), lo que nos permitirá identificar en qué fase del proceso se encuentra.
- **GitHub projects**: Los projects nos permiten tener nuestro propio panel tipo ‘Kanban’ en una pestaña dentro del propio repositorio, pudiendo definir un backlog acorde a nuestras necesidades
- **PR status**: se puede crear como Draft.

## Workflows

- https://martinfowler.com/articles/branching-patterns.html
- **Git Flow**:
  - https://danielkummer.github.io/git-flow-cheatsheet/
- **GitHub Flow**:
  - ramas: main/master y feature/hotfix.
  - prohibido hacer commit en master directamente
  - despliegan en Producción desde las ramas feature/hotfix, NO desde main/master.
- **GitLab Flow**:
  - Ramas:
    - master:
      - entorno de staging.
      - se hace merge-request desde feature/hotfix
      - prohibido hacer commit en master directamente
    - feature/hotfix: entorno de desarrollo
    - pre-producción:
      - se hace merge-request desde master
      - se pueden pasar commits desde hotfix con cherry-pick
    - producción
      - se hace merge-request desde master
      - se pueden pasar commits desde hotfix con cherry-pick
- **Release Flow**:

  - De Microsoft.
  - Estas ramas de release se corresponden con sus sprints de 3 semanas, por lo que tras cada sprint, se desplegarían todos los topics mergeados en esta rama.
  - Ramas topic/hotfix, unas 300 al día que se mergean a master.
  - Ramas release cada 3 semanas, que se despliegan a Producción.
  - https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow

- **Trunk-Based Development**
  - Admite crear feature branches.
  - Se despliega master a Producción en cuanto se hace el merge de una feature branch.
  - Release branches: copia de master, se hacen tags.
- **Master-only**
  - XXX

## Best practices

- `git config --global core.excludesfile ~/.gitignore_global`
- http://gitignore.io/
- Mensajes del commit:
  - https://chris.beams.io/posts/git-commit/
  - https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
  - El título del commit no puede ser más largo de 50 carácteres
  - No acabes el commit con un punto
  - Primera letra en mayúscula
  - El cuerpo del commit no más de los 72 carácteres por línea
  - Utiliza el modo imperativo al escribir
  - Utiliza el cuerpo para explicar el ‘qué’ y el ‘porqué’ en lugar del ‘cómo’

## Estrategias de integración de ramas

- https://www.atlassian.com/git/tutorials/merging-vs-rebasing
- **merge**:
  - `git merge master`
  - Con esta estrategia, lo que haremos será traernos todos los cambios que haya en la rama main/master (o la que le indiquemos en el comando) unificados y **añadirlos en un nuevo commit** (Merge commit) hacia nuestra rama actual.
  - No mantiene el orden de los commits hechos en la rama origen (e.g. master).
- **rebase**
  - `git rebase master`
  - **The golden rule of git rebase is to never use it on public branches.**
  - Respeta el orden cronológico de los commits del origen.
  - Al ejecutar en nuestra rama el rebase con main/master, nos estaremos trayendo los cambios que hubiera en esa rama para, después de ‘descomponer’ la nuestra, ir aplicando de forma ordenada los commits de ambas ramas.
  - This moves the entire feature branch to begin on the tip of the master branch, effectively incorporating all of the new commits in master. But, instead of using a merge commit, rebasing re-writes the project history by creating brand new commits for each commit in the original branch.
  - Reescribe la historia. Hay que hacer un `push -f`.
  - Queda más limpia la línea histórica.
  - No viable si alguien más trabaja en la misma rama.
  - Configurar pull para que sea `fetch+rebase` en lugar de `fetch+merge`: `git config --global pull.rebase true`
- **squash**
  - Existe en el contexto de una rebase.
  - `git rebase -i HEAD~3`
- `git pull --rebase` para que no haga merge de lo que traiga de origin en nuestro local (si hay algún commit local pendiente de pushear).
- `git log --graph --abbrev-commit --decorate --all`

## Resolución de conflictos

- Conflict:

```
<<<< Our branch name
Our change
=====
The other change
>>>> The other branch name
```

- `git pull --rebase --autostash`

## More interesting links

- https://www.campusmvp.es/recursos/post/git-como-evitar-problemas-con-cambios-de-linea-al-trabajar-en-equipo.aspx
- https://github.com/scmbreeze/scm_breeze
  - SCM Breeze is a set of shell scripts (for bash and zsh) that enhance your interaction with git. It integrates with your shell to give you numbered file shortcuts, a repository index with tab completion, and many other useful features.
- https://github.com/CodelyTV/dotfiles/blob/master/terminal/_aliases/git.sh
- [GitHub Tree Explorer](https://chrome.google.com/webstore/detail/tree-explorer-for-github/caffoilocbbhnkdlpdcfanpbeholjdii)
- https://github.com/CodelyTV/pr-size-labeler
- https://mtlynch.io/code-review-love/

## TO DO

- Search the alias `gl` from Rafa
  - `dot git pretty-log`
  - https://github.com/CodelyTV/dotfiles/blob/97762e9d3b2bc0ede05454f39f3544eea382a686/scripts/git/pretty-log
- Crear alias para `git undo` y que deshaga el último commit.
