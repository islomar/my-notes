# Notas tal.er C4 model
- SCPNA 2024, taller de Modesto San Juan

## Introduction
- https://c4model.com/
- https://bit.ly/c4pamplona (Miro board para el taller)
    - https://miro.com/app/board/uXjVKGudTCk=/
- https://structurizr.com/: Software architecture models as code
    - https://docs.structurizr.com/lite/quickstart
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
- No diagrames, tú tienes que modelar y después usar un DSL como en Structurizr
- Context diagram
    - Identify your actors
    - Identify your systems
    - Add relatioships
    - Add descriptions to actors, systems and relationships

## Modeling
- https://structurizr.com/dsl
- VS Code extension: C4 DSL Extension
- https://docs.structurizr.com/lite/quickstart
- http://localhost:8080/workspace/diagrams
- It converts the DSL to a JSON
- It allows `!includes anotherfile.dsl`

## Some resources