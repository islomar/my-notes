# Patrones de diseño (curso Codely TV)

* Tipos de patrones (según GoF):
    * creacionales,
    * estructurales,
    * de comportamiento

## Patrones creacionales
* Abstraen a los clienes del código del proceso de instanciación de objetos.

### Singleton
* Cuando quieres garantizar que sólo existe una instancia de algo.
* More an anti-pattern than a pattern...
* Es una variable global, es difícil tener control de dónde se cambia qué.
* [Ejemplo de Singleton](https://github.com/VaughnVernon/IDDD_Samples/blob/master/iddd_common/src/main/java/com/saasovation/common/domain/model/DomainEventPublisher.java)
* Problemas con D de SOLID: Los Singleton, al ser llamadas estáticas, no se pueden doblar en tiempo de test de forma sencilla.
* [Feature Flags example](https://github.com/CodelyTV/refactoring-code-smells/tree/master/examples/php/php-feature_flags-01_base)
    * Refactor del singleton [FeatureFlags](https://github.com/CodelyTV/refactoring-code-smells/blob/master/examples/php/php-feature_flags-01_base/src/FeatureFlags.php):
        * Quito que sea singleton.
        * Lo hago inmutable.
        * Lo inyecto (en el Caso de Uso)
* Ejemplos del "Mundo Real":
    * [tree.js](https://github.com/mrdoob/three.js/blob/dev/src/loaders/Cache.js)
        * https://github.com/mrdoob/three.js/blob/dev/src/loaders/FileLoader.js#L24-L38
        * https://github.com/mrdoob/three.js/blob/9ea2d4a418f50aebe9b9e81f01e199ab7be539f2/src/loaders/ImageLoader.js#L21-L35
    * [Java Log Manager](https://docs.oracle.com/javase/6/docs/api/java/util/logging/LogManager.html)
    * [Unity](https://docs.unity3d.com/Packages/com.unity.remote-config@0.3/api/Unity.RemoteConfig.ConfigManager.html)
* Use cases
    * Configuration, e.g. logging, feature flags.
    * Cache

### Refactoring de Singleton a Dependency Injection: Rompiendo la dependencia con MySql
* Concepto "costura", "seam".
* https://github.com/CodelyTV/refactoring-code-smells/blob/master/examples/php/php-feature_flags-01_base/src/Application/Subscribe.php

### Garantizar una instancia única sin Singletons: DomainEventPublisher
* https://github.com/VaughnVernon/IDDD_Samples/blob/master/iddd_common/src/main/java/com/saasovation/common/domain/model/DomainEventPublisher.java
* Podemos hacer que el Singleton no realice nunca operaciones de entrada/salida, y que lo único que haga es almacenar los eventos que se hayan producido en el Dominio.


## Charla Refactoring
* xxxx