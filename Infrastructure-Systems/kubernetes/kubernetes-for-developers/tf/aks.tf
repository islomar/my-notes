# Configure the Azure Provider
provider "azurerm" {
  # whilst the `version` attribute is optional, we recommend pinning to a given version of the Provider
  version = "=1.38.0"
}

provider "azuread" {
  version = "=0.3.1"
}

resource "azurerm_resource_group" "codely" {
  name     = "codely"
  location = "eastus"
}
resource "random_id" "workspace" {
  keepers = {
    # Generate a new id each time we switch to a new resource group
    group_name = "${azurerm_resource_group.codely.name}"
  }

  byte_length = 8
}

resource "azurerm_log_analytics_workspace" "codely_log_workspace" {
  name                = "k8s-workspace-${random_id.workspace.hex}"
  location            = azurerm_resource_group.codely.location
  resource_group_name = azurerm_resource_group.codely.name
  sku                 = "PerGB2018"
}

resource "azurerm_kubernetes_cluster" "codelypro-k8s" {
  name                = "codelypro-k8s"
  location            = azurerm_resource_group.codely.location
  resource_group_name = azurerm_resource_group.codely.name
  dns_prefix          = "exampleaks1"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_D2_v2"
  }

  addon_profile {
    oms_agent {
      enabled                    = true
      log_analytics_workspace_id = azurerm_log_analytics_workspace.codely_log_workspace.id
    }
  }

  service_principal {
    client_id     = "00000000-0000-0000-0000-000000000000"
    client_secret = "00000000000000000000000000000000"
  }

  tags = {
    Environment = "Development"
  }
}

resource "azuread_application" "codely_application" {
  name = "codely_application"
}

# resource "azuread_service_principal" "codely_service_principal" {
#   application_id = azuread_application.codely_application.application_id
#   client_id      = "00000000-0000-0000-0000-000000000000"
#   client_secret  = "00000000000000000000000000000000"
# }

output "client_certificate" {
  value = azurerm_kubernetes_cluster.codelypro-k8s.kube_config.0.client_certificate
}

output "kube_config" {
  value = azurerm_kubernetes_cluster.codelypro-k8s.kube_config_raw
}