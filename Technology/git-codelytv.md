<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Git course from CodelyTV](#git-course-from-codelytv)
  - [Annotations from website learngitbranching](#annotations-from-website-learngitbranching)
  - [General](#general)
    - [Automatizando tareas del día a días](#automatizando-tareas-del-d%C3%ADa-a-d%C3%ADas)
    - [Git Areas](#git-areas)
    - [Labels vs GitHub Project vs PR status](#labels-vs-github-project-vs-pr-status)
  - [Workflows](#workflows)
  - [Best practices](#best-practices)
  - [Estrategias de integración de ramas](#estrategias-de-integraci%C3%B3n-de-ramas)
  - [Asegurando convenciones de equipo con Git](#asegurando-convenciones-de-equipo-con-git)
  - [Resolución de conflictos](#resoluci%C3%B3n-de-conflictos)
  - [Soluciones prácticas para problemas reales](#soluciones-pr%C3%A1cticas-para-problemas-reales)
  - [Analizando nuestro repositorio: Extrayendo información en base a datos](#analizando-nuestro-repositorio-extrayendo-informaci%C3%B3n-en-base-a-datos)
    - [Cómo priorizar esfuerzos de refactoring](#c%C3%B3mo-priorizar-esfuerzos-de-refactoring)
  - [Conociendo las tripas de Git](#conociendo-las-tripas-de-git)
    - [Conociendo la carpeta .git](#conociendo-la-carpeta-git)
    - [Cómo recuperar commits perdidos](#c%C3%B3mo-recuperar-commits-perdidos)
  - [Preguntas del Mundo Real](#preguntas-del-mundo-real)
    - [Versionado de configuración de producción y secretos](#versionado-de-configuraci%C3%B3n-de-producci%C3%B3n-y-secretos)
    - [Exprimir Git log](#exprimir-git-log)
    - [Git worktree: Trabaja en varias ramas de forma independiente](#git-worktree-trabaja-en-varias-ramas-de-forma-independiente)
    - [Cómo mergeamos PRs: Merge commit vs Squash vs Rebase](#c%C3%B3mo-mergeamos-prs-merge-commit-vs-squash-vs-rebase)
  - [More interesting links](#more-interesting-links)
  - [TO DO](#to-do)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Git course from CodelyTV

- ETA: 12 hours

## Annotations from website learngitbranching

- https://learngitbranching.js.org/
- **HEAD** can point either to a branch (usually) or to a commit (_detached HEAD_)
- HEAD: the active location. It usually points to a branch. But you can point it to a commit (that's when we talk about a _detached HEAD_).
- `git branch -f [branchName] [commitHash]`: this way, we can change where a branch is pointing.

## General

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

## Asegurando convenciones de equipo con Git

- From GitHub Settings, you can configure branches rules, e.g. to avoid pushing directly in the master branch, requiring PR reviews before merging, require code owners, require status checks to pass, etc.
- Hooks:
  - https://github.com/CodelyTV/scala-ddd-example/tree/master/doc/hooks

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
- Cómo resolver el conflicto que surge cuando se ha cambiado un mismo fichero en remoto y en local, y hay varios commits para los que git pide resolver el conflicto:
  1. Hacer un Merge sobre nuestra rama de trabajo y resolver el conflicto: Con esto conseguimos que los cambios se apliquen como un único commit (merge commit) y por tanto resolvemos los conflictos una sola vez
  2. Hacer un Rebase sobre nuestra rama de trabajo y, ante el conflicto, quedarnos con todo lo nuestro: Con esto conseguimos que se elimine el merge commit y quede limpio nuestro histórico de commits

## Soluciones prácticas para problemas reales

- Deshacer cambios locales:
  - `reset --soft`: Los cambios se mantienen aplicados en nuestro local, dejándolos en el staging area
  - `reset --mixed`: Los cambios se mantienen aplicados en nuestro local, dejándolos en el working tree
  - `reset --hard`: Los cambios se eliminan completamente, descartándolos por completo
- File under `~/dotfiles/git/bin/git-undo`: https://github.com/CodelyTV/dotfiles/blob/master/bin/git-undo
- https://github.com/so-fancy/diff-so-fancy
  - https://github.com/rgomezcasas/dotfiles/commit/d9435ffe5f76ae048fe43a33bda4bb7bec1fb49d
- Muestra commits en el histórico que coincidan con el texto introducido: `git log --grep $string`
- Muestra los commits de los últimos 15 días: `git log --since=$(date --date="15 days ago" + "%Y-%m-%d")`
- `git log -S` (pickaxe): cuándo se introdujo o se eliminó una cadena de texto dentro del repositorio (o de un fichero concreto si necesitamos acotar la búsqueda)
- `git bisect run "test -f bug"`

## Analizando nuestro repositorio: Extrayendo información en base a datos

### Cómo priorizar esfuerzos de refactoring

- https://github.com/tj/git-extras
- **git-effort**, por ejemplo, lo que nos aportará es un resumen de qué ficheros son los que más se han modificado en el repositorio
- https://github.com/islomar/your-code-as-a-crime-scene
- https://github.com/smontanari/code-forensics
  - https://dev.to/antoinega/analyze-your-git-5ej0
  - https://hub.docker.com/r/jdevoo/code-forensic/
  - https://github.com/smontanari/code-forensics/wiki

## Conociendo las tripas de Git

### Conociendo la carpeta .git

- Comandos
  - Porcelana: los públicos
  - Fontanería: los internos
- ¿Qué es realmente una rama? Se trata de un fichero que guarda una referencia ligera y móvil a un commit (irá cambiando su referencia conforme vayamos haciendo nuevos commits)
- ¿Y el HEAD? Consiste en una referencia simbólica a nuestra rama activa, en algunos casos puede apuntar directamente a un commit, como al hacer checkout sobre un commit
- Al iniciar un repositorio desde cero, Git nos creará el directorio .git/ con una serie de subdirectorios, entre los cuales: hooks/ info/ refs/ **index/** **logs/** y **objects/**
- Dentro de estos directorios, encontraremos cuatro tipos de datos 🗂:
  - Blob (binary large object): Almacena datos en formato binario
    - Para guardar audio, vídeo, textos, etc.
  - Commit: Almacena información como el autor, la fecha, la referencia al tree…
  - Tree: Directorio que almacena Blobs y otros Trees
    - Carpeta que almacena por ejemplo las diferencias de un commit.
  - Tag: Representa una referencia estática a un commit concreto. Dos tipos:
    - Annotated: se les puede poner un nombre, son los que conocemos comúnmente.
    - Light: no se puede poner un nombre ni nada, no se guardan.
- El comando hash-object lo que nos permitirá será generar un SHA en base al contenido de nuestros cambios, almacenándolo bajo **objects/**

```
echo 'no tests no commit' | git hash-object --stdin -w
>c83952c095fccfe1fdf22e14f51bf85038ed8074
```

- `git cat-file -t [hash]`: me indica de qué tipo es un hash (e.g. de tipo blob)
- `git cat-file -p [hash]`: imprime el contenido de ese blob (e.g. el texto "no tests no commit")
- Al hacer commit, Git genera:
  - Un blob (si aún no existe) con el fichero
  - Un objeto tree (que apunta al blob): una especie de "carpeta".
  - Un objeto commit (que apunta al tree)
- Git reutiliza los blobs siempre y cuando el contenido no haya cambiado, haciendo en su lugar que los distintos tree apunten al mismo blob.

### Cómo recuperar commits perdidos

- ¿Cómo puedo perder un commit?
  1. Hago un detach HEAD yéndome a un commit específico
  2. Ahí hago un nuevo commit
  3. Vuelvo a la rama
  4. ¡He perdido el commit que hice en el paso 2! (aunque sigue existiendo... en alguna parte)
- Dos formas diferentes de recuperar commits perdidos:
  1. A través de logs:
  - En la carpeta _logs/_ se almacena `<commit-before><commit-after> ... <action><message>`
  - E.g. lo que le haya ocurrido a la rama master estará en el fichero `.git/logs/refs/heads/master`
  - Una vez identificado el [commit-after], ejecutamos: `git reset --hard 'hash_del_commit'`
  2. Usando **reflog**
  - `git reflog show [branch]`
  - Muestra `<commit><acction>...<message>`
- Git no borra automáticamente el contenido aunque nosotros hagamos un ‘reset’, sino que permanecen en torno a 90 días si no hacemos un Push o forzamos manualmente su vaciado.
- También podemos recuperar cambios no commiteados que han estado en el staging area
  - Todo eso se guarda en el `index/`
  - `git fsck --unreachable --no-reflogs (--lost-found) (--no-progress)`
  - Este comando nos ayudará a detectar los blogs que no hayan sido trackeadas por Git, es decir, todo aquello que en algún momento hemos añadido al índice pero no está en algún commit
  - Tiene que haberse añadido al staging area en algún momento.
  - Una vez identificado el blob, podemos utilizar el comando git cat-file -p <hash> para que nos muestre el contenido de dicho blob y, de este modo, acceder a los cambios

## Preguntas del Mundo Real
### Versionado de configuración de producción y secretos
- Ficheros en repo (glups)
  - En todo caso, encriptado.
- Variables de entorno
- Vault
- AWS Parameter Store
- AWS Secrets Manager 

### Exprimir Git log

- `git log master feature-with-merge`: Nos muestra el histórico conjunto de todas las ramas/commits que le indiquemos (flattern) y no sólo el HEAD
- `git log --all`: Nos muestra todas las ramas de nuestro repositorio, incluídos los diferentes remotes que tengamos
- `git log master..feature-with-merge`: Recupera los commits que tenemos en la rama feature-with-merge y que no tiene master
- `git log feature-with-merge..master`: Recupera los commits que tenemos en master y que aún no tenemos en la rama feature-with-merge
- `git log master...feature-with-merge`: Mostrará aquellos commits que ambas ramas tienen distintos la una de la otra
- `git log --left-right master...feature-with-merge`: Nos situa los commits exclusivos de la feature branch a la derecha y los exclusivos de la rama master a la izquierda

### Git worktree: Trabaja en varias ramas de forma independiente
- https://git-scm.com/docs/git-worktree

### Cómo mergeamos PRs: Merge commit vs Squash vs Rebase
- https://www.davidchudzicki.com/posts/first-parent/

## More interesting links

- https://training.github.com/
- https://ohmygit.org/
- https://learngitbranching.js.org/
- https://www.campusmvp.es/recursos/post/git-como-evitar-problemas-con-cambios-de-linea-al-trabajar-en-equipo.aspx
- https://github.com/scmbreeze/scm_breeze
  - SCM Breeze is a set of shell scripts (for bash and zsh) that enhance your interaction with git. It integrates with your shell to give you numbered file shortcuts, a repository index with tab completion, and many other useful features.
- https://github.com/CodelyTV/dotfiles/blob/master/terminal/_aliases/git.sh
- [GitHub Tree Explorer](https://chrome.google.com/webstore/detail/tree-explorer-for-github/caffoilocbbhnkdlpdcfanpbeholjdii)
- https://github.com/CodelyTV/pr-size-labeler
- https://mtlynch.io/code-review-love/
- Firmar commits: https://docs.github.com/en/github/authenticating-to-github/signing-commits
- https://www.industriallogic.com/blog/whats-this-about-micro-commits/

## TO DO

- Search the alias `gl` from Rafa
  - `dot git pretty-log`
  - https://github.com/CodelyTV/dotfiles/blob/97762e9d3b2bc0ede05454f39f3544eea382a686/scripts/git/pretty-log
- Crear alias para `git undo` y que deshaga el último commit.
- https://github.com/so-fancy/diff-so-fancy
  - https://github.com/rgomezcasas/dotfiles/commit/d9435ffe5f76ae048fe43a33bda4bb7bec1fb49d
  - https://github.com/rgomezcasas/dotfiles/blob/30ed29fd7035417ab5ba0680ceb576ec80c74d07/shell/aliases.sh#L21
- `git log -g --abbrev-commit -pretty=oneline`
