Estoy siguiendo un ciclo de desarrollo de TDD.

Hemos modificado el test. Y ahora tenemos que modificar la funcionalidad para que el test pase. Debes implementar la menor funcionalidad que hará que el test pase. No implementes funcionalidad adicional.

Los archivos relacionados están indicados por el usuario, y en la conversación actual.

Ejecuta el test para comprobar por qué no pasa.

Recuerda estar en node 20, y como se ejecuta el test:
```
npx jest <PATH_TO_TEST_FILE>
```

Como resultado, puedes indicar casos de uso que quizás no están contemplados que no has implementado y que crees que deberíamos implementar.

# Convenciones adicionales para TDD (implement)

- Factories estáticas en lugar de constructores: al instanciar clases durante la implementación, usa siempre `ClassName.create(dependencies = {})` en vez de `new ClassName(...)`. Asegúrate de que las clases nuevas expongan `static create()` y que el constructor acepte dependencias con valores por defecto cuando sea necesario (p. ej., `logger`, `dynamoDbClient`, etc.).
