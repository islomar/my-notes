# Notes for CQRS course from CodelyTV
* https://pro.codely.tv/library/cqrs-command-query-responsibility-segregation-3719e4aa/about/
* https://github.com/CodelyTV/php-ddd-example

## Introduction
Patrón de alto nivel

**Ventajas**

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
    
    **QUÉ ES UN COMMAND**

- Un Command en CQRS es un DTO, no es el Command de GoG.
- Es inmutable.
- Tienen un side-effect.
- Los Commands no devuelven nada.

**QUÉ ES UNA QUERY**

- También es un DTO.
- NO tiene side-effect.
- Devuelve una respuesta.
- Ayuda a separar mejor nuestro dominio.
- Nos permite cachear muy fácilmente

**GENERANDO IDs DESDE FUERA**

Proponen que el ID lo genere siempre el cliente (que sea un UUID).

De esta manera, los Commands pueden ser realmente puros (no devolver nada) y facilita el testing (no hay que inyectar nada en ninguna parte).VO (ya lo traduce a tipos del dominio),
    - lo envía al Application Service/Use Case (Video Creator)