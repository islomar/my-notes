# Asynchronous JavaScript Codely Course notes
- https://pro.codely.com/library/asincronia-en-javascript-200638/504512/about/
- ETA: 3 hours

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
- 
```
function a() {
  console.log("1: soy el primer console log")

  setTimeout(function callback() {
    console.log("2: soy el console log del timeout")
  }, 0)

  console.log("3: soy el último console log")
}
```
- La función `a()` se coloca en el stack y se ejecuta.
- Primero, se ejecuta el primer console.log de forma síncrona. A continuación tenemos el setTimeout, que aunque tiene un timeout de 0 milisegundos sigue siendo una tarea asíncrona, por lo que JavaScript no ejecuta inmediatamente el código de dentro. En su lugar, lo coloca en una cola de tareas asíncrona, llamada **macrotasks**.
- A continuación se ejecuta el console.log("3: soy el último console log"). En este momento el **stack** está vacío, por lo que el event loop mira si hay tareas pendientes en la cola de **macrotasks**. En este caso, pasa la función anónima del setTimeout al **stack** y la ejecuta.
- **Tipos de colas**:
    - Cosas que estoy haciendo: **call stack**
    - Cosas pendientes de hacer: **macrotasks**
    - Cosas urgentes pendientes de hacer (e.g. promises): **microtasks**
- El event loop trata las tareas de las **promises** de forma especial, moviéndolas a otra cola, la de **microtasks**.
- Cuando el stack está vacío, el event loop primero mira si hay tareas pendientes en la cola de **microtasks**, encuentra el **callback de la promise** y lo pasa al **stack**. Cuando este vuelve a estar vacío, el event loop mira la cola de microtasks, ve que está vacía, por lo que mira la de macrotasks. Ahora sí, mueve el callback del setTimeout, lo pasa al stack y lo ejecuta.

## Methods in Promise
- `Promise.all()`
    - [Código de ejemplo: promise-all](https://github.com/CodelyTV/javascript-async-course/tree/main/05-promise-methods/1-promise-all)
    to execute promises in parallel.
    ```
    Promise.all([getUserInfo(), getUserEnrolledCourses()]).then(([userInfo, enrolledCourses]) => {
        // ...
    });
    ```
- `Promise.allSettled()`
    - [Código de ejemplo](https://github.com/CodelyTV/javascript-async-course/tree/main/05-promise-methods/2-promise-all-settled)
    - En el ejemplo anterior veíamos que en el `Promise.all` solo pasamos al then cuando todas las promesas del array se resuelven con éxito. Si no queremos que todo falle si solo falla una promesa, podemos usar `Promise.allSettled` y tratar el resultado según el `status` (fulfilled, rejected, pending, settled).
- `Promise.any()`
    - [Código de ejemplo](https://github.com/CodelyTV/javascript-async-course/tree/main/05-promise-methods/3-promise-any)
    - Si tenemos un array de promises y queremos quedarnos sólo con la primera que resuelva con éxito, podemos usar `Promise.any`
- `Promise.race()`
    - [Código de ejemplo](https://github.com/CodelyTV/javascript-async-course/tree/main/05-promise-methods/4-promise-race)
    - Similar al ejemplo anterior del Promise.any, pero en este caso se resolverá con la primera promesa que resuelva independientemente de si se resuelve con éxito o error. Por ejemplo, podemos forzar un timeout si una llamada tarda demasiado:
```
Promise.race([getUserList(), timeoutCheck(timeout)])
	.then(() => {
		console.log("🚀 Users found");
	})
	.catch(() => {
		console.log("⌛ Timeout error in getUserList");
	});
```


## Deep dive into async/await
- **Cuándo usarlo y cuándo no**
    - [Código de ejemplo](https://github.com/CodelyTV/javascript-async-course/tree/main/06-async-await/1-async-await)
    - Combinación de `.then` y `async/await`:
```
const books = await searchBookFromApi(req.query.search)

function searchBookFromApi(query) {
  return fetch(`https://gutendx.com/books?s=${query}`)
    .then((response) => response.json());
}
```
- **Unhandled promise rejection**
    - [Ejemplo de código](https://github.com/CodelyTV/javascript-async-course/tree/main/06-async-await/2-unhandled-promise-rejection)
    - En general es buena práctica tratar las promesas correctamente, pero también tenemos listeners globales que nos permiten capturar cualquier error. En Node:
```
process.on("unhandledRejection", () => {
	console.error("Unexpected error");
});
```
    - La [regla de ESLint no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises/) nos puede ayudar a detectar casos en los que no estemos tratando las promesas con catch ni devolviéndolas.
- **¿Qué pasa si no quieres encadenar promesas?**
    - [Código de ejemplo](https://github.com/CodelyTV/javascript-async-course/tree/main/06-async-await/3-async-await-chain)


## Practical example of Promise
- **Evita peticiones innecesarias: cómo cancelar un fetch**
    - TBD
- TBD

## Testing async JS
- TBD


## Other ways of async JS
- TBD


## Resources
- TBD