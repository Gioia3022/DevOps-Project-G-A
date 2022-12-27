# DevOps Project

This project allows us to put everything we've learned since the beginning of the year to use.

# Summury
- [Assignment](#1-Assignment-)
- [Run the Application](#2-Run-the-Application-)
- [CI/CD](#3-CI/CD-)
- [IaC](#4-IaC-)
- [Docker and Docker compose](#5-docker-and-docker-compose-)
- [Kubernetes](#6-Kubernetes-)
- [Istio and monitoring](#7-Istio-and-monitoring-)
- [Bonus :](#8-Bonus-)
- [Images](Screenshots)
- [Platforms & Tools](Platforms-&-Tools)

## 1. Assignment :

The goal of this project is to combine all the tools used in class into a single project. It will draw attention to a CRUD application.
The project requires building a web application using any programming language, collecting information in a database, and then testing it at various levels.
We choose to program our web application in javaScript.

### Link to the assignment and grading system


> [DevOps Assignment](https://github.com/adaltas/ece-devops-2022-fall/blob/main/project/instructions.md)

| Subject                                                         |   Code    | Max. grade|
|:----------------------------------------------------------------|:---------:|:---------:|
| Enriched web application with automated tests                   |   APP     |    +1     |
| Continuous Integration and Continuous Delivery (and Deployment) |   CICD    |    +3     |
| Containerisation with Docker                                    |   D       |    +1     |
| Orchestration with Docker Compose                               |   DC      |    +2     |
| Orchestration with Kubernetes	                                  |   KUB     |    +3     |
| Service mesh using Istio                                        |   IST     |    +2     |
| Infrastructure as code using Ansible                            |   IAC     |    +3     |
| Monitoring                                                      |   MON     |    +2     |
| Accurate project documentation in README.md file                |   DOC     |    +3     |
| Each bonus task                                                 |   BNS     |    +1     |
| Each penalty                                                    |   PNL     |    -1     |

## 2. Run the Application :
#### 2.1 Installation

* Clone repository
    ```sh
    # https
    git clone https://github.com/Gioia3022/DevOps-Project-G-A.git
    ```
    ```sh
    # ssh
    git clone git@github.com:Gioia3022/DevOps-Project-G-A.git
    ```
    ```sh
    # github CLI
    gh repo clone Gioia3022/DevOps-Project-G-A
    ```

* Make you have a source-code editor
* Install [redis](https://vitux.com/install-redis-on-ubuntu/#:~:text=Installing%20Redis%20on%20Ubuntu%2020.04.%201%20Step%20%23,Check%20the%20Status%20of%20the%20Redis%20Service%3A%20) and [NodeJS](https://phoenixnap.com/kb/install-latest-node-js-and-nmp-on-ubuntu#:~:text=1%20Type%20the%20command%3A%20sudo%20apt%20update%202,apt%20install%20npm%205%20Verify%20the%20installed%20version%3A)
* Install [Vagrant](iac/README.md#prerequisite)
* Install [Docker](https://www.docker.com/get-started)

## 3. CI/CD :

#### 3.1 User API web application

It is a straightforward REST API-exposed NodeJS web application that produces and saves user parameters in a [Redis database](https://redis.io/).

You can find the instructions on how to start the user API here: [Start userapi](./userapi/README.md#Usage)

#### 3.2 User API testing

If you need to test the application follow the instructions in [Test userapi](./userapi/README.md#testing).

#### 3.3 CI/CD with GitHub Action as well as Azure
Every time we pushed, GitHub Action has tested our application using the unit tests we'll cover shortly, and in case of failure, it prevented deployment. If the deployement was succesfull we then tryed to deploy the app on Azure. As presented in our report both the building and deployment were succesfull.

## 4. IaC :
The IaC (Infrastructure as Code) aspect entails virtualizing the application with a virtual machine utilizing Vagrant and Ansible in order to implement the application's numerous features.

#### 4.1 Installation
To run the virtual machine, ensure that [Vagrant](https://www.vagrantup.com/), [Ansible](https://docs.ansible.com/ansible/latest/index.html), and [Virtualbox](https://www.virtualbox.org/wiki/Downloads) are installed.

#### 4.2 Usage
To setup the virtual machine check up the following commands : [Use Vagrant](iac/README.md#usage)

Ansible was used during setup to supply all of our provisions, including the language runtime, the database, and the application.

## 5. Docker and Docker compose :

* In order to use [Docker](https://docs.docker.com/get-docker/) make sure you installed it.

#### 5.1 Usage

In a first moment we build an image

```sh
docker build -t gioia3022/project_devops_g_a .
```

Then we use

```sh
docker run -p 5000:3000 gioia3022/project_devops_g_a
```

Or we use docker compose that was created to make it easier to define and distribute multi-container applications.

```sh
docker-compose up
```

and finally we call the server on http://localhost:5000

## 6. Kubernetes :

The term "Kubernetes" refers to a collection of building components that together offer methods for the deployment, upkeep, and scalability of applications depending on CPU, memory, or other configurable metrics. Due to its extensibility and low coupling, Kubernetes can handle a variety of workloads.

#### 6.1 Installation

[Install Minikube](https://minikube.sigs.k8s.io/docs/start/)

#### 6.2 Usage

To start Kubernetes check up the following commands : [Use Kubernetes](k8s/README.md#setup)

## 7. Istio and monitoring :

On one hand Istio is a flexible, open source service-mesh layer that links, watches over, and protects the containers in a Kubernetes cluster. Istio only functions natively with Kubernetes as of this writing, however because to its open source nature, anybody may create extensions that allow it to function with any cluster software.

On the other hand Prometheus is a system and service monitoring solution that is being developed by the Cloud Native Computing Foundation. It gathers metrics from configured targets at predetermined intervals, assesses rule expressions, presents the findings, and has the ability to raise alerts if a certain condition is seen to be true.

Whereas Grafana is an open-source platform for data monitoring, analysis, and visualization. This application is used by our corporation alongside Graylog to keep track of the technical health of the software systems we create for our clients or use internally. Users of Grafana may build dashboards with panels that each reflect certain metrics over a predetermined period of time.

#### 7.1 Istio Installation

To install [Istio](https://ubuntu.com/tutorials/install-istio-on-charmed-distribution-of-kubernetes#1-overview)

#### 7.2 Istio Usage

Unfortunatly everytime we tried downloading Istio it made crash our linux operating system therefor we were not able to do this part.

#### 7.3 Prometheus and/or Grafana Installation

```sh
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.12/samples/addons/prometheus.yaml
```

```sh
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.12/samples/addons/grafana.yaml
```

#### 7.4 Prometheus and/or Grafana Usage

Since we were not able to install Istio it was not possible to do the monitoring the otherwise comand would have been the following:

Either:

```sh
kubectl port-forward svc/prometheus -n istio-system 9090
```

Or:

```sh
kubectl port-forward svc/grafana -n istio-system 9090
```

Then we shoud go to the following address: 127.0.0.1/9090

## 7. Bonus :

We added the following features:

#### User API

- We made user API a CRUD API which implies that it's able to perform the CRUD operation: Create, Read, Update and Delete.

- We also added many more test to our webapp

- Since Redis database provides outstanding speed, scalability, is simple to use and is also open source we decided to use it instead of other databases.

#### Kubernetes

- We also added ConfigMap. This allows us to store data as key-value pairs therefor it can be used by Kubernetes pods as command-line arguments, environment variables, or configuration files.

## Screenshots

- [Images of the progress made](/images)

## Platforms & Tools

- [Node.js](https://nodejs.org/en/)
- [Github Action](https://github.com/Gioia3022/DevOps-Project-G-A/actions)
- [Azure](https://portal.azure.com/#home)
- [Vagrant](https://www.vagrantup.com/)
    - [Ansible](https://docs.ansible.com/ansible/latest/index.html)
- [Docker Hub](https://hub.docker.com)

## Authors

GALIAZZO Gioia Mariasole & ABDELKEFI Abdelaziz
