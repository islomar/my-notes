# Notes for CQRS course from CodelyTV
* https://pro.codely.tv/library/cqrs-command-query-responsibility-segregation-3719e4aa/about/
* https://github.com/CodelyTV/php-ddd-example

## Introduction
* Patrón de alto nivel.
* Client --> (HTTP request) --> VideoPostController --> (CreateVideoCommand) --> CommandBus --> CreateVideoCommandHandler
* CreateVideoCommand is a TO created by the VideoPostController.
* SyncCommandBus implements CommandBus (e.g. with `dispatch()`).


### Advantages
- Rendimiento: la principal. Si no tienes problemas de rendimiento, probablemente no te compense.
- Asincronía.
- Desacoplamiento incluso entre equipos.
- Destinado a aplicaciones con gran carga de **rendimiento**.
- La petición al Controller es un POST con tipos simples.
- Que el ID llegue de fuera y NO generado por la base de datos
- El Command es un DTO.
- Solo tipos primitivos, sin objetos del dominio.
- Datos en crudo
- El CommandBus tiene mapeado 1:1 cada Command a qué Handler va.
- El Handler:
    - descompone el DTO y genera un 
    
## What is a Command?
- Un Command en CQRS es un DTO, with primitive types, no es el Command de GoG.
- Es inmutable.
- Tienen un side-effect.
- Los Commands no devuelven nada.

## What is a Query?
- También es un DTO.
* Una QueryResponse es un DTO
- NO tiene side-effect.
- Devuelve una respuesta.
- Ayuda a separar mejor nuestro dominio.
- Nos permite cachear muy fácilmente

## ID generation
* Proponen que el ID lo genere siempre el cliente (que sea un UUID).
* De esta manera, los Commands pueden ser realmente puros (no devolver nada) y facilita el testing (no hay que inyectar nada en ninguna parte).VO (ya lo traduce a tipos del dominio),
* lo envía al Application Service/Use Case (Video Creator)


## Readings
* [https://codely.tv/screencasts/constructores-semanticos/](https://codely.tv/screencasts/constructores-semanticos/)
* [https://jenssegers.com/85/goodbye-controllers-hello-request-handlers](https://jenssegers.com/85/goodbye-controllers-hello-request-handlers)
* [http://danielwhittaker.me/2015/05/25/is-a-cqrs-command-gof-command/](http://danielwhittaker.me/2015/05/25/is-a-cqrs-command-gof-command/)
* [https://codely.tv/screencasts/codigo-acoplado-framework-microservicios-ddd/](https://codely.tv/screencasts/codigo-acoplado-framework-microservicios-ddd/)
* [https://codely.tv/screencasts/ddd-cqrs-preguntas-frecuentes/](https://codely.tv/screencasts/ddd-cqrs-preguntas-frecuentes/)
* [https://www.adayinthelifeof.nl/2011/06/02/asynchronous-operations-in-rest/](https://www.adayinthelifeof.nl/2011/06/02/asynchronous-operations-in-rest/)    


* Book and talk: "Humble Inquiry: The Gentle Art of Asking Instead of Telling"
* [Romeu Moura - La théorie sociale de Bourdieu](https://www.youtube.com/watch?v=coxcEYaFvJc)
https://en.wikipedia.org/wiki/Pierre_Bourdieu
* https://www.socialcapitalresearch.com/bourdieu-on-social-capital-theory-of-capital/
* https://academievoororganisatiecultuur.nl/boeken-blogs/blog-corporate-antropologie/own-your-rank-play-your-rank-share-your-rank-een-recept-voor-gezond-succes
* Deep democracy
    * https://www.deepdemocracyinstitute.org/deep-democracy-explained.html
    * https://www.youtube.com/watch?v=jW0ds0LMu5M


* Invisible hierarchies
* Effects of hierarchies in event storming
* Effects of hierarchies in modelling in general
* Cognitive biases vs ranking
* Ranking
    * Legitimacy
* Icons of power: what is the thing that deserves power in your context?
    * Symbolic violence
    * Social/cultural axis
* You are being blind of your privilege
* Most conflicts are about rank?
* Power is given
* Humility: I can not succeed without you
* Humble enquiry
* Nothing has meaning by itself.
* Anchoring bias