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
    - [Public key cryptography - Diffie-Hellman Key Exchange](https://www.youtube.com/watch?v=YEBfamv-_do)
        - Exchange of `<generator> mod <prime_modulus>`, being a huge prime modulus (prime because it has the property of generating equally distributed values). Alice and Bob get each a private random number as the power (generator ^ random_power) and sends the result publicly to the other one. And then, the other part calculates the power again, usin as a base the result received. They both will get the same value, which is used as the secret.
    * `sshd_config` file with `PasswordAuthentication no` and `PermitRootLogin no`
* AWS Console >> Network & Security >> Key Pair
* I configure AWS with my public key, and Amazon will put it in the servers when instantiating them.
* The public key goes into `~/.ssh/authorized_keys`


## Security Groups (SG)
* [CIDR](https://blog.soporteti.net/que-es-el-cidr-subnetting-o-subneteo-parte-3/)
* To define who can access or not to a AWS instance.
* It is a firewall.
* It is in EC2 and VPC.
* Like IPtables, but here the rules are only for ALLOWING inbound/outbound traffic: if a rule does not appear, it is not allowed.
* A SG is always associated to a VPC.
* You can configure as origin/destination either a CIDR or another SG identifier.
* EC2 instances have dynamic IPs. AWS has a feature called Elastic IP's, which allows to reserve fixed IP addresses and assign them to the instances.
* You can assign several SG to an instance.

 
##  AWS multi-account
* https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/
    - While AWS accounts are not technically hierarchical, you can use **organizational units (OUs)** with **AWS Organizations** to create hierarchical and logical groupings to better manage accounts. Note that there is a soft limit of 20 accounts per organization.
        - https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html
* https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/
* [AWS Organisations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)
    - AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. 


## Create EC2 instance
* Add a tag with key "Name".
* `User data` configuration: it will be executed only the first time
* Whatever you put in `/etc/rc.local` gets executed each time the machine restarts


## Configure the domain with Route53
* https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio#Tipos_de_registros_DNS
    - A, AAA, CNAME, NS, etc.
    - `A`:  IPv4 addresss. We configure that, in order to resolve a domain name, it should use a specific IP.
    - `CNAME` contains another DNS server to ask about.
* https://howdns.works/ep1/
* We can register domain directly from Amazon.
* You can manage the domains from Amazon, even if you didn't register it there. You have to configure the DNS type NameServers (NS) 
* Hosted zone: a group of rules associated to a domain.
* From a hosted zone, you can create several *Record Set* = DNS register.
* `dig <domain_name>` to get the IP address for a domain

  
## Interesting links or tricks
* Open source load testing tool: https://locust.io/    
* `cat xxx | pbcopy`, for copying to the clipboard
* `shred -v  --remove id_rsa.pub` for securely delete a file: https://www.computerhope.com/unix/shred.htm


## To review at the company
* EC2 config? e.g. `tenancy`
