# Makefiles course by CodelyTV

- ETA ~ 90 minutes
- https://github.com/CodelyTV/makefiles-course

## General

- The file must be called **Makefile**
- The Makefile contains _Rules_
  - Each rule contains a _Target_, maybe dependencies and shell lines.
- Indentation matters, you need tabs (not spaces).
- Targets can be defined several times.
- How to hide the command being executed:
  - We use `@echo` so that it does not show the command being executed.
  - Run make with the `-s` (silent) flag.
  - In order to silent everything, create a target `.SILENT`
  - In order to silent only some targets: `.SILENT: lint test`
- `make` executes the first target that it finds in the file.
  - you usually name `all` that default target.
  - another way to declare the default target is `.DEFAULT_GOAL := <targetName>`
- Another idea for the default target is some kind of `help`:

```
help: ## Prints this help.
    @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN ; '

start: ## start docker composer
    @docker-compose up -d
```

## Phony

- `make <name>` will try to compile anything that it finds with that name, including a folder.
- We use `.PHONY: <targetName>` To avoid collisions of target names which have the same name than a folder or another file (e.g. a `build` folder).
- Recommendation: include a `.PHONY` over each specific target, for the things you need for that target.

## Namespaces

- The convention is to include a `/` and then an alias over it. E.g.
  - `composer/xx`, with alias `deps: composer/install`
  - `npm/xx`, `sbt/xx`
  - `cypress/open`, `cypress/run`
- Usually you only have one Makefile, but you could create a folder to split multiple Makefiles (e.g. creating a `build` folder).
  - Then, from the root Makefile, you can do things like `@cd build && make`
- We could have several Makefiles at the same level, but they would need to have different names and executed like `make --directory <folderName> -f <fileName>`

## Parametrize commands

- https://github.com/CodelyTV/makefiles-course/blob/master/lessons/3.2-parametrize_commands/Makefile

```
#Makefile
deps-install: CMD=install
deps-update: CMD=update
deps-require: CMD=require $(package)

deps-install deps-update deps-require:
	@echo "deps" $(CMD)

#Terminal
make deps-require package=cypress
```

## Common tasks

- build
  - Creating a jar, a zip, an executable, etc.
  - It is quite common to use it as default target for the `make`
- install
  - E.g. to be executed in production, copying whatever it needs to the right place as well as taking anything else that would be needed to run it afterwards, etc.
  - Usually you need to have run `build` first.
- deps
  - Popular after Golang.
- start/stop
- test
- help

## Useful targets

### PHP

- https://github.com/CodelyTV/makefiles-course/blob/master/lessons/4.1-useful_in_php/Makefile
- `build: composer/install`
- `composer/install`
- `composer/update`
- `composer/require`
- `clean` in order to delete the caches, remove some directories, etc.

## Other best practices

- `current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))`, to avoid problems in Windows
- `SHELL = /bin/sh`, to make it compatible and the same for everybody (zsh, bash, fish, etc.)
- Do NOT use `if` in the Makefile.

## Famous Makefiles

- Docker:
  - https://github.com/docker/docker-ce/blob/master/Makefile
  - phony per target
  - help target
- Kubernetes
  - https://github.com/kubernetes/kubernetes/blob/master/Makefile
- Linux
  - https://github.com/torvalds/linux/blob/master/Makefile

## Interesting links

- https://github.com/skilla/makefile_for_developers

## Ideas for Hab

- `help` target (e.g. the one from Docker)
- "standardize" target names
- use namespaces, e.g. for `cypress/`
- pass country as make parameter for starting the servers

## Bookmark

https://pro.codely.tv/library/makefiles/168370/path/step/98238088/
