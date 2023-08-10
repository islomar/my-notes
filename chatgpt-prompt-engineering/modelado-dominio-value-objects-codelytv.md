# Modelado del dominio: Value Objects
- https://pro.codely.com/library/modelado-del-dominio-value-objects-201826/510524
- https://github.com/CodelyTV/value_objects-course
- [Implicaciones en testing](https://github.com/CodelyTV/value_objects-course/tree/main/03-value_objects_beyond/1-testing)
    - Patrón Object Mother
        - Template para Object Mother en IntelliJ Idea:
        ```  
        static create(value: string): $CLASS$ {
            return new $CLASS$$END$(value);
        }

        static random(): $CLASS$ {
            return this.create(WordMother.random());
        }
        ```

        Y el valor de $CLASS$:
        ```
        regularExpression(fileNameWithoutExtension(), "(.*)Mother$", "$1")
        ```
        - IntelliJ plugin: https://github.com/inigodm/objectMotherGenerator
- Instancian el VO desde el propio Entity:
    - [src/Mooc/Courses/Application/Create/CourseCreator.php](https://github.com/CodelyTV/php-ddd-example/blob/38159067018714cb37ab29274a2352d6611f4fb1/src/Mooc/Courses/Application/Create/CourseCreator.php#L14)
    - Antes lo hacían en el Caso de Uso: ahora piensan que eso implica permear conocimiento fuera y tener el conocimiento más distribuido. No exponer hacia fuera cómo modelamos por dentro.
    
BOOKMARK:
    - https://pro.codely.com/library/modelado-del-dominio-value-objects-201826/510524/path/step/258734854/
    - 1' 32''