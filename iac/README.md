# Vagrant

## Prerequisite

- Virtual Machine Manager
If none, you can install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

## Install

1. Install [Vagrant](https://www.vagrantup.com/downloads.html)

2. (Optional) **On Windows**, ensure that Hyper-V is disabled:
    - Open a new **PowerShell**
    - Run the following C
    command:
    ```sh
    Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All
    ```
3. Access the `iac/` folder by cloning the current Git repository.

## Usage
1. Establish a virtual machine and execute the following command:
```sh
vagrant up
```
Once the command has executed, you may open the URL in your browser - http://192.168.56.2:3000/

2. Shutdown the VM
```sh
vagrant halt
```

3. Delete th VM
```sh
vagrant destroy
```

## Authors
GALIAZZO Gioia & ABDELKEFI Abdelaziz