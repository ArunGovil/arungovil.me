---
title: "Setting up an Express app on Amazon EC2"
date: "2022-12-22"
description: "The posts explains steps to setup an Express app on Amazon EC2"
topic: "Amazon EC2"
thumbnail: "aws"
cover: "https://images.pexels.com/photos/833192/pexels-photo-833192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
---

Setting up your Express app on Amazon EC2 is not as hard as you may think. Here, in this article I will explain each step involved in the process which you can follow along. Before getting started, make sure you have the following requirements ready.

### Requirements

- An AWS Account
- Express backend API

The tutorial can be split into 3 different section namely, EC2 Setup, Local environment setup and finally Nginx reverse proxy setup.

1. First thing first open your EC2 console and launch a new instance.

2. For the server configuration, you can select Ubuntu server with T2 micro instance.

3. In the SSH section, you can generate a new SSH key, which you can download and keep it locally for later use.

4. The SSH section is followed by network part, where we will allow ssh and https connections so that we can access your EC2 instance through an SSH connection afterwards, as well as accept http requests to our server.

5. Finally select launch instance and your instance will be ready to go.

6. From the redirected page, you can select view all instance option to see all your active your instances.

7. From the instance details table, you can copy the public IPV4 address which will come in use sooner.

8. Now open terminal in client computer and navigate to the folder containing ssh file (.pem). In the folder run the following code to access your EC2 instance over an SSH connection.

```bash
ssh -i <PEM_FILE_NAME> OPERATING_SYSTEM@SERVER_IPV4_ADDRESS
```

9. In case there is a permission denied issue, try the following command to give proper permissions for the user.

```bash
chmod 400 <PEM_FILE_NAME>
```

10. On success, you will be logged in to the EC2 instance, and your terminal name will be replaced by Instance name. Just to keep packages updated, run the following commands: (in case you need to terminate the SSH connection, simply type exit in the terminal)

```bash
sudo apt update
sudo apt upgrade
```

11. Now, you need to install nodejs by using the following commands:

```
curl -s https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt install nodejs -y
```

12. In case if the installation fails, as an alternate method you can use nvm to install nodejs with the following code;

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

```
. ~/.nvm/nvm.sh
nvm install --lts
```

This will install the latest lts version of nodejs on you ec2 instance.

13. As an optional step, you may install pm2 package manager to manage and overview nodejs processes.

```
sudo npm install -g pm2
```

14. At this stage, nodejs is ready to run, now you can start initializing our first server using Express. You can clone one of your express app to continue. Here, I'm cloning a sample Express app available in my github.

```
git clone https://github.com/ArunGovil/ExpressLibrary.git
cd ExpressLibrary; yarn install
yarn dev
```

15. To expose our app to public use, we will setup nginx reverse proxy. To install nginx, run;

```
sudo apt update
sudo apt install nginx
```

16. Once installed, you can start accessing the cloud using http://<public-ip> url. If everything is set correctly, you will see a ‘Welcome to nginx’ page as result.

17. Now to redirect the request to our Express api, we need to configure the nginx by creating a file called config.conf inside /etc/nginx/conf.d folder.

18. Move in to the nginx folder first using and create a file called config.conf.

```
cd /etc/nginx/conf.d
touch config.conf
```

19. To edit the config.conf file, we will use nano text editor

```
nano config.conf
```

In the editor paste the following code snippet, make sure the port number is same as in your Express app, in this case 3000.

```
server {
server_name <SERVER_IP>;
location / {
        proxy_pass http://127.0.0.1:3000;
      }
}
```

20. Finally, restart the nginx server and run the express app and our api will be live.

```
sudo service nginx restart
```

```
cd ExpressLibrary; yarn dev
```

Thats it, you have successfully deployed your express api to Amazon EC2 service. Now you can start accessing you api across various platforms endpoints available on top of your public ip address.
