# How to deploy

## 1. Install Docker

- [How to install Docker on Ubuntu?](https://yeasy.gitbook.io/docker_practice/install/ubuntu)
- [How to install Docker on Debian?](https://yeasy.gitbook.io/docker_practice/install/debian)
- [How to install Docker on CentOS?](https://yeasy.gitbook.io/docker_practice/install/centos)

You can execute the following command to test whether Docker is installed successfully

```bash
docker run hello-world
```

output:

```bash
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
d1725b59e92d: Pull complete
Digest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

...
```

## 2. Install Docker Compose

[How to install Docker Compose?](https://yeasy.gitbook.io/docker_practice/compose/install)

You can execute the following command to test whether Docker Compose is installed successfully

```bash
docker-compose --version
```

output

```bash
docker-compose version 1.27.4, build 40524192
```

## 3. Get source code

```
git clone https://github.com/rumsystem/light-timeline-setup.git
cd light-timeline-setup
```

## 4. Deploy

```
./deploy.sh
```

## 5. Done

Congratulations, the deployment is complete and the service is running on port 9060.

If the public IP of your machine is `90.61.37.242`, then you can use `http://90.61.37.242:9060` to access

## 6. Shutdown server

```
./down.sh

# Stopping light-timeline-setup_timeline_1 ... done
# Stopping light-timeline-setup_postgres_1 ... done
# Removing light-timeline-setup_timeline_1 ... done
# Removing light-timeline-setup_postgres_1 ... done
# Removing network light-timeline-setup_default
```