# TypeScript Avanzado: Mejora tu Developer eXperience
- https://pro.codely.com/library/typescript-avanzado-mejora-tu-developer-experience-204725/524595/path/?path_id=8145829
- https://github.com/CodelyTV/awesome-typescript-examples
- ETA ~ 90 min

## [GRATIS] ¿Qué aprenderás en este curso?
- Buenos ejemplos de documentación:
    - Buena documentación de las herramientas: https://docs.stripe.com/
    - Changelogs bien documentados: https://docs.n8n.io/release-notes/


## Transformaciones de tipos gracias a los Utility Types
- **¿Cómo usar utility types en TypeScript?**
    - [Ejemplos de código de los utility types: Maybe](https://github.com/CodelyTV/awesome-typescript-examples/blob/main/src/utility-types/maybe/maybe.ts)
    - Los [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) son una serie de utilidades preconstruidas dentro del lenguaje con el objetivo de ayudarnos a hacer transformaciones de tipos comunes. 
        - Permiten conseguir un tipo intermedio a partir de otro
    - Existen muchos disponibles como podría ser el caso del tipo `Readonly` que transforma todas las propiedades de un objeto a inmutables.
    - También podemo hacer nuestro propio "utility type": e.g. hacer un tipo `Maybe` que nos permite marcar una variable como posiblemente undefined.
    - [Ejemplos de código de los utility types: Maybe](https://github.com/CodelyTV/awesome-typescript-examples/blob/main/src/utility-types/maybe/maybe.ts)
    - `type Maybe<T> = T | undefined;`
- **Mejora tus object mothers gracias a Partial<T>**
    - [Object mothers example with Partial](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/utility-types/object-mothers)
    - [Utility type Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)
- **Simplifica el tipo de retorno de tus funciones: Record<Keys, Type>**
    - [Code example for groupByStatus](https://github.com/CodelyTV/awesome-typescript-examples/blob/main/src/utility-types/derivated-types/groupByStatus.ts)
    - [Utility type Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)

## Conserva tus literal types gracias a los nuevos const type parameters
- **Para qué sirven los const type parameters**
    - [Basic code example with `const`](https://github.com/CodelyTV/awesome-typescript-examples/blob/main/src/const-type-parameter/basic-example.ts)
    - ```
    function getUserAge<const T extends User>(user: T): T["age"] {
        return user.age;
    }
    ```
    - Casos de uso prácticos para esta nueva feature: relaciones con objetos de configuración.
- **Router con autocompletado dinámico**
    - [Code example with router using the const type](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/const-type-parameter/router)
- **Facilita el uso de tu API creando un fetcher**
    - [Ejemplo de código: fetcher](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/const-type-parameter/fetcher)


## Mejora el tipado de tus variables con el operador satisfies
- **Maneras de tipar tus variables en TypeScript (as, satisfies, :)**
    - [Basic example of 'satisfies'](https://github.com/CodelyTV/awesome-typescript-examples/blob/main/src/satisfies/basicExample.ts)
    - TypeScript 4.9 introduce un nuevo operador para validar el tipo de una expresión determinada.
    - Semicolon assignment: `const routes: Routers { ... }`
        - El "tipo" se como al valor: te permite hacer `routes.NON_EXISTANT.path`
    - `as`: recomienda no usarlo, se fuerza el casting al valor. `const routes = {...} as Routes`
        - El "tipo" se como al valor: te permite hacer `routes.NON_EXISTANT.path`
        - Excepción de caso de uso: `document.getElementById(anyId) as HTMLXxxx` (estamos MUY seguros)
    - `satisfies`:        
        -  `const routes = {...} satisfies Routes` 
        - No se sobrescribe el tipo.
        - Intenta siempre asignar el tipo más específico posible a partir del valor que se está validando.
        - No permite hacer `routes.NON_EXISTANT.path` (yujuuu)
        - Aún mejor: `const routes = {...} const satisfies Routes` 
            - Lo más "narrow" posible
- **Mejorando el narrowing de los objetos de configuración con satisfies**
    - [Ejemplo de código: Settings](https://github.com/CodelyTV/awesome-typescript-examples/blob/main/src/satisfies/configObjects.ts)
    - Cuando tenemos un [union type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) satisfies hará el narrowing directamente obteniendo el tipo más específicos de los posibles valores suministrados.


## Interesting links
- [VSCode extension //](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash-queries)