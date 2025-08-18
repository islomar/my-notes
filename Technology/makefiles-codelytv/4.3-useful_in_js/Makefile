current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh

.PHONY: build
build: npm/install start

npm/install: ACTION=install
npm/update: ACTION=update
npm/require: ACTION=install $(module)
npm npm/install npm/update npm/require:
	@docker run --rm $(INTERACTIVE) --volume $(current-dir):/app --user $(id -u):$(id -g) \
		node npm $(ACTION) --loglevel=warn

test:
	docker exec codelytv_ddd_skeleton-mooc_backend npm test
	docker exec codelytv_ddd_skeleton-backoffice_backend npm test

# 🐳 Docker Compose
start: CMD=up -d
stop: CMD=stop
destroy: CMD=down

doco start stop destroy:
	@docker-compose $(CMD)

clean-cache:
	@rm -rf apps/*/*/var

save-the-world:
	@rm -rf node_modules
