# Asynchronous JavaScript Codely Course notes
- https://pro.codely.com/library/asincronia-en-javascript-200638/504512/about/
- ETA: 2h 30 min

## Use cases for asynchronous JavaScript
- [Code example: problems with Promises](https://github.com/CodelyTV/javascript-async-course/tree/main/01-async-types-and-utility/1-problems-with-promises)
- `async/await` dentro de un bucle, no funciona correctamente, el `forEach` no entiende de Promises, no devuelve promesas.
- `setTimeout()` es una función asíncrona.
    - A delay of 0 does not mean that it will be executed immediately: the execution depends on the number of waiting tasks in the queue. 
    - the second argument indicates a minimum time — not a guaranteed time.
- Eventos, callbacks y promesas
    - [Código de ejemplo: tipos de async](https://github.com/CodelyTV/javascript-async-course/tree/main/01-async-types-and-utility/2-async-types)
    - Los **callbacks** son funciones que pasamos como parámetro a otra función.
    - Los **eventos** nos permiten responder a un suceso de determinado tipo (con eventListeners). 
    - Las **promesas** nos permiten actuar cuando un proceso asíncrono termina, sea con éxito o no. También nos aportan más legibilidad.
        ```js
        fetch(`https://gutendex.com/books?search=${query}`).then((response) => response.json())
        ```

## Promises: from callbacks to async/await
- [Example code: callbacks problems](https://github.com/CodelyTV/javascript-async-course/tree/main/02-async-basics/1-callbacks-problems)
- Callback hell.
- Evita el callback hell gracias a las promesas
    - [Code example](https://github.com/CodelyTV/javascript-async-course/tree/main/02-async-basics/2-from-callbacks-to-promises)
    - Podemos "promisificar" cualquier cosa
- Mejora la legibilidad: de promises a async/await
    - [Code example](https://github.com/CodelyTV/javascript-async-course/tree/main/02-async-basics/3-from-promises-to-async-await)
    - **Async/await** es otra forma de trabajar con promesas. En lugar de encadenar comportamientos usando .then(), podemos marcar una función como asíncrona con async, y esperar la resolución de la promesa con await para luego seguir con nuestro código de forma habitual.
    - **await** resuelve la promesa y la devuelve.
    - **async/await** is more imperative, easier to read.


## Deep dive into Promises
- Una promesa tiene varios **estados**:
    - **pending**: estado inicial, no se ha cumplido ni se ha rechazado.
    - **fulfilled**: la operación se ha completado con éxito.
    - **rejected**: la operación ha fallado.
    - **settled**: sería el estado que engloba fulfilled y rejected, es decir, cuando la promesa ya no está pending.

- Tenemos varios métodos para **reaccionar** a los cambios de estado:
    - `then()`: se ejecuta cuando la promesa se resuelve, es decir, cuando pasa de pending a fulfilled.
    - `catch()`: se ejecuta cuando algo sale mal y la promesa se rechaza, es decir, cuando pasa de pending a rejected.
    - `finally()`: Se ejecuta cuando la promesa se resuelve o se rechaza, es decir, cuando pasa de pending a settled.

- Controla los errores en tus promesas con reject:
    - [Code example: cancellable promises](https://github.com/CodelyTV/javascript-async-course/tree/main/03-promises-in-deep/3-cancellable-promises)
    - `reject()`: se puede ejecutar dentro de la Promise y ejecutaría lo que tuviéramos fuera en el `catch()`

- ⛓️ Encadenar promises sin perder legibilidad
    - [Code example: promise chain](https://github.com/CodelyTV/javascript-async-course/tree/main/03-promises-in-deep/2-promise-chain)
    - `finally()` y `catch()` se ejecuta en el orden en que se escriba, poría estar entre varios `.then()`.


## Event loop
- JS tiene el [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop), que es como funciona la asincronía
- Las cosas se van añadiendo a una pila que se va consumiendo.
- La pila (Stack) de los callback y la pila de las promesas, son dos pilas distintas con prioridades distintas.
- Function calls form a **stack** of frames.
- Objects are allocated in a **heap** which is just a name to denote a large (mostly unstructured) region of memory.
- A JavaScript runtime uses a message **queue**, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.
- https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop


## Methods in Promise
- TBD

## Deep dive into async/await
- TBD

## Practical example of Promise
- TBD

## Testing async JS
- TBD

## Other ways of async JS
- TBD

## Resources
- TBD