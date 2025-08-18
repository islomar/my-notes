# Patrones de diseño (curso Codely TV)

- Tipos de patrones (según GoF):
  - creacionales,
  - estructurales,
  - de comportamiento

## Patrones creacionales

- Abstraen a los clienes del código del proceso de instanciación de objetos.

### Singleton

- Cuando quieres garantizar que sólo existe una instancia de algo.
- More an anti-pattern than a pattern...
- Es una variable global, es difícil tener control de dónde se cambia qué.
- [Ejemplo de Singleton](https://github.com/VaughnVernon/IDDD_Samples/blob/master/iddd_common/src/main/java/com/saasovation/common/domain/model/DomainEventPublisher.java)
- Problemas con D de SOLID: Los Singleton, al ser llamadas estáticas, no se pueden doblar en tiempo de test de forma sencilla.
- [Feature Flags example](https://github.com/CodelyTV/refactoring-code-smells/tree/master/examples/php/php-feature_flags-01_base)
  - Refactor del singleton [FeatureFlags](https://github.com/CodelyTV/refactoring-code-smells/blob/master/examples/php/php-feature_flags-01_base/src/FeatureFlags.php):
    - Quito que sea singleton.
    - Lo hago inmutable.
    - Lo inyecto (en el Caso de Uso)
- Ejemplos del "Mundo Real":
  - [tree.js](https://github.com/mrdoob/three.js/blob/dev/src/loaders/Cache.js)
    - https://github.com/mrdoob/three.js/blob/dev/src/loaders/FileLoader.js#L24-L38
    - https://github.com/mrdoob/three.js/blob/9ea2d4a418f50aebe9b9e81f01e199ab7be539f2/src/loaders/ImageLoader.js#L21-L35
  - [Java Log Manager](https://docs.oracle.com/javase/6/docs/api/java/util/logging/LogManager.html)
  - [Unity](https://docs.unity3d.com/Packages/com.unity.remote-config@0.3/api/Unity.RemoteConfig.ConfigManager.html)
- Use cases
  - Configuration, e.g. logging, feature flags.
  - Cache

### Refactoring de Singleton a Dependency Injection: Rompiendo la dependencia con MySql

- Concepto "costura", "seam".
- https://github.com/CodelyTV/refactoring-code-smells/blob/master/examples/php/php-feature_flags-01_base/src/Application/Subscribe.php

### Garantizar una instancia única sin Singletons: DomainEventPublisher

- https://github.com/VaughnVernon/IDDD_Samples/blob/master/iddd_common/src/main/java/com/saasovation/common/domain/model/DomainEventPublisher.java
- Podemos hacer que el Singleton no realice nunca operaciones de entrada/salida, y que lo único que haga es almacenar los eventos que se hayan producido en el Dominio.

## Las Factorías

### Factory Method

- Template Method
  - https://github.com/CodelyTV/refactoring-code-smells/tree/dfea8d71159439c738f5afa233b1822013fbe92a/examples/ts/ts-stock_counter-02_extract_base_class
  - https://github.com/CodelyTV/refactoring-code-smells/tree/dfea8d71159439c738f5afa233b1822013fbe92a/examples/ts/ts-stock_counter-03_add_factory_method
  - [FeedStockCounterCsv.ts](https://github.com/CodelyTV/refactoring-code-smells/blob/dfea8d71159439c738f5afa233b1822013fbe92a/examples/ts/ts-stock_counter-01_base/src/FeedStockCounterCsv.ts)
  - [FeedStockCounterJson](https://github.com/CodelyTV/refactoring-code-smells/blob/dfea8d71159439c738f5afa233b1822013fbe92a/examples/ts/ts-stock_counter-01_base/src/FeedStockCounterJson.ts)
- Named constructor:
  - Método estático _create_ dentro de la clase misma que va a instanciar (con constructor privado normalmente)
- Object Mother
- Alternativa al Factory Method: Compartir comportamiento por **composición**:
  - Inyectamos instancias diferentes de FeedParser en el constructor de FeedStockCounter (uno único, no varios heredados para Json, Csv, etc.).
  - Componemos inyectando.

### Factorias: cuando la cosa se complica

#### Crea la instancia en Runtime con Factory Method parametrizado

- https://github.com/CodelyTV/refactoring-code-smells/tree/dfea8d71159439c738f5afa233b1822013fbe92a/examples/ts/ts-stock_counter_dynamic-02_extract_parameterized_factory_method

#### Exhaustividad en la instanciación: La magia del tipado

- "exhaustive switch"
- https://github.com/CodelyTV/refactoring-code-smells/tree/dfea8d71159439c738f5afa233b1822013fbe92a/examples/ts/ts-stock_counter_dynamic-03_exhaustive_type_check
- Uso de Enum en el switch()

### Abstract Factory: Crear familias de objetos

- Ejemplo con pasarelas de pago (Ogone y Adyen)
- [kotlin-payment_gateways-01_base](https://github.com/CodelyTV/refactoring-code-smells/tree/99a897a7896dcdf190f6c4a51a96e549c96cf64a/examples/kotlin/kotlin-payment_gateways-01_base)
- Abstract Factory: interfaz con métodos de factoría (e.g. _createCreditCard()_)
- La Abstract Factory permite crear familias de objetos. Asegura la consistencia entre todos los tipos que se devuelvan en los métodos _createXxx()_
- Rigidez del diseño: El acoplamiento estructural que hemos generado, hace que si en algún momento tenemos que cambiar parte de nuestra factoría abstracta, añadiendo nuevos métodos de factoría, se verán afectadas todas las factorías.

### Builder: Facilitar la construcción de objetos
- Ejemplos del Mundo Real™️ de Builders
    - [PHP Architecture Tester](https://github.com/carlosas/phpat)
    - [Query Builder](https://github.com/doctrine/orm/blob/2.9.x/lib/Doctrine/ORM/QueryBuilder.php)
- Alternativas al patrón Builder
    - El hecho de que un objeto sea complejo de construir, y que los clientes necesiten construirlo de formas diferentes, no implica que siempre debamos optar por el Builder.
    - Mejor construir estructuras de objetos más pequeñas
    - El Builder está acoplado con el constructor de la clase que estamos construyendo. Esto hace que cualquier cambio haga que tengamos que evolucionar nuestro Builder.
    - Evitar el Builder si vas a dar soporte a pocos clientes