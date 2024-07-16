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
- TBD

## Reaprovecha tu código y entiende firmas complejas gracias a los Genéricos
- TBD

## Aprovecha el potencial de tipos no tan conocidos: unknown y never
- TBD

## Usos básicos de enums: Numéricos vs String vs Const vs Object as const
- TBD

## Enums avanzados: Gana semántica, robustez, y haz que tu código cumpla con SOLID
- TBD

## Extiende el comportamiento de tus métodos y clases con los decoradores.
- TBD

## Narrowing: Casting de tipos de forma implícita
- TBD