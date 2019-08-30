# Kubernetes Academy
https://kubernetes.academy


## Anatomy of a container
* https://kubernetes.academy/lessons/anatomy-of-a-container
* There are 7 [namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)
* [nsenter](http://man7.org/linux/man-pages/man1/nsenter.1.html): to run a program with namespaces of other processes
* cgroup
  - `/proc/<pid>/cgroup`
  - `/sys/fs/cgroup/memory/docker/<containerId>/memory.limit_in_bytes`
