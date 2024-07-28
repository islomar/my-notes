# TypeScript Avanzado: Más allá de any
- https://github.com/CodelyTV/awesome-typescript-examples
- ETA: ~ 4 horas


## [GRATIS] 🚀 TypeScript es mucho más que JavaScript con tipos: Tu nuevo ayudante para desarrollar

### 5 cosas que no sabías de TypeScript
- [Código de ejemplo](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/features-you-do-not-know)
1. Si defines `const enums`, se genera un código traspilado muy diferente (mucho más breve). En realidad no es una gran diferencia...
2. Exhaustividad con switch cases: uso de `never` en un `default: assertNever(xx)`
    - Otra posibilidad para Enums
```
export const enum CourseCategory {
  FRONTEND,
  BACKEND,
  BEST_PRACTICES,
}


const frontedCourseCategory = CourseCategory.FRONTEND;


const print = (courseCategory: CourseCategory) => {
  const OPTIONS: { [key in CourseCategory]: string } = {
    [CourseCategory.FRONTEND]: 'This is the frontend course category',
    [CourseCategory.BACKEND]: 'This is the backend course category',
    [CourseCategory.BEST_PRACTICES]:
      'This is the best practices course category',
  };


  return OPTIONS[courseCategory];
};
```    
3. Utility types, e.g. `Primitives<Course>`
4. TypeScript es mentira pero en más cosas de las que crees
    - E.g. `private`, `readonly`
5. Estudia las propiedades del tsconfig
    - E.g. para borrar los comentarios del código


### Repaso rápido de ejemplos del día a día
- https://pro.codely.tv/library/de-javascript-a-typescript-128106/
- Structural typing (parece similar a "duck typing")
- tsconfig.json
    - `strictNullChecks`
- Type assertions: e.g. `document.getElementById("getOneByName") as HTMLInputElement`
- Defined types: cuando la librería no te da los tipo `@types/lodash`
    - También podrías añadirlo en tu propio proyecto
    - Se pueden mergear los tipos "oficiales" y algo tuyo propio

### Interfaces vs type alias
- [Código de ejemplo](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/interface-vs-type)
- Recomendación oficial: usa `interface` hasta que necesites alguna característica de los `type`.
- https://www.typescriptlang.org/play/?#example/types-vs-interfaces
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
- [Personal notes about interfaces vs types](https://github.com/islomar/poc-typescript)
- Things that can only be done with `types`, not with `interfaces`:
    - Unions
    - Typing a Tuple
    - Typing a primitive
- Things that can only be done with `interfaces`, not with `types`:
    - Declaration merging


## Reaprovecha tu código y entiende firmas complejas gracias a los Genéricos
- [Código de ejemplo con genéricos](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/generics/generics-domain-restrictions-semantics)
- Los genéricos nos permiten usar un tipo como valor en nuestras funciones y métodos para hacer código más reutilizable.
- **Analizamos cómo Zustand hace uso de los genéricos**
    - [Ejemplo de genéricos en Zustand](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/generics/zustand)
    - Analizamos cómo Zustand, la librería de gestión de estado, hace uso de los genéricos entrando directamente a los ficheros de definición.
- **Cuándo nos estamos flipando y NO deberíamos usar genéricos**
    - [Ejemplo de código](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/generics/premature-abstraction)


## Aprovecha el potencial de tipos no tan conocidos: unknown y never
- [Código de ejemplo](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/unknown/ensure-return-type)
- El tipo `unknown` es uno de los tipos especiales de TypeScript. Podemos definirlo como la alternativa segura de `any` ya que también nos permite almacenar cualquier valor sin embargo el transpilador nos obligará a castearlo a un tipo más específico si queremos hacer uso de él.
- Resumido: mejor usar `unknown`, así obliga a castear antes de usarlo.
- "compilerOptions" con "noImplicitAny: true"
    - Para evitar los any explícitos: rule en eslintrc., "typescript/no-explicity-any": "warn"

### El potencial oculto de unknown: Obliga a tipar argumentos de entrada opcionales
- [Código de ejemplo](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/unknown/default-generic-value)

### En qué consiste el tipo never y diferencias con void
- [Ejemplo de código](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/useful-never)
- `never` hace referencia a situaciones de código que no pueden ocurrir.  
- Puede usarse como tipo para parámetro de salida o de entrada


## Usos básicos de enums: Numéricos vs String vs Const vs Object as const
- In TS, we can not add behaviour/functions to the Enums
- [Ejemplo de código con enum numérico](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/enums/enum-types/numeric)
- [Ejemplo de código con enum de tipo string](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/enums/enum-types/string)
    - `export const enum LogLevel`
        - Con "const" nos impide declarar de nuevo el enum (e.g. hacer declaration merging)
- A way to use enums in a switch-case that would detect new enum values not handled in the switch (exhaustividad del enum):
```
export function printLogMessage(log: Log): void {
  const OPTIONS: { [key in LogLevel]: () => void } = {
    [LogLevel.ERROR]: () => {
      console.error(log.message);
    },
    [LogLevel.WARN]: () => {
      console.warn(log.message);
    },
    [LogLevel.DEBUG]: () => {
      console.log(log.message);
    },
    [LogLevel.INFO]: () => {
      console.info(log.message);
    },
  };
  OPTIONS[log.level];
}
```
- [Difference between enum and simple const values](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/enums/enum-types/const-object)


## Enums avanzados: Gana semántica, robustez, y haz que tu código cumpla con SOLID
- [Ejemplo con Factory](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/enums/factory)
- Uno de los usos interesantes que podemos dar a un enumerado es el de simplificar una factoría.
    - Usar `keyof valueof` como tipo de string válidos de un enum en el constructor estático `fromValue()`.
- `EnumValueOBject`: vitaminamos un Enum para que sólo admita valores de ese Enum
- [External video: Enums considered harmful](https://www.youtube.com/watch?v=jjMbPt_H3RQ)
    - TBD

### Deja atrás los booleanos y modela el estado de tu aplicación con Enums
- [Código de ejemplo: gestión de estado (e.g. en React) usando Enums](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/enums/status-management)
- Otro uso que nos gusta mucho de los enums es usarlos para modelar los distintos estados por los que puede transicionar nuestra aplicación.

### Usos de enums en código del mundo real (Next.js y Prisma)
- [Ejemplo de Next.js](https://github.com/vercel/next.js/blob/ff573632afce6f34bd3a74a020e1db31dff4680d/examples/auth-with-stytch/pages/index.tsx#L83-L95)
- [Ejemplo de Prisma](https://github.com/prisma/prisma/blob/main/packages/sdk/src/client/getClientEngineType.ts#L3-L7)


## Extiende el comportamiento de tus métodos y clases con los decoradores.
- [Ejemplo de código de decorador para medición de rendimiento](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/decorators/performance-measurement)
- Los decoradores nos permiten extender el comportamiento de las clases de nuestro proyecto. Aunque no son una funcionalidad específica de TypeScript (en JavaScript están en stage 3 de desarrollo) podemos empezar a usarlos a día de hoy ya en nuestros proyectos.
- Para hacer uso de ellos debemos de modificar el fichero tsconfig.json para añadir la clave experimentalDecorators.
- Existen decoradores de métodos y de clases.
- Un gran poder conlleva una gran responsabilidad. Código acoplado por culpa de decoradores
    - [TypeORM](https://typeorm.io/)
- Inyección de dependencias con decoradores y DIOD
    - [Ejemplo de código con DIOD](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/decorators/diod-dependency-injection)
    - Este es la inyección de dependencias con la librería Diod. Vemos por que nos gusta usar esta librería y analizamos el planteamiento que hace con el uso de decoradores y la librería `reflect-metadata`.


## Narrowing: Casting de tipos de forma implícita
- [Ejemplo de código de narrowing](https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/narrowing)
- Type predicate
```
function isNoEditorError(error: unknown): error is NoEditorUserError {
  return error instanceof NoEditorUserError;
}
```
- Exhaustividad con narrowing y never
    [Ejemplo de código con exhaustividad del Enum](https://github.com/CodelyTV/awesome-typescript-examples/blob/main/src/narrowing/exhaustive-switch.ts)


## Conclusión y siguientes pasos
- https://github.com/CodelyTV/awesome-typescript-examples/tree/main/src/utility-types/dispatch-actions


## Recomendaciones prácticas
- Mejor usar `unknown` que `any`, así obliga a castear antes de usarlo.
    - "compilerOptions" con "noImplicitAny: true"
    - Para evitar los any explícitos: rule en eslintrc., "typescript/no-explicity-any": "warn"
- Meter `const` a todos los enum para evitar "declaration merging"