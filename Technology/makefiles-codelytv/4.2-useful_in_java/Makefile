.PHONY: build
build:
	@docker exec codelytv-ddd_skeleton-java ./gradlew build --warning-mode all

test:
	@docker exec codelytv-ddd_skeleton-java ./gradlew test --warning-mode all

start: CMD=up -d
stop: CMD=stop
destroy: CMD=down

start stop destroy:
	@docker-compose $(CMD)

debug/start-mooc_backend:
	@./gradlew :run --args='mooc_backend server'

debug/start-backoffice_frontend:
	@./gradlew :run --args='backoffice_frontend server'
