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
* We can create several subnets in the same AZ, for example for having public vs private subnets (e.g. for having the database in the private subnet, so that it can only be accessed from my own subnets).
