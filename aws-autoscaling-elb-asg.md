# Notes for course "AWS: autoscaling applications with ELB and ASG"

* Use of `dig`: https://rm-rf.es/como-usar-el-comando-dig-ejemplos/
* The load balancer can have two different schemes:
  - public: **internet-facing**, it gets a public IP.
  - **internal**: it will only receive requests from the same VPC. The DNS assigned to the balancer resolves to a private IP.
