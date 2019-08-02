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
  - https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/
    - VPCs are always per account
    - VPC Peering for connecting different VPCs.
    - When there are tones of VPCs to connect: [VPC Transit Gateway](https://aws.amazon.com/transit-gateway/)
    - **VPC Sharing** allows customers to share subnets with other AWS accounts within the same AWS Organization. Essentially, we can now decouple accounts and networks.
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


## SSH
* User/password should be disable, and use SSH public/private key.
    - https://linuxcode.wordpress.com/2009/08/08/autentificacion-mediante-claves-publicas-en-ssh/
* AWS Console >> Network & Security >> Key Pair
* I configure AWS with my public key, and Amazon will put it in the servers when instantiating them.


## Security groups
* [CIDR](https://blog.soporteti.net/que-es-el-cidr-subnetting-o-subneteo-parte-3/)

 
##  AWS multi-account
* https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/
    - While AWS accounts are not technically hierarchical, you can use **organizational units (OUs)** with **AWS Organizations** to create hierarchical and logical groupings to better manage accounts. Note that there is a soft limit of 20 accounts per organization.
        - https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html
* https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/
* [AWS Organisations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)
    - AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. 
  
  
## Interesting links or tricks
* Open source load testing tool: https://locust.io/    
* `cat xxx | pbcopy`, for copying to the
