# DDD en TypeScript: Modelado y arquitectura
- https://pro.codely.com/library/ddd-en-typescript-modelado-y-arquitectura-172533/375662/path/
- https://github.com/CodelyTV/typescript-ddd-example
- https://github.com/CodelyTV/typescript-ddd-skeleton
- Fer Vilas (Audiense)
- Rubén (Genially, @rsaladocid)
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
- [StatusGetController](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/apps/mooc/backend/controllers/StatusGetController.ts)
- `supertest` for testing the endpoint.
- `export` WITHOUT `default`
    - "Nuestra experiencia con bases de código grandes en typescript nos ha mostrado que las herramientas de refactoring, e importación automática de clases, de los editores funcionan peor con los default que con los named exports."
- **Contenedor de inyección de dependencias para evitar repetir lógica de instanciación**
    - Package ["Node Dependency Injection"](https://github.com/zazoomauro/node-dependency-injection)
        - Sin necesidad de anotaciones
    - https://github.com/CodelyTV/typescript-ddd-example/tree/master/src/apps/mooc/backend/dependency-injection
    - https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/apps/mooc/backend/routes/status.route.ts#L6


## Desarrollo Outside-in: Implementación del caso de uso para crear curso
- **Tests de aceptación**
    - https://github.com/CodelyTV/typescript-ddd-example/blob/master/tests/apps/backoffice/backend/features/status.feature
    - https://github.com/CodelyTV/typescript-ddd-example/blob/master/.github/workflows/nodejs.yml#L54
    - En Audiense: para testear un PUT, no miran si después en DB se ha creado, sólo la devolución al usuario.
- **Implementación del caso de uso y test unitario**
    - Jest, @types/jest, ts-jest, 
    - [jest.config.js](https://github.com/CodelyTV/typescript-ddd-example/blob/master/jest.config.js)
        - **IMPORTANTE**: preset de `ts-jest`
    - [CourseCreator](https://github.com/CodelyTV/typescript-ddd-example/blob/master/tests/Contexts/Mooc/Courses/application/CreateCourseCommandHandler.test.ts#L18)
    - Para ayudar al manejo de errores en node es una buena practica poner `await` cuando ponemos returns:
        - ```
                {

        ...

        return await repository.save(course);

        }
        ```
        - https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/returningpromises.md
- **Implementación del repositorio en fichero y test de integración**
    - FileCourseRepository
        - Creamos un fichero por curso
```typescript
export class FileCourseRepository implements CourseRepository {
    private FILE_PATH = `${__dirname}/courses`

    async save(course: Course): Promise<void> {
        fs.promise.writeFile(this.filePath(course.id), serialize(course));
    }

    async search(courseId: string): Promise<Course> {
        const courseData = await fs.promises.readFile(this.filePath(courseId));
        const { id, name, duration } = deserialize(courseData);
        return new Course(id, name, duration);
    }

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`
    }
}
```


## Refactorizando aprovechando el potencial de TypeScript
- **Mocks más semánticos y mantenibles**
    - Inicialmente:
    ```typescript
    const repository: CourseRepository = {
        save: jest.fn()
    };
    ```
    - Mejor: [CourseRepositoryMock](https://github.com/CodelyTV/typescript-ddd-example/blob/master/tests/Contexts/Mooc/Courses/__mocks__/CourseRepositoryMock.ts) >> En realidad es un Fake
    - Otras alternativas
        - https://github.com/johanblumenberg/ts-mockito
        - https://github.com/NagRock/ts-mockito
- **Validación de requests: Los tipos son tus amigos**
    - [express-validator](https://express-validator.github.io/docs/)
        - Se incluye en un Middleware [validateReqSchema](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/apps/mooc/backend/routes/index.ts#L16)
        - [Uso del Middleware, definiendo un Schema](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/apps/mooc/backend/routes/courses.route.ts#L14)
    - [CoursePutRequest](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/apps/mooc/backend/controllers/CoursePutController.ts)   
    - HTTP Status Code 422: Unprocesable Entity (e.g. si el cliente envía tipos incorrectos) 
    - [Acceptance test para la validación](https://github.com/CodelyTV/typescript-ddd-example/blob/master/tests/apps/mooc/backend/features/courses/create-course.feature#L18)


## Modelando el dominio: Agregado Course
- **Utilizando objetos Request y Response para comunicarnos con el Application Service**
    - DTOs
    - interface [CourseCreatorRequest](https://github.com/RonroazX/cleck/blob/main/src/Contexts/Mooc/Courses/application/CourseCreatorRequest.ts)
        - We can pass an object with the primitives from the [CoursePutController](https://github.com/RonroazX/cleck/blob/main/src/apps/mooc/backend/controllers/CoursePutController.ts#L25), we don't need to leak the explicit `CourseCreatorRequest` type.
    - interface [CourseResponse](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/Contexts/Mooc/Courses/application/SearchAll/CoursesResponse.ts)
- **Refactoring a UUIDs como identificadores**    
    - Validación del "id" en el Controller y en el VO
    - Ventajas de que ID se pase desde el cliente: e.g. no necesidad de parámetro Nullable del ID. En realidad también se podría conseguir desacoplando los modelos de escritura y lectura.
    - Uso de librería [uuid-validate](https://www.npmjs.com/package/uuid-validate)
    - [UUID](https://github.com/CodelyTV/typescript-ddd-example/blob/master/src/Contexts/Shared/domain/value-object/Uuid.ts)
- **Constructor de agregados con Parameter Object+Destructuring**
    - Inline type: el IDE detectaría los cambios de orden. Tipo "named arguments".
        - https://cichocinski.dev/blog/5-reasons-why-destructuring-hurt-your-typescript-codebase
        - https://mariusschulz.com/blog/typing-destructured-object-parameters-in-typescript
    - ```
    export class Course {
        ...
        constructor({ id, name, duration}: { id: Uuid; name: string; duration: string }) {
        ...
    ```
    - Típica característica "idiomática"... que no parece lo más obvio y legible del mundo. Probablemente mejor crear un tipo (interface)


## Modelando el dominio: Value Objects e Implicaciones en tests
- **Value Objects: Inmutabilidad y tips para agilizar desarrollo**
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