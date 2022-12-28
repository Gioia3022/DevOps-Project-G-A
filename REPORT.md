# DevOps Report

## Web Application

We created a web application that uses a [CRUD API](/userapi/src). It allows us to create, read, update and delete users.

![App Launch](/images/CI_CD/app%20launch.jpg)
![WebApp](/images/CI_CD/Webapp.jpg)

We used many different types of tests as well as health checks for Vagrant.

![App Test](/images/CI_CD/app%20test.jpg)

We also configured and deployed a CI/CD pipeline using GitHub Action and Azure.

![GitAction](/images/CI_CD/workflows_1.jpg)
![Azure HP](/images/CI_CD/azure%20home.jpg)
![Azure Run](/images/CI_CD/Azure_overview.jpg)

We worked through the different errors and managed to deploy our webapp

![Az. Dep](/images/CI_CD/Deployment_Azure.jpg)
![Az. Test](/images/CI_CD/Deployment%20Azure%202.jpg)

## Vagrant

The installation of Vagrant and Ansible was simple. Moreover, the connection to redis was done without problems.

![V.Dep](/images/Vagrant/vagrant%20deployments.png)
![V.Exe](/images/Vagrant/vagrant.exe%20up.png)
![V.Connection](/images/Vagrant/vagrantConnectionRedis.png)

## Docker Image and Docker Compose

We created a docker image to work with Also, as a bonus task, we pushed it to docker hub.

![Docker Image](/images/Docker/docker%20repository.jpg)
![Docker Hub](/images/Docker/docker%20hub.jpg)

We also composed the file and connected it with the app.

![Docker Compose](/images/Docker/docker%20image.jpg)
![Docker Dep](/images/Docker/Deployment%20Docker.jpg)

## Kubernetes

While working with Kubernetes we managed to link the persistent volume with its claim and to attach the Persistent Volume Claim to Redis.

We also used Config maps to manage the app deployment and the environnement variables.

![K. ConfigMaps](/images/k8s/k8s-config-maps.png)

We can see here that everything is running smoothly and that the cluster is correctly connected to the browser as well as to Redis.

![K. Run](/images/k8s/k8s-pods_running.png)
![K. Cluster](/images/k8s/k8s-connection-cluster.png)
![K. Connection](/images/k8s/k8s-%20Connection.png)
![K. Connection2](/images/k8s/k8s-connection_successful.png)
