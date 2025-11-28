Estoy siguiendo un ciclo de desarrollo de TDD.

Para hacer la fase de "RED", tenemos que crear un test, que falle. 

La funcionalidad deseada y los archivos relacionados están indicados por el usuario.

Ejecuta el test al final para comprobar que realmente no pasa.

Recuerda estar en node 20, y como se ejecuta el test:
```
npx jest <PATH_TO_TEST_FILE>
```

Al finalizar la tarea, indica escuetamente:
- Modificaciones realizadas.
- Resultado del test esperado y recibido, confirmando que el test falla por las razones adecuadas.

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
