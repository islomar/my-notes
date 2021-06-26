# JavaScript moderno: Buenas prácticas para empezar y refactorizar aplicaciones

- https://pro.codely.tv/library/js-moderno
- https://github.com/CodelyTV/javascript-modern-course
- ETA: ~ 3hours

## Refactorizando JavaScript: de legacy a ES2020 y más allá

### Grandes refactors de la historia

- https://github.blog/2018-09-06-removing-jquery-from-github-frontend/
- https://developer.chrome.com/blog/migrating-to-js-modules/
- Herramientas como [eslint-plugin-jquery](https://github.com/dgraham/eslint-plugin-jquery#readme) nos pueden ayudar a detectar si se añaden nuevas líneas de jQuery.

### Crear una aplicación JavaScript en 2021 y los problemas del legacy

- Repository (template) intended to serve as a starting point if you want to bootstrap a project in modern vanilla JavaScript.: https://github.com/CodelyTV/javascript-basic-skeleton
- Hemos creado un repositorio starter para aplicaciones vanilla JS con lo mínimo para tener una experiencia de desarrollo agradable:
  - Webpack (v5) para procesar nuestros archivos JavaScript y assets
  - Babel con preset-env para dar soporte a navegadores antiguos (puedes editar la lista en el package.json)
  - ESLint con Prettier
  - Jest con DOM Testing Library para tests unitarios
  - Cypress con Testing Library para tests de aceptación
  - GitHub Action workflows para ejecutar eslint y tests en cada push

## A dónde queremos llegar: buenas prácticas creando una aplicación moderna con JavaScript

### La entrada a nuestra aplicación: package.json

- node + npm
- También en el caso de una app propia, nos interesará añadir "private": true para evitar publicarla accidentalmente en el registry de npm.
- Si tenemos nuestro proyecto en GitHub podemos mantener nuestras dependencias actualizadas activando [Dependabot](https://dependabot.com/) en la configuración de nuestro repositorio.

### Asegurar compatibilidad de nuevas features con Webpack y Babel

- Pendiente: generar PDF
- Webpack es un bundler de módulos que nos permite procesar nuestros archivos.
- Babel nos permite compilar nuestro JavaScript haciéndolo compatible con navegadores antiguos, teniendo así libertad para usar las últimas features de ECMAScript.
- Usando [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) podemos conseguir que Babel transforme el JS a los navegadores que especificamos en browserslist dentro del package.json sin necesidad de configurar polyfills a mano. Si queremos dar soporte a navegadores antiguos como Internet Explorer 11, tendremos que añadir core-js y configurar nuestro babel.config.json

### Estilo y buenas prácticas con ESLint y Prettier

- Pendiente: generar PDF
- https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/.eslintrc
- "eslint-plugin-simple-import-sort"
- https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/.github/workflows/lint.yml

### CI y suite testing!

- https://testing-library.com/docs/cypress-testing-library/intro/
- Configuramos los linters de manera específica para los tests:
  - https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/tests/.eslintrc
  - https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/cypress/.eslintrc

## Modernizando nuestra app progresivamente

### ES Modules: jQuery de fichero a dependencia

- Pendiente: generar PDF
- https://github.com/CodelyTV/javascript-modern-course/tree/main/31-modules

### Cubrir de tests nuestra app

- https://github.com/CodelyTV/javascript-modern-course/blob/main/32-testing/.github/workflows/test.yml

### De jQuery a JavaScript vanilla

- Pendiente: generar PDF
- https://github.com/CodelyTV/javascript-modern-course/tree/main/33-vanilla-selectors
- Un primer paso de refactor será mejorar los selectores para hacerlos menos acoplados a la estructura HTML y, en caso de utilizar clases como selector, separarlas de las clases que usamos en CSS.
- Como segundo paso vamos a cambiar los selectores a funciones de la api del DOM como getElementById para seleccionar por ID, etc.
- Para todo esto y más nos puede ayudar el plugin de ESLint eslint-plugin-jquery, que nos mostrará error cuando usemos métodos de jQuery y nos dirá con qué métodos nativos los podemos sustituir.

## Cambios de sintaxis para Productivity Raptors

### Código menos verboso con rest, spread y destructuring

- https://github.com/CodelyTV/javascript-modern-course/tree/main/41-rest-spread-destructuring
- You can configure an eslint rule in order to propose the use of these elements.
- [MDN: Spread & Rest syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN: Import statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

### Strings más legibles con template literals

- https://github.com/CodelyTV/javascript-modern-course/tree/main/42-template-strings
- String interpolation
- Tagged templates: https://www.sitepoint.com/understanding-ecmascript-6-template-strings/

### Simplificar condicionales con nullish coalescing y optional chaining

- [Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## Variables

### Control de la reasignación y mutabilidad con let y const

- [A fucking rant about fucking const vs fucking let](https://jamie.build/const)

### A refactorizar: solucionamos un bug gracias a let!

- https://github.com/CodelyTV/javascript-modern-course/tree/main/52-let-const
- _var_ is function scoped
- _let_ is block scoped

### Internals: Hoisting y Temporal Dead Zone

- "No existe" el hoisting.
- A pesar de que JavaScript sea un lenguaje interpretado, tiene un paso de **compilación**, aunque pasa en el mismo navegador unas milésimas de segundo antes de su ejecución. Durante ese paso, el compilador guarda las variables en el scope, pero sin su valor. En el paso de **ejecución**, cuando el engine encuentra una variable, es capaz de encontrarla en el scope pese a que esta sea declarada después en nuestro código, porque ha habido el paso previo de compilación.
- Compilación + Ejecución
- La definición de la variable se separa de su inicialización.
- _Temporal Dead Zone_: uso de un let antes de ser inicializado.
- _var_ asigna a _undefined_ en tiempo de compilación: por eso una variable usada antes de su inicialización es mostrada como undefined.
- _let_ asigna a _undefined_ en tiempo de ejecución: por eso un let usado antes de su inicialización es mostrado como error.
- [MDN: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Hoisting in Modern JavaScript — let, const, and var](https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda)
- [MDN: Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)

## Arrays & Objetos

### Aplicando novedades de la API de Array: desde ES2015 hasta ES2020

- https://github.com/CodelyTV/javascript-modern-course/tree/main/61-arrays
- includes()
- forEach()
- for ... of ...
- flat()

### Iterando: NodeList... ¡no es un array!

- https://github.com/CodelyTV/javascript-modern-course/tree/main/62-node-list
- `Array.from(checkboxes).map(function (checkbox) ...)`

### Aplicando novedades de la API de Object: desde ES2015 hasta ES2020

- https://github.com/CodelyTV/javascript-modern-course/tree/main/63-objects
- `Object.keys()`
- `Object.values()`
- `Object.entries()`
- getOwnPropertyDescriptor() nos permite ver información sobre las propiedades de un objeto

### ¿Vale la pena seguir usando lodash? Analizando performance

- https://github.com/CodelyTV/javascript-modern-course/tree/main/64-measuring-performance
- [MeasureThat](https://www.measurethat.net/)
- [Native find vs lodash find](https://measurethat.net/Benchmarks/Show/4831/0/native-find-vs-lodash-find)
- [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

## Funciones

TBD

## Asincronía

TBD

## Clases

TBD

## Qué pedir

- Curso de optimización SEO
