# Vagrant

## Prerequisite

- Virtual Machine Manager
If you don't have any can install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

## Install

1. [Install Vagrant](https://www.vagrantup.com/downloads.html)

2. (Optional) **On Windows**, ensure that Hyper-V is disabled:
    - Open a new **PowerShell**
    - Run the following C
    command:
    ```sh
    Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All
    ```
3. Clone the current Git repository and go to `iac/` folder.

## Usage
1. Create a virtual machine. Run the command:
```sh
vagrant up
```
Once command is finished tou can open in your browser the URL - http://192.168.56.2:3000/

2. Shutdown the VM
```sh
vagrant halt
```

3. Delete th VM
```sh
vagrant destroy
```

## Authors
Paul SADE & Mathis CAMARD