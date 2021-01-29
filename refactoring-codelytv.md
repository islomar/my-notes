# Refactoring course by CodelyTV

- ETA ~ 8 hours
- https://pro.codely.tv/library/refactoring-code-smells-clean-code-bloaters/
- https://github.com/CodelyTV/refactoring-code-smells

## General

- Great example about how "technical debt" gets generated with [StudentGradeCalculator](https://github.com/CodelyTV/refactoring-code-smells/blob/a0d323f6efb04aa453e982ec2552eed1c527b057/examples/java/java-student_grades-01_base/src/main/java/tv/codely/student_grades/StudentGradeCalculator.java)
- Evernote had to stop 18 months: https://www.protocol.com/evernote-reboot-ian-small

## Refactors

- Long method
- Large class
  - Template method
- Primitive obsession
- Strategy pattern
- Long parameter list
- Tell don't ask
- Data clump
- Complex conditionals
  - Replace error code with exception
- Parameter code smell

## Bookmark

https://pro.codely.tv/library/refactoring-code-smells-clean-code-bloaters/176560/path/step/102887011/

## Lessons learned

- The symbol in the IDE for the use of a variable (red/green) reflects if it's being written (red) or read (green).

## Links

- https://refactoring.com/
- https://refactoring.guru/
- [QWAN cards](https://www.youtube.com/watch?v=JQbsxc-BPrU)
- [A Taxonomy for "Bad Code Smells"](http://mikamantyla.eu/BadCodeSmellsTaxonomy.html)
- https://www.protocol.com/evernote-reboot-ian-small
- https://es.slideshare.net/JavierCane/we-broke-up-with-the-monolith-and-started-dating-eventsourcing-symfonycat

## Refactor Extract Method ayudándonos del IDE y problemas relacionados

Por compartir cómo suelo enfocar yo refactors similares: aparte de ejecutar los tests relativos al código a refactorizar, los ejecuto con cobertura. Si veo que falta algo "importante" por cubrir, intento añadir los tests que falten antes de empezar a refactorizar (en la medida en la que el código lo permita según el tipo de dependencias, etc.)

Habría empezado por crear una cláusula de guarda, invirtiendo el primer if() de la línea 33. Para que la lógica principal esté a un primer nivel del método, no dentro de un if() >> tal vez lo vais a comentar más adelante y me estoy adelantando.
if (!examsGrades.isEmpty()) {
