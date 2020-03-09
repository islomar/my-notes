# IntelliJ notes

## IntelliJ Wizardry by Heinz Kabutz
    * https://javaspecialists.teachable.com/p/intellij-wizardry
    * https://javaspecialists.teachable.com/courses/enrolled/256104


## Codely.tv course
* https://pro.codely.tv/library/intellij/104101/about/
* Code example: https://github.com/CodelyTV/php-coupled_code-example
* [CodelyTV IntelliJ theme](https://plugins.jetbrains.com/plugin/12891-codelytv-theme)
* [JetBrains License](https://pro.codely.tv/library/intellij/104101/path/step/65251873/)
* [Toolbox](https://www.jetbrains.com/toolbox-app/)
    * it's easier to do rollback/downgrade to previous versions

### General recommendations
* Install plugin "Presentation Assistant".
* Disable so many plugins/bundles as possible.
* Hide Navigation Bar.
* Hide Breadcrumbs (the bar above the below Status bar)
* Configure Code Folding to not folding the imports (personally I prefer to automate the organize imports)
    * Editor > General > Code Folding
* 120 line width
* Hide "Parameter hints".
* Click on the square on the bottom right corner in order to hide the tabs.
* Typographies 
    * "Dank Mono": https://dank.sh/, it has a different typography (italic) for keywords
    * Fira Code
* Editor > Font > Line Spacing: change it to 1.5 or 1.6
* Show whitespaces: to be sure that we do not mix tabs and whitespaces
    * Again, I would rather configure automatic formatting.
* "Open declaration source in the same tab": in case you are just navigating, it doesn't open a new tab, it just refreshes the tab with that file, and then you can just move back/forward to navigate between files.
* Code style
    * Use `.editorconfig` for homogenizing the style, it's independent from the IDE, we should commit to the repository: https://editorconfig.org/
    * Hard wrap at 120
    * Chop down: linewidth, `Chop down if long`
* **PHP**: moving a package under another package doesn't work well. The hack: create a temporary file under the source overpackage, do "Move subpackage" from inside the class and select all the rest of the packages to be moved.
* `Editor > File and Code Templates`
    * Delete PHP File Header comments block, as well as all the Doc Comments templates
    * Include `final` for the PHP Class Template
* Change test suffix to `Should`: Editor > Code Style > Java > Code Generation > Test class
* Search the Live Templates for your language
    * PHP: `pubf` (and we can add the $RETURN_TYPE)
    * They create their own templates with an underscore as a preffix, e.g. `_test`
* VCS:
    * Configure title and body linewdith for the commit message
    * Plugin *TrackLink* for JIRA integration
    * Local History > Put Label
* Task management
    * **BAD IDEA**: FOCUS!!!
    * Plugin "Task Management"
    * Tools > Tasks > Server: configure you task server (e.g. Trello, Jira, GitHub, etc.)
    * In the IntelliJ top menu will appear a dropdown menu with the existing tasks (or to create a new task)
        * These are IntelliJ tasks, not necessarily associated with external tasks.
        * When creating a task, it can also automatically create a branch.
* IntelliJ Shelf vs Git Stash: it only make sense when not working with Git.
* To delimit the searches and fild/replace:
    * Mark Directory as > Excluded: so that a search doesn't take it into account.
        * You can see the overall configuration in Project Settings > Modules.
    * Appearance and behaviours > Scopes. E.g. you can create a scopre "backend", another "frontend", etc. You can select folders or use a regex.
        * You can also configure a color for each scope, in order easily identify it: Appearance and behaviour > File Colors
    * Regex for find and replace
        * Alternatiave: IntelliJ templates for find and replace
    * Actions > Replace structurally 
        * E.g. `public function $className$ implements $interfaceName$` 
        * and then you can create a text filter for $interfaceName$ `.*Repository`, or a text filter for $className$ to filter only the `.*InMemory`
* Run, Docker & Debug
    * In order to debug a PHP app from IntelliJ inside a Docker container, or to run a test against the Docker service:
        * Plugin "PHP Docker"
        * Create docker-compose configuration
        * Go to Language and framework > PHP > Add CLI Interpreter > From Docker
        * We need a file `xdebug.ini` with `xdebug.remote_host = host.docker.internal`, as well as the port. See example in repo `codelytv/php-ddd-example`.
    * Same for Java app
        * Create run configuration of type "Remote" with Docker and debugger mode "Attach to remote JVM". Also in "Before launch" configure "Launch Docker before debug".
        * Put a breakpoint in your code.
        * Now, run the docker compose with exec and "sh", and then "make test".
* UML > Show diagrams
* External Tools: e.g. to create a command to create automatically hexagonal folders (application, domain, infrastructure).
* HTTP Client
    * https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html
    * Create file with extension `.http`
    * I prefer Postman.
* Database access
* CSV/TSV files: you can "Edit as table"
* New Scratch File    
* Trim whitespaces when saving: Editor > General > Other > Strip trailing spaces on Save > All
* Project Settings > Project: you can add an emoji at the beginning of the project name
* Pair programming:
    * Plugin Floobits: https://floobits.com/
* Integrated team evironment: [JetBrains Space](https://www.jetbrains.com/space/)
    * Kind of Jira + GitHub + CI/CD + Meetings + Holidays + Office maps + Blogs + ...
* IntelliJ performance:
    * Show memory indicator
    * By default, it is configured with 700 MB.    
    * `Change Memory Settings`: recommended: Number of GB / 4. E.g. with 16 GB, configure 4 GB.


### Shortcuts
* Shift + Shift: show oracle search
* Create one for "Select in Project View" (show the opened file in the project view)
* "New File"
* Recent locations
* Navigate File Structure (show methods and attributes)
* Paste from History
* Move Caret to Matching Brace
* Add selection for next occurence (multiple cursors)
* Column Selection Mode (multiple cursors)
* Show context actions
* Open Git Branches menu
* "Complete Current Statement" (e.g. to add `;` at the end)
* Copy Reference: to get the whole FQDN of the class


### Plugins
* Key Promoter X
* Material Theme UI (it also exists for Chrome Dev Tools)
* Rainbow brackets
* PHP Inspections (EA Extended)
* PHP Docker
* UML
* CamelCase


## More personal info about IntelliJ
* https://github.com/islomar/dotfiles/blob/master/README.md#intellij-settings
* [My IntelliJ gist](https://gist.github.com/islomar/0e21d8fce8e630a8446e)



## My personal preferences
* [Tabs vs Spaces](https://dev.to/alexandersandberg/why-we-should-default-to-tabs-instead-of-spaces-for-an-accessible-first-environment-101f)

### General
* Create template for test generation
* Code style
    * Use `.editorconfig` for homogenizing the style, it's independent from the IDE, we should commit to the repository: https://editorconfig.org/
        * e.g. `indent_style`, `indent_size`
        * The IDE loads it automatically.
    * Chop down configuration (Editor > Code Style)
* Configure comments to be shown bold and red.
* Create Live Templates and study the existing ones:
    * Creat test
* Trim whitespaces when saving: Editor > General > Other > Strip trailing spaces on Save > All
* Editor > General > Code Completion > Machine Learning-Assited Completion (Exprimental)
* Create my own keymap
* "Rocket" app for Mac: in order to show emojis, https://matthewpalmer.net/rocket/
* Project Settings > Project: you can add an emoji at the beginning of the project name


### Plugins
* Plugin Importer+Exporter (From Shiraji): to manage all the plugins, it creates a json file.
* Save Actions
* Key Promoter
* PHP Inspections (EA Extended) - there is an Ultimate version
* PHP Docker
* CamelCase
* Key Promoter X


### Shortcuts
* Toggle Project View
* Go to Class/File/Symbol/Action
* Navigate back/forward
* Move statement up/down
* Go to test
* Refactor
* Duplicate line
* Rerun tests
* Switcher
* Extend/shrink selector
* Extrac method/variable/constant
* Recent locations
* Recent files
* Manage project
* Hierarchy call
* Navigate File Structure (show methods and attributes)
* Paste from History
* Add selection for next occurence (multiple cursors)
* Show context actions
* Generate (e.g. constructor, setter, etc.)
* Reformat a whole directory/package: having the package selected, Ctl+Alt+L
* New Scratch File
* Open Recent (for projects)
* "Complete Current Statement" (e.g. to add `;` at the end)