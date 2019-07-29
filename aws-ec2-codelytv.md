# AWS: your first deploy to EC2

* https://pro.codely.tv/library/aws-deploy-en-ec2/62577/path/
* Trainer: 
    - https://pro.codely.tv/library/by/author/jose-armesto/
    - @fiunchinho
    
    
## General information
* **Regions** are totally independent: a region is a collection of regional Data Centers.
* **VPC**: Virtual Private Cloud
  - Inside the VPCs we can have **subnets**.
  - We assign different subnets to different **availability zones** (an AZ are different Data Centers inside the same region).
* If I want to put an instance in the AZ A, I will have to tell AWS to use the subnet where that AZ is configured.
* We can create several **subnets** in the same AZ, for example for having public vs private subnets (e.g. for having the database in the private subnet, so that it can only be accessed from my own subnets).
* I can also have different VPCs for different environments in my company: a VPC for Production, another one for Staging, etc.
    - It gives also safety, the Staging servers in VPC A can not access the Production servers in VPC B.
* **AMI: Amazon Machine Image**
    - https://aws.amazon.com/marketplace
    - Amazon Linux is a CentOS modified by Amazon: maybe better with plain Ubuntu or CentOS. The repos are different for Amazon Linux and for the "standard" ones. Another reason for not using it is thinking about migrating to another vendor.
* https://ec2instances.info/   
    * T2: 
        - based on *credits*, it can raise the capacity if there is more load. I am given by default a certain amount of credits by Amazon.
        - you loose 1 credit if you have 100% CPU for 1 minute
        - when you run out of credits, the performance of the instance goes back to the initial one.
    * M3: general purpose
    * Rx: memory requirements
    * Cx: CPU requirements
    
    
## Interesting links
* Open source load testing tool: https://locust.io/    
