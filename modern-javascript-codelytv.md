# JavaScript moderno: Buenas prácticas para empezar y refactorizar aplicaciones
* https://pro.codely.tv/library/js-moderno
* https://github.com/CodelyTV/javascript-modern-course
* ETA: ~ 3hours

## XXX
### Grandes refactors de la historia
* https://github.blog/2018-09-06-removing-jquery-from-github-frontend/
* https://developer.chrome.com/blog/migrating-to-js-modules/
* Herramientas como [eslint-plugin-jquery](https://github.com/dgraham/eslint-plugin-jquery#readme) nos pueden ayudar a detectar si se añaden nuevas líneas de jQuery.


### Crear una aplicación JavaScript en 2021 y los problemas del legacy
* Repository (template) intended to serve as a starting point if you want to bootstrap a project in modern vanilla JavaScript.: https://github.com/CodelyTV/javascript-basic-skeleton
* Hemos creado un repositorio starter para aplicaciones vanilla JS con lo mínimo para tener una experiencia de desarrollo agradable:
    * Webpack (v5) para procesar nuestros archivos JavaScript y assets
    * Babel con preset-env para dar soporte a navegadores antiguos (puedes editar la lista en el package.json)
    * ESLint con Prettier
    * Jest con DOM Testing Library para tests unitarios
    * Cypress con Testing Library para tests de aceptación
    * GitHub Action workflows para ejecutar eslint y tests en cada push

## A dónde queremos llegar: buenas prácticas creando una aplicación moderna con JavaScript
### La entrada a nuestra aplicación: package.json
* node + npm
* También en el caso de una app propia, nos interesará añadir "private": true para evitar publicarla accidentalmente en el registry de npm.
* Si tenemos nuestro proyecto en GitHub podemos mantener nuestras dependencias actualizadas activando [Dependabot](https://dependabot.com/) en la configuración de nuestro repositorio.

### Asegurar compatibilidad de nuevas features con Webpack y Babel
* Pendiente: generar PDF
* Webpack es un bundler de módulos que nos permite procesar nuestros archivos.
* Babel nos permite compilar nuestro JavaScript haciéndolo compatible con navegadores antiguos, teniendo así libertad para usar las últimas features de ECMAScript.
* Usando [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) podemos conseguir que Babel transforme el JS a los navegadores que especificamos en browserslist dentro del package.json sin necesidad de configurar polyfills a mano. Si queremos dar soporte a navegadores antiguos como Internet Explorer 11, tendremos que añadir core-js y configurar nuestro babel.config.json

###  Estilo y buenas prácticas con ESLint y Prettier
* Pendiente: generar PDF
* https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/.eslintrc
* "eslint-plugin-simple-import-sort"
* https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/.github/workflows/lint.yml

### CI y suite testing!
* https://testing-library.com/docs/cypress-testing-library/intro/
* Configuramos los linters de manera específica para los tests:
  * https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/tests/.eslintrc
  * https://github.com/CodelyTV/javascript-basic-skeleton/blob/main/cypress/.eslintrc

## Modernizando nuestra app progresivamente
### ES Modules: jQuery de fichero a dependencia
* Pendiente: generar PDF
* https://github.com/CodelyTV/javascript-modern-course/tree/main/31-modules

### Cubrir de tests nuestra app
* https://github.com/CodelyTV/javascript-modern-course/blob/main/32-testing/.github/workflows/test.yml

### De jQuery a JavaScript vanilla
* Pendiente: generar PDF
* https://github.com/CodelyTV/javascript-modern-course/tree/main/33-vanilla-selectors
* Un primer paso de refactor será mejorar los selectores para hacerlos menos acoplados a la estructura HTML y, en caso de utilizar clases como selector, separarlas de las clases que usamos en CSS.
* Como segundo paso vamos a cambiar los selectores a funciones de la api del DOM como getElementById para seleccionar por ID, etc.
* Para todo esto y más nos puede ayudar el plugin de ESLint eslint-plugin-jquery, que nos mostrará error cuando usemos métodos de jQuery y nos dirá con qué métodos nativos los podemos sustituir.

## Modernizando nuestra app progresivamente
xxxx