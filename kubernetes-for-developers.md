# Kubernetes for developers
- Training course from [Codely.tv](https://pro.codely.tv/library/kubernetes-para-desarrolladores)
- Another AMAZING resource for learning the basics, from CNCF: https://www.cncf.io/phippy/
- Learning resources which look great as well: https://kube.academy/

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
* To delete all pods: `kubectl delete --all pods`
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
* **Startup probe**
  * Protect slow starting containers with startup probes
  * https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes


## Kubernetes Service Discovery
* Sending requests to apps running inside the cluster.
* A pod gets a dynamic IP, which changes each time it gets recreated. But a **service** can have a more stable IP to abstract a set of pods.
* We can send then the requests to the service.
* When a service is created, the **Endpoint Controller** (which is another reconciliation loop), creates an **Endpoint** object that will contain the IPs of the pods which are answering requests correctly. The endpoints have a list of all the alive and healthy pods. It is a kind of load balancer.
* The pods to be included in a service depends on having a specific **tag**: you define that in the selector of the service definition.
* You create a `service.yaml` to define the service object.
* Service types:
  * ClusterIP: the service gets assigned an IP which is purely internal (though stable). It wouldn't be accessible from the outside.
  * NodePort: besides being assigned an IP, the pod port will be accessible from the outside.
  * LoadBalancer: besides the IP and port, if you are in a cloud provider, it requests that cloud provider to create a load balancer (which will have a DNS address which is publicly accesible).
* `kubectl expose pod/hello-world --port 80`: it creates a service object.
  * `kubectl expose pod/hello-world --port 80 --dry-run -o yaml`: it would generate the file with the service object definition.
* `kubectl get svc`: to list the existing services.
* `kubectl run --rm -i --tty my-client-app --image=alpine --restart=Never -- sh` and then, from inside, you can make a request to the service, e.g. `wget hello-world/index.php -qS0`


## Kubernetes Deployments
* **Pods** are tied to the node lifecycle. If the node disappears, the Pod will disappear with it. We usually do not create Pods manually.
* **Deployments** are objects that we can create to be sure that the Pod stays alive, even when its cluster node fails (thanks to a reconciliation loop).
* I can specify how many **replicas** I want of my Pod, and k8s assures that there will always be that number of replicas running.
* To create a `deployment.yaml` using a generator: `kubectl run hello-world --image=fiunchinho/codely-docker:latest --port=80 --restart=Always --dry-run -o yaml > deployment.yaml`
    * The difference with the generator to create a pod, is that the restart now is `Always` instead of `Never`. Not configuring that flag would do the same.
    * The name of the pod generated my k8s in this case, will contain a suffix.
* `kubectl get deployments,pods` to list both the deployments and the pods.
    * Their alternatives with sort names: `kubectl get deploy,pod`
* To change the numer of replicas:
    * Option 1: `kubectl edit deploy hello-world`
    * Option 2: `kubectl scale deployments hello-world --replicas=3`
* `kubectl expose pod/hello-world --port 80 --type=NodePort`: to create a service of type `NodePort`, so that we can send requests to minikube.

## Define Ingress rules
* To send traffic to our application, we use the object Service, with type ClusterIP, NodePort, etc.
    * The type `ClusterIP` has IPs which are only accessible from inside the cluster.
* An **Ingress* is a collection of rules that describe how to forward requests from outside of the cluster to the `Service` objects.
* **Ingress Controller**: it controls the Ingress rules, it watches them to apply them. There are lots of different implementations, one of the most famous is [the one from nginx](https://github.com/kubernetes/ingress-nginx). It would convert the Ingress rule to code for nginx.
* `minikube addons list`
* `minikube addons enable ingress`
* There is no ingress generator, so we create manually an `ingress.yaml`.
* `kubectl describe ingress hello-world`
* `kubectl get ingress`
    * To try it: edit `/etc/hosts` to add a line like: `<minikube-ip> codely-k8s.com`
    * `curl -i codely-8ks.com` should use the ingress rule and return 200.
* How do we do it for Production?: 
    * we have a DNS pointing to a Load Balancer, behind which is our k8s cluster.
    * We need to deploy an ingress controller, e.g. HAProxy or nginx.
    * We create a **default backend**, a pod which always returns 404, for the case where no ingress rule matches.

## Configuration and secrets for our apps
* You can define environment variables in the pod.yaml, e.g. `pod-env.yaml`
* But the goal is to define the configuration in different files, to be able
* `ConfigMap`: to store configuration values in a key:value format.
* `Secrets` are like ConfigMaps but for sensitive data. The value is stored codified using base64.
* To generate a configmap: `kubectl create configmap special-config --from-literal=example.property=hello --from-literal=example.property2=world`
* `kubectl get configmaps`
* `kubectl get configmaps special-config -o yaml`: to show the yaml corresponding to that configmap
    * Same: `kubectl get cm special-config -o yaml`
* `kubectl edit configmap special-config`: to edit the configuration
* Always use String values.
* We can access the values of ConfigMaps in different ways:
    * Passing it to the application as environment variables.
    * Including each key in a different file inside the container.
    * Passing it to the application via command line.
* We create `pod-config-env.yaml`: instead of hardcoding the value of the env vars, we reference the configmap keys.
    * `kubectl create -f pod-config-env.yaml`
    * Running `kubectl describe pod hello-world` we can see the environment variables configured (under `Environment`).
    * `kubectl exec -ti hello-world -- /bin/bash` to get inside the pod and check the environment variables.
* Another way to consume the ConfigMaps is to load it as files inside the container
    * `pod-config-volume.yaml`
    * Generate a configmap containing the file `nginx.conf`: `kubectl create configmap nginx-conf --from-file nginx.conf`
    * You can see it like this: `kubectl get configmaps nginx-conf -o yaml`

### Secrets
* In order to store secrets, k8s uses a volume type called `secret`.
* The secrets are stored in temporal volumes `tmpfs` and it is never written in the node disks.
* Each element of the secret is stored in a different file, under the mount point specified in the volume.
* See example in `pod-secret-env.yaml`
* To generate a secret: `kubectl create secret generic test-secret --from-literal=username='islomar' --from-literal=password='1234'`
* List all secrets: `kubectl get secrets`
* `kubectl get secret test-secret -o yaml`
* The values are encoded in base64, not really encrypted.
* Decode the secrets to check that is correct: `echo aXNsb21hcg== | base64 -D`
* Some examples:
    * `pod-secret-envFrom.yaml`
    * `pod-secret-volume.yaml`

## Deploying a k8s cluster in the cloud
* How does kubectl know where is minikube?
    * kubectl has a config file where it is configured where the k8s cluster is.
    * By default, there is nothing there. When we install minikube, it changes that config file and it includes itself there.
* `$HOME/.kube/config`
* We can see the content of the file with `kubectl config view`
    * Inside the file you can have several contexts defined, e.g. minikube, AWS, etc.
* To change the context: `kubectl config set-context <yourContextName>`
* Comparison of k8s services in different cloud providers: https://kubedex.com/google-gke-vs-microsoft-aks-vs-amazon-eks/
    * Google GKE seems to be the best.

### Microsoft Azure
* To include in the prompt the context where you are: https://github.com/jonmosco/kube-ps1
* https://pro.codely.tv/library/kubernetes-para-desarrolladores/81666/path/step/50648458/
* `az login`
* `az aks install-cli`
* https://docs.microsoft.com/es-es/azure/aks/kubernetes-walkthrough
    * https://shell.azure.com/
* https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html
* Create the cluster in the default region
* To include in the kube config file azure, run: `az aks get-credentials --resource-group codely --name codelypro-k8s`
* `az aks create --resource-group codely --name codelypro-k8s --node-count 1 --enable-addons monitoring --generate-ssh-keys`
* `terraform import azurerm_azuread_service_principal.example`
* Once you are in the context of Azure:
    * `kubectl run hello-world --image=fiunchinho/codely-docker:latest --port=80`
    * You can check that it was created correctly: `kubectl get deploy,pod`
    * `kubectl expose deployment/hello-world --port 80 --type=LoadBalancer`, since by default the IPs created are private
    * Using the public IP of the service just created, you can make a request and see "Hello CodelyTV"
    * `kubectl scale deployments hello-world --replicas=3`


## Interesting links
* [Kubernetes: the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way)
* https://platform9.com/blog/kubernetes-vs-ecs/
* https://github.com/praqma-training/kubernetes-katas
* https://github.com/vmware/octant
* Alternatives to minikube:
  - https://microk8s.io
  - https://github.com/kubernetes-sigs/kind
* https://github.com/fiunchinho/k8s-playground  
* [Kubernetes ingress as reverse proxy to Application running outside cluster](https://medium.com/linux-shots/kubernetes-ingress-as-reverse-proxy-to-application-running-outside-cluster-206b6003f9cb)
