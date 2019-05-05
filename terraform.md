# Notes about Terraform
https://www.terraform.io/intro/index.html


* Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers as well as custom in-house solutions.
* Terraform generates an **execution plan** describing what it will do to reach the **desired state**, and then executes it to build the described infrastructure. As the configuration changes, Terraform is able to determine what changed and **create incremental execution plans** which can be applied.
* The infrastructure Terraform can manage includes low-level components such as compute instances, storage, and networking, as well as high-level components such as DNS entries, SaaS features, etc.
* **Key features**:
  - Infrastructure as Code
  - Execution plans: Terraform has a "planning" step where it generates an execution plan. 
  - Resource Graph
  - Change automation
* Terraform vs other software
  - Terraform is not mutually exclusive with other systems. It can be used to manage a single application, or the entire datacenter.
  - 
