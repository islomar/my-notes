# Kubernetes for developers
Training course from [Codely.tv](https://pro.codely.tv/library/kubernetes-para-desarrolladores)

## General information
* K8s is a REST API
* **kubectl** is a CLI for that REST API
  - `kubectl get nodes`
* You declare the expected state, and then, in an async way, the **reconciliation loop** gets eventually to that state.
* K8s decides how to better use the existing resources (CPU, memory, disk, etc.)
* `kubectl version --client` (use `--client` for not showing error if no K8s cluster is up and running.
* **Minikube**: https://kubernetes.io/docs/tutorials/hello-minikube/
  - `minikube start --memory 4096` 
  - `minikube status`
  - `minikube ip`


## Interesting links
* [Kubernetes: the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way)
