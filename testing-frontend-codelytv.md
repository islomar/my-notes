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
* Al fina, se debe "limpiar" el doble. Hay varias maneras:
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

## Interesting stuff

- `screen.debug()`: it shows the HTML rendered at that point.
