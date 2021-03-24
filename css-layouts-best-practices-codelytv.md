# CSS Layouts Best Practices
* https://github.com/CodelyTV/css-layouts-best-practises-course
* https://pro.codely.tv/library/layouts-css/177409/about/
* ETA ~ 1.5 horas

##  5 Errores comunes trabajando con CSS layouts
1. Alterar innecesariamente el flow.
2. z-index: 99999
    * en la mayoría de casos con un par de valores nos bastará para resolver el posicionamiento de los elementos de una página.
3. Usar tamaños fijos
    * Usar propiedades como min-width junto con paddings nos ayudará a que los elementos se adapten a cualquier texto, viewport, etc.
4. Abusar de media queries
    * Flex y grid nos permiten ajustar el layout a distintos anchos sin necesidad de media queries
5. Flex vs Grid


## Cuándo usar cada tipo de unidad: más allá del píxel
* Demo: https://codelytv.github.io/css-layouts-best-practises-course/1-2-units/
* Código: https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/1-2-units
* **rem**: relativa al elemento root, en general equivale a 16px y es útil como unidad por defecto. Todos los tamaños definidos con rem escalaran automáticamente según las preferencias del usuario, o si modificamos el tamaño del root con una media query para ciertos viewports.
* **em**: relativa al tamaño de fuente del elemento parent, nos será útil para aplicar en paddings o margins de elementos que queremos que crezcan proporcionalmente al tamaño de letra.
    * E.g. para botones.
* **ch**: character unit, corresponde al ancho del caracter 0 de la tipografía. Nos sirve para definir tamaños teniendo en cuenta el ancho ideal de línea para conseguir una legibilidad óptima, independientemente de la tipografía o del tamaño del texto.
* **%**: relativa al tamaño del parent, nos sirve para que los elementos children cambien en proporción. És útil combinarlo con min-width o max-width con otra unidad (e.g. en rem).
    * E.g. para *width*
* **vw y vh**: relativos al ancho y alto del viewport respectivamente, nos sirve para ajustar tamaños de elementos anidados según el viewport.
    * E.g. útil para desde un elemento anidado decirle que ocupe por ejemplo el 100% de la altura del viewport (*min-height: 100vh*). Si no, si se hace poniendo *100%*, como haría referencia al parent, habría que meter el 100% al height de TODOS los elementos por encima (para que acabe ocupando el 100% de altura), lo cual es muy tedioso.

## Filtros responsive sin media queries con flex
* https://codelytv.github.io/css-layouts-best-practises-course/2-1-responsive-flex/
* https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/2-1-responsive-flex
* No abusar de media queries, usar Flex para algunas cosas.
* Propiedades de *flex*:
    * **flex-wrap**: Permite que los elementos caigan a una segunda línea.
    * **flex-grow**: Representa el factor según el que los elementos se reparten el espacio libre. Si todos los elementos tienen el mismo valor, se lo repartirán a partes iguales. Nos permite que los elementos crezcan cuando saltan de línea.
    * **flex-basis**: Representa el espacio que tiene ese elemento antes de repartirse el espacio libre. Es decir, si un elemento tiene flex-basis: 10rem, esos 10rem dejan de contar como espacio libre.

## Best practices
* Use **rem** for the font size: if the user changes the font size of the browser, it will change accordingly.
    * Por accesibilidad y por "respeto" al usuario.
* Usar **rem** por defecto para todo.


## Pendiente
* Revisar en el primer vídeo lo del max-width.