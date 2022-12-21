# DevOps Project

This project allows us to put everything we've learned since the beginning of the year to use.

> [DevOps Assignment](https://github.com/adaltas/ece-devops-2022-fall/blob/main/project/instructions.md)

## Screenshots
- [Images of the progress made](/images)

## Instructions

### Install

- Clone repository
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

- Install [redis](https://vitux.com/install-redis-on-ubuntu/#:~:text=Installing%20Redis%20on%20Ubuntu%2020.04.%201%20Step%20%23,Check%20the%20Status%20of%20the%20Redis%20Service%3A%20) and [npm](https://phoenixnap.com/kb/install-latest-node-js-and-nmp-on-ubuntu#:~:text=1%20Type%20the%20command%3A%20sudo%20apt%20update%202,apt%20install%20npm%205%20Verify%20the%20installed%20version%3A)
- [Install Vagrant](iac/README.md#prerequisite)
- [Install Docker](https://www.docker.com/get-started)

### Usage

- [Start userapi](./userapi/README.md#usage)

- [Use Vagrant](iac/README.md#usage)

- In order to use Docker:
In a first moment we build an image

```sh
docker build -t gioia3022/project_devops_g_a .
```

Then we use

```sh
docker-compose up
```

and finally we call the server on http://localhost:5000

### Test

- [Test userapi](./userapi/README.md#testing)

## Platforms & Tools

- [Node.js](https://nodejs.org/en/)
- [Github Action](https://github.com/Gioia3022/DevOps-Project-G-A/actions)
- [Azure](https://portal.azure.com/#home)
- [Vagrant](https://www.vagrantup.com/)
    - [Ansible](https://docs.ansible.com/ansible/latest/index.html)
- [Docker Hub](https://hub.docker.com)

## Authors

GALIAZZO Gioia Mariasole & ABDELKEFI Abdelaziz
