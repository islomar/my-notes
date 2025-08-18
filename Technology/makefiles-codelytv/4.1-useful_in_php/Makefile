current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh

.PHONY: build
build: composer/install

# 🐘 Composer
create_env_file:
	@if [ ! -f .env.local ]; then cp .env .env.local; fi

composer/install: ACTION=install
composer/update: ACTION=update
composer/require: ACTION=require $(module)
composer composer/install composer/update composer/require: create_env_file
	@docker run --rm $(INTERACTIVE) --volume $(current-dir):/app --user $(id -u):$(id -g) \
		composer:2 $(ACTION) \
			--ignore-platform-reqs \
			--no-ansi

test: create_env_file
	docker exec codelytv_ddd_skeleton-mooc_backend ./vendor/bin/phpunit --testsuite mooc
	docker exec codelytv_ddd_skeleton-mooc_backend ./vendor/bin/phpunit --testsuite shared
	docker exec codelytv_ddd_skeleton-mooc_backend ./vendor/bin/behat -p mooc_backend --format=progress -v
	docker exec codelytv_ddd_skeleton-backoffice_backend ./vendor/bin/phpunit --testsuite backoffice

# 🐳 Docker Compose
start: CMD=up -d
stop: CMD=stop
destroy: CMD=down

doco start stop destroy: create_env_file
	@docker-compose $(CMD)

clean-cache:
	@rm -rf apps/*/*/var
	@docker exec codelytv_ddd_skeleton-backoffice_backend ./apps/backoffice/backend/bin/console cache:warmup
	@docker exec codelytv_ddd_skeleton-backoffice_frontend ./apps/backoffice/frontend/bin/console cache:warmup
	@docker exec codelytv_ddd_skeleton-mooc_backend ./apps/mooc/backend/bin/console cache:warmup
