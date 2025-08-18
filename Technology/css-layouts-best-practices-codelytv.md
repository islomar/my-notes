# CSS Layouts Best Practices

- https://github.com/CodelyTV/css-layouts-best-practises-course
- https://pro.codely.tv/library/layouts-css/177409/about/
- ETA ~ 1.5 horas

## 5 Errores comunes trabajando con CSS layouts

1. Alterar innecesariamente el flow.
2. z-index: 99999
   - en la mayoría de casos con un par de valores nos bastará para resolver el posicionamiento de los elementos de una página.
3. Usar tamaños fijos
   - Usar propiedades como min-width junto con paddings nos ayudará a que los elementos se adapten a cualquier texto, viewport, etc.
4. Abusar de media queries
   - Flex y grid nos permiten ajustar el layout a distintos anchos sin necesidad de media queries
5. Flex vs Grid

## Cuándo usar cada tipo de unidad: más allá del píxel

- Demo: https://codelytv.github.io/css-layouts-best-practises-course/1-2-units/
- Código: https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/1-2-units
- **rem**: relativa al elemento root, en general equivale a 16px y es útil como unidad por defecto. Todos los tamaños definidos con rem escalaran automáticamente según las preferencias del usuario, o si modificamos el tamaño del root con una media query para ciertos viewports.
- **em**: relativa al tamaño de fuente del elemento parent, nos será útil para aplicar en paddings o margins de elementos que queremos que crezcan proporcionalmente al tamaño de letra.
  - E.g. para botones.
- **ch**: character unit, corresponde al ancho del caracter 0 de la tipografía. Nos sirve para definir tamaños teniendo en cuenta el ancho ideal de línea para conseguir una legibilidad óptima, independientemente de la tipografía o del tamaño del texto.
- **%**: relativa al tamaño del parent, nos sirve para que los elementos children cambien en proporción. És útil combinarlo con min-width o max-width con otra unidad (e.g. en rem).
  - E.g. para _width_
- **vw y vh**: relativos al ancho y alto del viewport respectivamente, nos sirve para ajustar tamaños de elementos anidados según el viewport.
  - E.g. útil para desde un elemento anidado decirle que ocupe por ejemplo el 100% de la altura del viewport (_min-height: 100vh_). Si no, si se hace poniendo _100%_, como haría referencia al parent, habría que meter el 100% al height de TODOS los elementos por encima (para que acabe ocupando el 100% de altura), lo cual es muy tedioso.

## Filtros responsive sin media queries con flex

- https://codelytv.github.io/css-layouts-best-practises-course/2-1-responsive-flex/
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/2-1-responsive-flex
- **No abusar de media queries**, usar Flex para algunas cosas.
- FlexBox es unidimensinal. Grid es bidimensional.
- Las DevTools de Firefox vienen muy bien para entender Flex, te muestra mucha información.
- Ejemplo del filters aquí: https://github.com/CodelyTV/css-layouts-best-practises-course/blob/main/pages/2-1-responsive-flex/components/Filters.vue
  - Que la caja de búsqueda baje cuando se estrecha la pantalla.
  - Uso de `flex-wrap: wrap` para que baje.
  - Uso de `flex-grow: 1` para que pueda crecer cuando baje (y ocupe más espacio). Si tienes dos elementos en una misma "fila" y quieres que uno aproveche todo el espacio posible y no el otro, pones e.g. "999" a uno y "1" al otro.
  - Uso de `flex-basis: 0` para definir el espacio que ocupa antes de repartirse el espacio libre. Es una especie de ancho mínimo.
- Propiedades de _flex_:
  - **flex-wrap**: Permite que los elementos caigan a una segunda línea.
  - **flex-grow**: Representa el factor según el que los elementos se reparten el espacio libre. Si todos los elementos tienen el mismo valor, se lo repartirán a partes iguales. Nos permite que los elementos crezcan cuando saltan de línea.
  - **flex-basis**: Representa el espacio que tiene ese elemento antes de repartirse el espacio libre. Es decir, si un elemento tiene flex-basis: 10rem, esos 10rem dejan de contar como espacio libre.
- Links de interés sobre Flex:
  - [Examinar flexbox layouts con Firefox](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)
  - [CSS Tricks: A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [MDN: Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- Flex
  - Unidimensional.
  - flex-direction: row, row-reverse, column, column-reverse
  - Main vs cross axis.
  - Start and end lines vs Left and Right.
  - An area of a document laid out using flexbox is called a flex container.
    - To create a flex container, we set the value of the area's container's display property to flex or inline-flex.
    - As soon as we do this the direct children of that container become flex items.
  - To cause wrapping behavior add the property flex-wrap with a value of wrap.
    - [More info](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
    - Using nowrap would cause an overflow if the items were not able to shrink.
    - You can combine the two properties flex-direction and flex-wrap into the `flex-flow` shorthand.
    - To have more control over flex items we can target them directly.
      - The `flex` shorthand allows you to set the three values in this order — flex-grow, flex-shrink, flex-basis.
      - Using `flex: auto` is the same as using flex: 1 1 auto; everything is as with flex:initial but in this case the items can grow and fill the container as well as shrink if required.
      - The shorthand you often see in tutorials is flex: 1 or flex: 2 and so on. This is as if you used flex: 1 1 0. The items can grow and shrink from a flex-basis of 0.
      - flex-grow
        - With the flex-grow property set to a positive integer, flex items can grow along the main axis from their flex-basis. This will cause the item to stretch and take up any available space on that axis, or a proportion of the available space if other items are allowed to grow too.
        - The flex-grow property can be used to distribute space in proportion.
      - flex-shrink
        - the flex-shrink property controls how space is taken away in the main axis.
        - with a positive value the items can shrink, but only if their total values overflow the main axis.
        - an item with a higher value set for flex-shrink will shrink faster than its siblings that have lower values.
      - flex-basis
        - The flex-basis is what defines the size of that item in terms of the space it leaves as available space.
        - By default, it takes the width of the item.
        - If the items don’t have a size then the content's size is used as the flex-basis. This is why when we just declare _display: flex_ on the parent to create flex items, the items all move into a row and take only as much space as they need to display their contents.
      - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax
  - The `align-items` property will align the items on the cross axis.
    - The initial value for this property is stretch and this is why flex items stretch to the height of the flex container by default.
    - Values: flex-start, flex-end, center, etc.
  - The justify-content property is used to align the items on the main axis, the direction in which flex-direction has set the flow.
    - The initial value is flex-start which will line the items up at the start edge of the container, but you could also set the value to flex-end to line them up at the end, or center to line them up in the centre.
  - [Aligning Items in a Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)

## Galería responsive sin media queries con grid

- https://codelytv.github.io/css-layouts-best-practises-course/2-2-responsive-grid/
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/2-2-responsive-grid
- La unidad _fr_: representa una **fracción del espacio disponible**. Si hay varias columnas de _1fr_ pero una de ellas necesita crecer por el contenido de un elemento, nos puede pasar que terminen siendo de tamaños diferentes.
- _auto-fill_ y _minmax_: con esto conseguimos que las columnas se adapten a cualquier ancho, por lo que el componente se nos verá bien en cualquier viewport, pero también si cambiamos el ancho del elemento que lo contiene:
  _grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));_
- Más recursos sobre Grid:
  - [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - [MDN: Basic Concepts of Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

## Buenas prácticas con flex y grid

### Grid areas y order

- https://codelytv.github.io/css-layouts-best-practises-course/3-1-grid-areas-order/
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/3-1-grid-areas-order
- La propiedad _grid-template-areas_ es muy potente y nos permite definir nuestro layout por zonas de forma muy visual

### Cuando usar Flex vs Grid

- **¿Quiero controlar 1 o 2 dimensiones?**
  - Tiene sentido usar flex cuando solo nos interese controlar un sentido del axis, aunque tengamos elementos en múltiples líneas. Es decir, usando _flex-direction: row_ los elementos no tendrán relación entre si a modo de columnas, sólo horizontalmente. Por contra, con grid podemos mantener esa relación en ambas direcciones, y conseguir que los elementos tengan la misma altura en todas las filas muy fácilmente.
- **¿Prioridad de contenido o de layout?**
  - Si nos interesa definir un layout relativamente rígido, la capacidad de definir columnas y filas de grid es lo que necesitamos. El contenido, dentro de lo posible, se adaptará a los espacios definidos por el grid.
  - Si en lugar de eso queremos que los elementos ocupen el espacio que necesiten según su contenido, y que el layout cambie según el tamaño de estos elementos, nos será más útil la flexibilidad de flex

## Maquetar Modales y Menús: entendiendo Position

### Modal: position relative, absolute y fixed

- https://codelytv.github.io/css-layouts-best-practises-course/4-1-modal-position/
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/4-1-modal-position
- El valor **relative** no rompe el flow layout, y nos sirve para crear un nuevo positioning context, es decir, los elementos con position **absolute** que estén dentro de un elemento con position relative, se posicionarán en relación a este.
- El valor **fixed** siempre se posicionará en relación al viewport, menos en el caso que esté dentro de un elemento que tenga un transform o filter. Por este motivo suele ser buena idea poner los modales lo menos anidados posible.
- Existen librerías "focus-trap" para evitar que el foco se vaya del modal hacia atrás.

### Menú: position sticky

- https://codelytv.github.io/css-layouts-best-practises-course/4-2-menu-sticky/
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/4-2-menu-sticky/
- La propiedad **sticky** nos permite que ciertos elementos se peguen al viewport y sigan el scroll sin romper el layout. Es una propiedad muy útil pero tiene una limitación: siempre va a posicionarse en relación al elemento que tenga un sistema de scroll, es decir, un elemento que tenga la propiedad overflow seteada a cualquier valor que no sea auto, aunque no sea el elemento en el que estamos haciendo scroll. Por este motivo suele ser buena idea que estos elementos estén lo menos anidados posible.

### Entendiendo z-index y los stacking contexts

- [Demo](https://codelytv.github.io/css-layouts-best-practises-course/4-3-understanding-z-index/)
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/4-3-understanding-z-index/
- Por defecto, los elementos se posicionarán según su orden en el DOM, es decir, los elementos que aparecen después siempre taparán los elementos anteriores. Eso también pasa si les asignamos el mismo valor de _z-index_. Entendiendo esto, en la mayoría de los casos no nos harán falta más que uno o dos valores para posicionar correctamente los elementos.
- Es importante tener en cuenta que los z-index solo compiten entre stacking contexts hermanos: si dentro de un stacking context (que creamos con position, opacity o transform, entre otros) por mucho que a un elemento le asignemos un z-index muy elevado, ese elemento no va a ponerse por encima de elementos que estén fuera de su contexto. Puedes leer más sobre [stacking contexts en MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
  - El position _sticky_ siempre crea un stacking context.
- Para proyectos grandes es buena idea usar una [escala de z-index](https://gist.github.com/toadkicker/fc290e84d7bd861e3e73): podemos ver fácilmente el orden en el que los distintos elementos estan posicionados y facilita mucho el trabajo en equipo ya que sirve como documentación.

## Más métodos de layout!

### Block formatting contexts: Float sin clearfix!

- [Demo] (https://codelytv.github.io/css-layouts-best-practises-course/5-1-float)
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/5-1-float
- Gracias a flex y grid ya no tenemos que crear layouts de columnas usando float, pero eso no significa que haya dejado de tener su uso. Con `float` podemos conseguir layouts más variados, por ejemplo para conseguir que el texto siga la forma de una imagen, especialmente si lo combinamos con la propiedad _shape-outside_.
- Además, a día de hoy ya no es necesario recorrer al famoso truco de clearfix: si ponemos la propiedad _display: flow-root_ al elemento contenedor, conseguiremos el efecto clearfix sin tener que añadir _markup_ extra.

## Más métodos de layout!

### Multi-column: efecto masonry CSS-only

- [Demo](https://codelytv.github.io/css-layouts-best-practises-course/5-2-multi-column-masonry/)
- https://github.com/CodelyTV/css-layouts-best-practises-course/tree/main/pages/5-2-multi-column-masonry/
- Hemos visto como sacar partido a grid para crear sistemas de columnas, pero no es la única forma. Con `multi-column` podemos conseguir que el texto se disponga en columnas de manera fluida y responsive, y también conseguir efectos como **masonry**, que en el pasado se tenía que hacer usando JavaScript. Con las propiedades _break-before_, _break-after_ y _break-inside_ podemos controlar en que puntos queremos o no saltar de columna.
- Más info en [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns)

## Conclusiones y siguientes pasos

### Subgrid

- Cuando nos pasan un diseño que sigue un sistema de columnas, puede ser un poco engorroso tener que estar redefiniendo columnas en cada elemento anidado. Subgrid nos permite que los children hereden las columnas y filas fácilmente, cosa que hará que nuestros layouts sean aún más fáciles de mantener.
- Más info en [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)

### Siguientes pasos

- Guías en [CSS Tricks](https://css-tricks.com/guides/)
- [CSS Layouts en MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- Arquitectura [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) y [BEMIT](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

## Buscar

- padding vs margin

## Best practices

- Use **rem** for the font size: if the user changes the font size of the browser, it will change accordingly.
  - Por accesibilidad y por "respeto" al usuario.
- Usar **rem** por defecto para todo.

## To be shared

- flow con shape-outside
- uso de rem
- masonry
