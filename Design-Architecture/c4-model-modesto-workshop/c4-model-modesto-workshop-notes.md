# Notas tal.er C4 model
- SCPNA 2024, taller de Modesto San Juan

## Introduction
- https://c4model.com/
- https://bit.ly/c4pamplona (Miro board para el taller)
    - https://miro.com/app/board/uXjVKGudTCk=/
- https://structurizr.com/: Software architecture models as code
    - https://docs.structurizr.com/lite/quickstart
        - Local Docker
- [IcePanel workshop](https://icepanel.medium.com/c4-model-getting-started-workshop-f27dc3dca2aa)
- Four levels
    - **Level 1: Context**
        - Person, Customer
        - Software Systems (e.g. internal and external)
        - Relationship
    - **Level 2: Container**
        - Container (i.e. an artifact we deploy or we connect to)
        - Container, Database
        - Container, Mobile App
        - Container, Web Browser
        - Person, Customer
        - Relationships
    - **Level 3: Component**
        - Sign-in Controller
        - Security Component
        - Database
        - etc.
        - This level might not make sense to make it by hand, but automated
    - **Level 4: Code**
        - Classes, functions
        - You can use UML
    - Sequence
    - Deployment

## Diagraming
- [eShop Reference Application](https://media.licdn.com/dms/image/D4E22AQHNyBpOrNR3ag/feedshare-shrink_2048_1536/0/1700681707033?e=1718841600&v=beta&t=Q4Y28h2eSUIzE_MvfpUipjGmGix66dG46ZAZojPLkKY)
- No diagrames, tú tienes que modelar y después usar un DSL como en Structurizr
- Context diagram
    - Identify your actors
    - Identify your systems
    - Add relatioships
    - Add descriptions to actors, systems and relationships

## Modeling
- https://structurizr.com/dsl
    - VS Code extension: C4 DSL Extension (¡ojo con el rendering!   )
- https://docs.structurizr.com/lite/quickstart
- http://localhost:8080/workspace/diagrams
- It converts the DSL to a JSON
- It allows `!includes anotherfile.dsl`

## Some resources
- https://c4model.tools/