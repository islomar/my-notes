# Testing en frontend (CodelyTV)

- https://pro.codely.tv/library/testing-frontend/196940/path/
- Núria Soriano
- https://twitter.com/nuria_codes
- https://github.com/CodelyTV/javascript-testing-frontend-course
- ETA ~ 3 hours

## ¿Por qué el testing en FE está roto?

- `expect(screen.getByText("toggled message")).toBeInTheDocument();`
- `const wrapper = mount(MessageToggle);`

## Las bases de Testing Library: testeando un componente simple

- https://github.com/CodelyTV/javascript-testing-frontend-course/blob/main/12-first-test/src/tests/01-Form.test.js
- `fireEvent.chabge()`
- Mejor cuando sea posible `userEvent.type()` o `userEvent.click()`
- `screen.getByLabelText()`

## Definición de nuestra estrategia de testing

### Agnóstica del framework: ejemplo con React vs Vue vs Angular

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/21-frameworks
- Mejor `screen.getByRole()` que `screen.getByText()` o que `screen.getByTextId()`

### Redefiniendo el testing en frontend

https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/22-unit-test

## Buenas prácticas del testing en frontend

### Testeando lo que de verdad importa

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/31-testing-important-stuff
- Uso del Page Object.
- Muestran ejemplo con test regulero para ver su evolución.

### Ejemplo con Testing Library: testing centrado en el usuario

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/32-testing-as-a-user

### fireEvent vs userEvent

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/32-testing-as-a-user
- Problema **sólo en Vue**: Vue Testing Library exporta una versión de fireEvent asíncrona. En cambio, userEvent es una librería independiente y exporta una función síncrona. Eso hace que el cambio no va a ser un reemplazo simple, ya que en ocasiones tendremos que esperar a que el DOM reaccione al evento que hemos ejecutado. Si te encuentras con este problema, lo que puedes hacer es usar waitFor justo después del evento, o usar la query findByX, que es asíncrona.
- https://github.com/testing-library/vue-testing-library/pull/182/files#diff-c7a45ea411c9f388c189672e754a9255e1a7aba60a356ba219abf552bfea2496R46

### Tests semánticos y más legibles

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/34-semantic-tests
- add `import "@testing-library/jest-dom";`
- `expect(message).toBeTruthy()` >> `expect(message).toBeInTheDocument();`
- `expect(message.innerHTML).toMatch(/contact us/i);` >> `expect(message).toHaveTextContent(/contact us/i);`

## Testeando accesibilidad

### Automatizar tests de accesibilidad con Jest Axe

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/41-a11y-axe
- https://github.com/pa11y/pa11y-ci

### Selectores accesibles

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/42-a11y-selectors
- [Prioridad de queries en Testing Library](https://testing-library.com/docs/queries/about/#priority)
- [Roles de accesibilidad](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)
- Si es interactivo (e.g. un botón, link, etc.), usar `screen.getByRole()`
- Para un texto, `screen.getByText()`
- Para inputs, `screen.getByLabelText()`. Si no, también se podría usar `screen.getByPlaceholderText()` o `getByDisplayValue()`

## Cómo escribir nuestros tests

### La estructura de nuestro test: Arrange, Act, Assert

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/51-test-structure
- Tests con errores de valicación.

### Los tests que emocionaron a Cervantes

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/52-test-description
- Posible estructuración para `describe` y `it`

## Testeando componentes complejos

### Entendiendo cuándo es necesario mockear

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/61-mocking

* `coursesRepo.searchAll.mockResolvedValue()`
* `coursesRepo.searchAll.mockResolvedValueOnce()`
* Al final, se debe "limpiar" el doble. Hay varias maneras:
  - `coursesRepo.searchAll.clear()`: sólo borra el número de veces que ha sido llamado
  - `coursesRepo.searchAll.mockReset()`
  - `coursesRepo.searchAll.mockRestore()`
* Mejor ponerlo en el `jest.config.js`: `retoreMocks: true`
* [Testing library guiding principles](https://testing-library.com/docs/guiding-principles/)
* [Jest Mock functions](https://jestjs.io/docs/en/mock-function-api)
* [Jest manual mocks guide](https://jestjs.io/docs/en/manual-mocks)

### Peligros de doblar el fetch

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/62-mocking-fetch
- Alternativa: usar el MSW (Mock Service Worker)
  - https://mswjs.io/
  - Se intercepta la llamada de red del fetch, no se dobla el fetch.
  - en el `setupTests.js` configuramos que se levante, resetee y pare el servidor de MSW.
  - Útil para fácilmente testear código legacy antes de empezar el refactor y crear Repositories. Es una primera capa de seguridad.

### Testeando animaciones

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/63-animations
- `await waitForElementToBeRemoved()`
- Cambiar cuando sea posible la duración de la transición a 0 ms

## Agilizando el proceso de testing

### Mejorar la mantenibilidad de nuestros tests con custom renderers

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/71-custom-renderers
- Cómo testear "mockeando" lo mínimo. Cómo pasar el store (e.g. vuex, redux), el router, etc.
- Nos crearemos una función render propia en un archivo, que reciba los parámetros necesarios para configurar el componente (por ejemplo, el estado inicial) que también reexportará toda testing library.
- `export * from "@testing-library/vue";` // re-exportamos Testing Library
- Ejemplo en React: https://github.com/kentcdodds/react-testing-library-course/blob/main/src/__tests__/redux-02.js
  - Necesitas encapsular el component con un `<Provider>`

### Agilizar la creación de datos fake con Test Object Factories

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/72-test-object-factory
- Test Object Factories.
  - https://github.com/thoughtbot/fishery
    - Builder pattern
    - Fishery is built with TypeScript in mind. Factories accept typed parameters and return typed objects, so you can be confident that the data used in your tests is valid.
  - https://github.com/rosiejs/rosie
- Librería de datos fake: https://github.com/marak/Faker.js/
  - Ventaja: genera dinámicamente diferentes datos. Si alguno falla, se puede crear un test específico.
- Naming: "object mother" vs "test object factory"
  - https://twitter.com/mikesherov/status/1156200073535119361

### Snapshot testing, ¿sí o no?

- https://github.com/CodelyTV/javascript-testing-frontend-course/tree/main/73-snapshots
- https://jestjs.io/docs/en/snapshot-testing
- Funciona bien para componentes representacionales... pero no son lo que más valor aporta testear de forma "aislada".

## TDD con Testing Library

### Implementando una nueva feature con TDD

- [Punto de partida](https://github.com/CodelyTV/javascript-testing-frontend-course/commit/23e5d2341d89b430ab8ad9220007abb288fd4c24)
- [Añadimos el test para validar que hay comentarios](https://github.com/CodelyTV/javascript-testing-frontend-course/commit/97dfb747b174a0f78b1e7dab619fa676adcef685)
- [Añadimos el código](https://github.com/CodelyTV/javascript-testing-frontend-course/commit/744f5808a451b8cea5279614a9e54028d83f81cf)
- [Arreglamos el test](https://github.com/CodelyTV/javascript-testing-frontend-course/commit/395048b26f6f03a47383c20fce448e3095db3e41)
- [Hacemos refactoring](https://github.com/CodelyTV/javascript-testing-frontend-course/commit/f70c0210fe0ee713285b90d838ac1d4aef2841a1)

### TDD hard mode con fake timers

- [Fake timers de Jest](https://jestjs.io/docs/en/jest-object#mock-timers)
  - Falsea las llamadas de `setInterval()` o `setTimeout()`
- Los timers de Jest nos dan además una forma de forzar que los timers se ejecuten, como `runAllTimers` y `runOnlyPendingTimers`.

## CI/CD: Integramos el testing en nuestra pipeline

- https://github.com/CodelyTV/javascript-testing-frontend-course/blob/main/.github/workflows/test.yml
- `.github/workflows`

## Errores frecuentes con Testing Library

- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
- No usar el `container` en general.
- No usar las queries adecuadas
- Esperar tiempo aleatorio (e.g. `sleep(1000)`)
- Side effects en [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor)
- Abusar de beforeEach

## Interesting stuff

- `screen.debug()`: it shows the HTML rendered at that point.
- https://github.com/kentcdodds/react-testing-library-course
- Free fake API: https://jsonplaceholder.typicode.com/
- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
- https://testing-library.com/docs/queries/about/#types-of-queries
