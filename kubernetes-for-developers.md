# Kubernetes for developers
Training course from [Codely.tv](https://pro.codely.tv/library/kubernetes-para-desarrolladores)

## General information
* K8s is a REST API
* **kubectl** is a CLI for that REST API
  - `kubectl get nodes`
  - `kubectl cluster-info`
* You declare the expected state, and then, in an async way, the **reconciliation loop** gets eventually to that state.
* K8s decides how to better use the existing resources (CPU, memory, disk, etc.)
* `kubectl version --client` (use `--client` for not showing error if no K8s cluster is up and running.
* **Minikube**: https://kubernetes.io/docs/tutorials/hello-minikube/
  - `minikube start --memory 4096` 
  - `minikube status`
  - `minikube ip`
* Example of app deployed in minikube:
  - `kubectl run hello-world --image=fiunchinho/codely-docker:latest --port=80`
  - `kubectl port-forward deployment/hello-world 8000:80` , we need this command to expose the port to the host
* Run `eval $(minikube docker-env)` to be able to use the Docker command from minikube

## Pods
* It's the minimum unit of execution.
* Several containers can run in a *pod*.
* Usually, 1 *pod* = 1 app
* A *pod* gets one IP (all the containers in the same *pod* are reachable through the same IP). It is an internal IP.
* Everything inside a *pod* belongs to a same cgroup, and they sare the same *namespace*.

## Interesting links
* [Kubernetes: the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way)
