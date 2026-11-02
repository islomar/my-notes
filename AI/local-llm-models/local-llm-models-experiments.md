<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Local LLM models experiments](#local-llm-models-experiments)
  - [Combinations to try](#combinations-to-try)
  - [Candidate ideas for comparing behaviours](#candidate-ideas-for-comparing-behaviours)
  - [Experiments from other people](#experiments-from-other-people)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Local LLM models experiments

## Combinations to try

- TBD

## Candidate ideas for comparing behaviours

- <https://www.codurance.com/publications/advanced-katas>
  - [Corporate Hotel Booking](https://www.codurance.com/katas/corporate-hotel-booking)
  - Game of Life
- <https://sammancoaching.org/kata_descriptions/>
  - Mars Rover?
  - <https://sammancoaching.org/kata_descriptions/supermarket_receipt.html>
- <https://medium.com/nick-tune-tech-strategy-blog/strategic-domain-driven-design-kata-delivericious-b114ca77163>
- [Online Car Dealership](https://medium.com/nick-tune-tech-strategy-blog/architecture-ddd-kata-online-car-dealership-540c534121e2)

## Experiments from other people

- [Desert Art Labs](https://desertant.com/es/)
  - On-device AI models and SDKs

- Karlos G. Liberal
  - [Rosetta - Postmortem de una piedra que no estaba](https://www.karlosgliberal.com/procesos/rosetta-postmortem-de-una-piedra-que-no-estaba/)
  - [Piernas - Un modelo pequeño para lo que no se ve](https://www.karlosgliberal.com/procesos/una-red-neuronal-minima-para-resolver-problema-pequeno/)
    - [Versión larga del artículo](https://www.karlosgliberal.com/procesos/una-red-neuronal-minima-para-resolver-problema-pequeno/)
    - "Este proceso explica cómo he entrenado una red neuronal pequeña, de 300 KB, que solo propone dónde estarían las piernas de las figuras en obras de arte que no las tienen."
    - "La red es un perceptrón de los de toda la vida, escrito en numpy, sin PyTorch ni nada que instalar aparte. Entran
      36 números, que son las 12 articulaciones del cuerpo con su x, su y y su confianza. Las rodillas y los tobillos
      también entran, pero a cero, porque son justo lo que está tapado. Esos 36 números pasan por dos capas de 256
      neuronas y salen 12, que ya solo hablan de las cuatro articulaciones que faltan: para cada rodilla y cada tobillo,
      su x, su y y un número que dice cuánto duda la red. En total son 78.348 pesos, 314 KB en disco."
