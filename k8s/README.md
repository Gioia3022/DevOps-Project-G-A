# Kubernetes

## Setup

Start Minikube with:

```sh
minikube start
```

Verify that everything is OK with:

```sh
minikube status
```

For more uses of minikube run:

```sh
minikube --help
```

Go to the "k8s/" folder after cloning the current Git repository.

## Usage

#### Create the different kubernetes components

```sh
kubectl apply -f pv.yaml
kubectl apply -f pv-claim.yaml
kubectl apply -f redis.yaml
kubectl apply -f config-map.yaml
kubectl apply -f deployment.yaml
```

#### Wait until all pods are running

You can run this command to see the evolution: 

```sh
kubectl get pod --watch
```

To quit `crtl+C`

#### Launch your app through minikub

```sh
minikube service projet-devops-service
```

#### more information

Look [userapi](../userapi/README.md)

# Authors
GALIAZZO Gioia Mariasole & ABDELKEFI Abdelaziz