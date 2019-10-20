# Kubernetes for developers
Training course from [Codely.tv](https://pro.codely.tv/library/kubernetes-para-desarrolladores)

## General information
* K8s is a REST API
* **kubectl** is a CLI for that REST API
  - `kubectl get nodes`
  - `kubectl cluster-info`
* You declare the expected state, and then, in an async way, the **reconciliation loop** gets eventually to that state.
* K8s decides how to better use the existing resources of all the nodes (CPU, memory, disk, etc.)
* `kubectl version --client` (use `--client` for not showing error if no K8s cluster is up and running.
* **Minikube**: https://kubernetes.io/docs/tutorials/hello-minikube/
  - `minikube start --memory 4096` 
  - `minikube status`
  - `minikube ip`
* Example of app deployed in minikube:
  - `kubectl run hello-world --image=fiunchinho/codely-docker:latest --port=80`
  - `kubectl port-forward deployment/hello-world 8000:80` , we need this command to expose the port to the host
  - you can access it in http://localhost:8000 and see `Hello CodelyTV!`
* Run `eval $(minikube docker-env)` to be able to use the Docker command from minikube
* *kube-proxy* for load balancing
* A k8s cluster will have several nodes. A node is an instance, a machine, a server where pods will be allocated.

## Pods
* It's the minimum unit of execution.
* Several containers can run in a *pod*.
* Usually, 1 *pod* = 1 app
* A *pod* gets one IP (all the containers in the same *pod* are reachable through the same IP). It is an internal IP.
* Everything inside a *pod* belongs to a same cgroup, and they sare the same *namespace*.
* Pods are ephymeral, they have a name.
* A *service* is a group of pods
* Probes
  - *liveness*: healthy
  - *readiness*: ready to service requests
* `kubectl run hello-world --image=fiunchinho/codely-docker:latest --restart=Never --port=80 --dry-run -o yaml > pod.yaml`: this is a **generator**, it generates an object in K8s, a *Pod*.
* `kubectl create -f pod.yaml`: create the object (pod) defined in `pod.yaml`
  * Inside the `pod.yaml`, we define the docker image to use, resources, etc.
* `kubectl describe pod hello-world`
* `kubectl delete pod hello-world`
* `kubectl edit pod hello-world`: we can change the pod configuration (e.g. the required resources).


## Namespaces
* Virtual clusters inside a physical cluster
* resource names can be duplicated in different namespaces
* it allows fine-grained resource usage (quotas) and authorization (access control)

## Pod resources
* Inside the pod.yaml, we define which resources require my application: cpu and memory for
  * Requests: the pod will be allocated in a node with AT LEAST these amound of resources.
  * Limits: max resources that a pod is allowed to consume (k8s would kill the container if it is exceeded).

## Health checks
* **Liveness probe**
  * Typical health check. If it fails, k8s will restart the container (everything configurable).
* **Readiness probe**
  * The pod is not only up and running, but ready to receive requests, everything is healthy and correct.


## Kubernetes Service Discovery
* Sending requests to apps running inside the cluster.
* A pod gets a dynamic IP, which changes each time it gets recreated. But a **service** can have a more stable IP to abstract a set of pods.
* We can send then the requests to the service.
* When a service is created, the **Endpoint Controller** (which is another reconciliation loop), creates an **Endpoint** object that will contain the IPs of the pods which are answering requests correctly. The endpoints have a list of all the alive and healthy pods. It is a kind of load balancer.
* The pods to be included in a service depends on having a specific **tag**: you define that in the selector of the service definition.
* You create a `service.yaml` to define the service object.
* Service types:
  * ClusterIP: the service gets assigned an IP which is purely internal (though stable). It wouldn't be accessible from the outside.
  * NodePort: besides being assigned an IP, the pod port will be accessible.
  * LoadBalancer: besides the IP and port, if you are in a cloud provider, it requests that cloud provider to create a load balancer (which will have a DNS address which is publicly accesible).
* `kubectl expose pod/hello-world --port 80`: it creates a service object.
  * `kubectl expose pod/hello-world --port 80 --dry-run -o yaml`: it would generate the file with the service object definition.
* `kubectl get svc`: to list the existing services.
* `kubectl run --rm -i --tty my-client-app --image=alpine --restart=Never -- sh` and then, from inside, you can make a request to the service, e.g. `wget hello-world/index.php -qS0`

## Interesting links
* [Kubernetes: the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way)
* https://platform9.com/blog/kubernetes-vs-ecs/
* https://github.com/praqma-training/kubernetes-katas
* https://github.com/vmware/octant
* Alternatives to minikube:
  - https://microk8s.io
  - https://github.com/kubernetes-sigs/kind
* https://github.com/fiunchinho/k8s-playground  
