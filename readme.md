# 使用教程

## 1. 安装 Docker

你可以根据服务器的系统类型，参考对应的安装教程：

- Ubuntu：[安装教程](https://yeasy.gitbook.io/docker_practice/install/ubuntu)
- Debian：[安装教程](https://yeasy.gitbook.io/docker_practice/install/debian)
- CentOS：[安装教程](https://yeasy.gitbook.io/docker_practice/install/centos)

提示：依次完成安装教程里面写的这 4 个步骤即可，忽略其他步骤：

1. 准备工作
2. 使用 APT 安装
3. 启动 Docker
4. 建立 docker 用户组

然后用下面这个方式，测试 Docker 是否安装成功

在命令行输入：

```bash
docker run hello-world
```

输出

```bash
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
d1725b59e92d: Pull complete
Digest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## 2. 安装 Docker Compose
打开[安装教程](https://yeasy.gitbook.io/docker_practice/compose/install#er-jin-zhi-bao)，使用二进制包安装，然后用下面这个方式，测试 Docker Compose 是否安装成功

在命令行输入：

```bash
docker-compose --version
```

输出

```bash
docker-compose version 1.27.4, build 40524192
```
若能正常输出以上信息，则说明安装成功。

## 3. 获取代码

```
git clone https://github.com/raimonfuns/light-timeline-setup.git
cd light-timeline-setup
git checkout feed
```

## 4. 启动服务

```
./deploy.sh
```

## 5. 完成

恭喜你，已经部署完成，服务已经运行在了 6090 端口。

假如你机器的公网 IP 是 `87.61.37.242`，那么你就可以用 `http://87.61.37.242:6090` 访问