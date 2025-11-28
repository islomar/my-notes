# OBJETIVO DE LA TAREA

Estoy siguiendo un ciclo de desarrollo de TDD.
- RED: escribir el test que falle.
- GREEN: implementar
- REFACTOR: proponer refactors técnicos que mejoren la calidad del código.

Quiero que ejecutes este ciclo para la funcionalidad descrita por el usuario.

## STEP RED

Para hacer la fase de "RED", tenemos que crear un test, que falle. 

La funcionalidad deseada y los archivos relacionados están indicados por el usuario.

Ejecuta el test al final para comprobar que realmente no pasa.

Recuerda estar en node 20, y como se ejecuta el test:
```
npx jest <PATH_TO_TEST_FILE>
```

Al finalizar esta tarea, confirma que el test falla por las razones indicadas.

## STEP GREEN

Hemos modificado el test. Y ahora tenemos que modificar la funcionalidad para que el test pase. Debes implementar la menor funcionalidad que hará que el test pase. No implementes funcionalidad adicional.

## STEP REFACTOR

En la conversación que tenemos, hemos realizado el paso RED (test), GREEN (implement), y ahora nos queda el refactor.

Eres un agente de código autónomo con la mentalidad y experiencia de un desarrollador senior orientado a objetos que valora la mantenibilidad a largo plazo, la simplicidad y el bajo coste de mantenimiento.

Tu tarea es analizar el código de las modificaciones realizadas durante este desarrollo (y los archivos afectados) para producir un plan de acción priorizado de mejoras que hagan el código más simple, claro y más barato de mantener a lo largo del tiempo.

Piensa y actúa como un ingeniero pragmático que prefiere pasos evolutivos, pequeños y seguros en lugar de reescrituras masivas.
Evita abstracciones especulativas o innecesarias y enfócate únicamente en cambios que mejoren tangiblemente la mantenibilidad y reduzcan la complejidad accidental.

Resultado esperado: Una lista priorizada de recomendaciones, si existe alguna. Deben estar enumerados, para poder hacer referencia a ellos fácilmente. Es decir, 1, 2, 3, ...

Las recomendaciones deben ser pragmáticas y válidas. Si no existen recomendaciones, puedes indicar "No recomendaría ninguna acción", siendo este un resultado válido.

El resultado debes indicarlo. No escribas ningún fichero todavía.

Debes recomendar solo y únicamnete modificaciones de código (refactors técnicos), y solo sobre el método / métodos que están impactados por los tests añadidos / modificados / eliminados. NO incluyas sugerencias funcionales, solo refactors técnicos.

Las recomendaciones sugeridas NO pueden introducir comportamiento nuevo, ni implicar o requerir nuevos tests.


# Convenciones de testing para el proyecto

Convenciones de Testing para el proyecto chat-funnels:

1. Logger de doubles en lugar de mocks directos
   - No usar: jest.mock('../../../../../src/logger', () => ({ logger: { warn: jest.fn() } }))
   - Usar: import { logger } from '../../../../__DOUBLES__'

2. No hacer clears explícitos de mocks
   - No usar: logger.info.mockClear()
   - No usar: jest.clearAllMocks() en beforeEach
   - La configuración de Jest ya se encarga automáticamente de limpiar los mocks

3. Separar tests en lugar de combinar múltiples verificaciones
   - No hacer: Un test que verifique "no se programa Y se registra log"
   - Hacer: Tests separados dentro de un describe block:
     describe('when phoneNumber cannot be internationalized', () => {
       test('does not schedule fazwaz suggestion', ...)
       test('logs', ...)
     })

4. Formato estructurado para logs
   - No usar: logger.info('mensaje', { params })
   - Usar: logger.info({
       code: 'CODIGO_EN_MAYUSCULAS',
       payload: entireRequest  // toda la request para debugging
     })

5. Tipo de log: En caso de duda, consultar al usuario.
   - Usar logger.info para este tipo de situaciones (no warn)
   - Usar logger.error en caso de que deba generar una alarma la situación.

6. Pasar logger como dependencia
   - Incluir el logger en las dependencias del objeto a testear:
     const instance = XXXXX.create({
       // otras dependencias,
       logger
     })

7. Utiliza método test(), no it()

8. Uso de jest-when para mocks condicionados
   - Declarar el doble al inicio del test: `const servicio = { metodo: jest.fn() }`
   - Configurar con jest-when: `when(servicio.metodo).calledWith(expect.anything()).mockResolvedValue(valor)`
   - Preferir jest-when sobre `mockResolvedValue` directo cuando se validan argumentos

9. Factories estáticas en lugar de constructores
   - Preferir métodos estáticos `ClassName.create(dependencies = {})` para instanciar clases en producción y en tests, en lugar de usar `new ClassName(...)`. Asegúrate de que las clases nuevas expongan `static create()` y que los tests las creen mediante dicho método.
