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

### Cuándo realmente merece la pena hacer binding de this

- https://github.com/CodelyTV/javascript-modern-course/tree/main/71-this
- Dentro de una función, el valor de _this_ depende de como sea invocada la función (runtime binding).
- Gracias a _bind_ podemos proveer el valor de _this_ de manera que no dependerá de quien llame a la función y coincidirá con el valor que pasamos a bind.

### ¡Las Arrow functions NO son azúcar sintáctico! - Diferencias en el tratamiento de this

- https://github.com/CodelyTV/javascript-modern-course/tree/main/72-arrow
- Las arrow functions no asocian el contexto en función de quién las invoque por lo que _this_ seguirá asociado al contexto donde la función ha sido definida.
- [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [eslint prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback#:~:text=Arrow%20functions%20can%20be%20an,to%20their%20surrounding%20scope%2Fcontext.)

### Trazas de errores semánticas aún con arrow functions

- https://github.com/CodelyTV/javascript-modern-course/tree/main/73-anonymous-functions
- Cuando usamos funciones anónimas, ya sean arrow functions o funciones tradicionales, es posible que nos falte información cuando vamos a revisar el stack trace.
- Una opción para mejorar este comportamiento es extraer las funciones anónimas a variables con nombre de manera que el stack trace tendrá más información al aparecer el nombre de cada una de las funciones.

## Asincronía

### De callbacks a promises usando fetch

- https://github.com/CodelyTV/javascript-modern-course/tree/main/81-async
- **Promises** improve readability.
- [fetch MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - Fetch es una api disponible en todos los navegadores modernos y que nos permite realizar llamadas HTTP con promesas.
- [promises MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- **async/await** is syntactic sugar to simplify the Promises.

### Cuándo usar Async/await

- https://github.com/CodelyTV/javascript-modern-course/tree/main/82-async-await
- When we use _await_ we are returning a Promise.
- Cuando trabajamos con promesas es posible crear funciones asíncronas mediante el uso de la palabra reservada _async_.
- El hecho de marcar una función como asincrona nos permite trabajar con las promesas de una forma distinta y en lugar de encadenarlas usando _then_ podemos bloquear el proceso y esperar al resultado de nuestras promesas a través del uso de la palabra reservada _await_.
- Los _await_ dentro de una función _async_ bloquea pero sólo dentro de ese contexto.
- **Promise.all**
  - Promise all es una función que recibe un array de promises que ejecuta en paraleo y espera a que todas las promesas estén ejecutadas.
  - Esto nos permite ejecutar más rápido un conjunto de promesas ya que no estamos bloqueando la ejecución ni esperando a que una promesa termine para empezar la siguiente.

### Control de errores try-catch con asincronía

- https://github.com/CodelyTV/javascript-modern-course/tree/main/83-error-handling
- Dentro del prototype de Promise nos encontramos el método _catch_ mediante el cual podemos recoger los errores que se pueden producir a la hora de resolver una promesa.
- También es posible usar el bloque try/catch cuando usamos await en lugar del bloque catch.
- Capturar excepciones con el mínimo scope posible.
- Example:
  ```
    const responses = await Promise.all(requests).catch((e) => {
      console.error(e);
      return [];
    });
  ```
- [Promise.prototype.catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

## Clases

### La herencia en JavaScript es una mentira

- https://github.com/CodelyTV/javascript-modern-course/tree/main/91-prototype
- Para JavaScript las clases no son un ciudadano de primera ya que son un azucar sintáctico que es traducido internamente a prototipos, el verdadero sistema de delegación (herencia) con el que trabaja JavaScript.
- El _prototype_ es el mecanismo por el que los objetos de JavaScript pueden heradar métodos de otros objetos.
- Deberíamos hablar de _delegation_ más que de herencia.
- Las arrow functions carecen de prototype por lo que no pueden ser usadas para hacer un objeto con herencia prototípica.
- [Object prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

### Échale azúcar a tus clases: this, visibilidad y encapsulación

- https://github.com/CodelyTV/javascript-modern-course/tree/main/92-class
- Es posible declarar métodos como privados en nuestras clases, para ello debemos de marcar los métodos con un _#_ delante del nombre.
- Para añadir un método estático a una clase podemos hacerlo a través de la key _static_.
- [Babel plugin private methods](https://babeljs.io/docs/en/babel-plugin-proposal-private-methods)
- [Private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

## Conclusiones y siguientes pasos

### Alternativas a Webpack

- esbuild
- Snowpack
- Vite
- Webpack

## Qué pedir

- Curso de optimización SEO
- Haskell
