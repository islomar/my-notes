# DDD en TypeScript: Modelado y arquitectura
- https://pro.codely.com/library/ddd-en-typescript-modelado-y-arquitectura-172533/375662/path/
- https://github.com/CodelyTV/typescript-ddd-example
- https://github.com/CodelyTV/typescript-ddd-skeleton
- Fer Vilas (Audiense)
- Rubén (Genially)
- Curso de 2021
- ETA: ~ 6-7h


## Creación del proyecto: Bounded Context y Submodules
- [TypeOrmCourseRepository](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/Contexts/Mooc/Courses/infrastructure/persistence/TypeOrmCourseRepository.ts)
- Bounded Contexts
    - MOOC
    - Backoffice
    - Blog
- Mecanismos de delivery, consumo de los casos de uso
    - MoocFrontend
    - MoocBackend
    - BackofficeFrontend
    - BackofficeBackend
- Separan carpetas `src` y `tests`, así sólo compila para Producción lo que haya bajo `src`
    - Bajo `src` --> 
        - Contexts 
            - Mooc
                - Courses (módulo)
                    - application
                    - domain
                    - infrastructure
                - Shared
                    - e.g. CourseId
            - Shared
                - Compartido entre Bounded Contexts
                - Conexiones a DB, event bus, elementos básicos de dominio (e.g. ValueObject, Query, UUID)
        - apps
            - Mecanismos de delivery, consumidores de los Use Cases.
    - Bajo `tests`, subcarpetas
        - `Contexts`
            - Tests unitarios y de integración. Jest.
        - `apps`
            - Tests de aceptación, e2e, etc. Desde el punto más externo. Cucumber, Cypress, supertest.


## Health check de la aplicación: Nuestro primer endpoint
- TBD

## Desarrollo Outside-in: Implementación del caso de uso para crear curso
- TBD

## Refactorizando aprovechando el potencial de TypeScript
- TBD

## Modelando el dominio: Agregado Course
- TBD

## Modelando el dominio: Value Objects e Implicaciones en tests
- TBD

## Guardar en base de datos con Mongo
- TBD

## Bases de datos: Cómo enfocar los tests y tips para producción
- TBD

## Alternativa almacenamiento con PostgreSQL y TypeORM
- TBD

## Conclusión y siguientes pasos
- TBD

## Links de interés
- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient, reliable and scalable server-side applications.

## Lecturas pendientes
- [Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)