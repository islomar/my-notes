# Notes for course "AWS: autoscaling applications with ELB and ASG"

* Ping PHP: https://gist.github.com/fiunchinho/2ee6013ce85a05f2b60a08c415973a12
* Use of `dig`: https://rm-rf.es/como-usar-el-comando-dig-ejemplos/
* The load balancer can have two different schemes:
  - public: **internet-facing**, it gets a public IP.
  - **internal**: it will only receive requests from the same VPC. The DNS assigned to the balancer resolves to a private IP.

* Configure a Security Group for the balancer: allowing HTTP inbound traffic from anywhere.
* Then, the EC2 instance with the app, should have a SG with an inbound rule to allow traffic from the SG assigned to the balancer.
* We can create three different type of balancers:
  - **Application Load Balancer**: for HTTP(S). We can use HTTP concepts (URL path, host), in order to define how you want the LB to balance the load.
    - If you choose HTTPS, you need to configure a certificate: you can have them for free from *Let's encrypt* and also from Amazon (ACM: AWS Certificate Manager).
  - **Network Load Balancer**: for TCP traffic, e.g. for sending logs to several Logstash instances.
  - Classic Load Balancer: old balancer, not recommended. For HTTP(S) and TCP. Only to be used if we have very old EC2 instances, when VPC didn't even exist.
* Configure:
  - a Security Group for the Load Balancer.
  - **Target Groups**: you define the group of EC2 instances than can receive the traffic from the LB.
  - **Listeners**: the ports where the LB will be listening to receive requests.
  - **Health check**: the path of the target group where, periodically, the LB will make a request to see if the EC2 instances are still alive.
    - **Advanced health check settings**: healthy/unhealthy threshold (how many times the LB should receive an answer from an instace in order to consider it healthy/unhealthy), timeout, interval, HTTP success status code 
    - Other possible states for the instance: **draining** (the instance is deregistering from the ELB and is getting freed  from connections)
  - **Register targets**: you select the EC2 instances that you want to be a part of the target group.
* A LB does not send traffic to a new instance until having checked that it is healthy (it answers).   
* **LB access logs**: 
  - https://docs.aws.amazon.com/es_es/elasticloadbalancing/latest/application/load-balancer-access-logs.html
  - The access register is disabled by default. You only pay for the S3 storage.
* We can configure **two different target groups** for a load balancer: e.g. to discriminate depending on the path (e.g. `/pong`) or the host (e.g. for subdomains).
  - You can not do in creation time, only afterwards, edith the rule.
* **Auto Scaling Group**: we tell it how many instances we want, and the ASG will manage them. If configure 3 instances for the ASG, it will keep always 3 up and running.
  - In order to create an ASG, we need to create a **Launch Configuration**: a template to define how we want that the ASG starts new instances (e.g. AMI to use, SG, keys, etc.)
  - You can define that there will be an ELB in front of the ASG, and assign a Target Group: each time an instance is started in this ASG, it will belong to that TG, and so the ELB will dispatch requests to it.
  - **Scaling policies**: I configure the ASG to react to some events, e.g. to add more instances if there is a lot of traffic, or downgrade the number of instances at night.
    - You define the minimum and maximum number of instances.
* ALB - Target Groupt - ASG - EC2 instances


## Doubts
* What is the algorithm for balancing? Pure round-robin?
* Is it possible to configure an algorithm base on CPU-Memory consumption?
