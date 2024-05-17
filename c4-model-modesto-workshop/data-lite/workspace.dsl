workspace {
    !identifiers hierarchical
    model {
        user = person "User" "A user of my software system."
        salesSystem = softwareSystem "Software System" "My software system." {
            webapp = container "Web Application"
            database = container "MySQL Database" "Description" "MySQL" "Database"
        }

        user -> salesSystem "Uses"
        user -> salesSystem.webapp "Uses"
        salesSystem.webapp -> salesSystem.database
    }

    views {
        systemContext salesSystem "SystemContext" {
            include *
            autoLayout
        }
        container salesSystem "Containers" {
            include *
            autoLayout
        }

        styles {
            # This theme creates by default the C1-C3 views, we could delete the elements for "Software System" and "Person"
            theme default 
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Person" {
                shape person
                background #08427b
                color #ffffff
            }
            element "Database" {
                background #999999
                shape cylinder
            }
        }
    }
    
}