---
title: Docker 基础命令
date: 2019-11-21 20:22:30
tags: [日常学习笔记,Docker]
categories:  基础技能
keywords: 
description: 
top_img: 
comments: false
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191123002607.png
toc: 
toc_number:  
copyright: 
---

## 前言

最近的工作

- php 学习，设计到LAMP的环境搭建。虽然是Mac上Apache 和 php 都是自带的，但是环境上还是不足，所以要用Docker。DAMP
- 爬虫ip 池搭建，发现别人造好的轮子上需要如redis，flask等环境。而且配置完了，最终也是要部署到服务器上去的，所以docker 是必不可少的

最近的工作，让我感到Docker的学习一定要提前了。因为只是先用起来，首先记录一些常用的命令，争取一天搞定。

<!--more-->

## Docker 安装
我的主力机子是Mac，家里用旧电脑搭了 manjaro ，所以我需要两个安装教程

### Mac Docker安装
Mac 上配置docker最为方便
> 这里参考 [菜鸟教程:MacOS Docker 安装](https://www.runoob.com/docker/macos-docker-install.html) 

```bash
$ brew cask install docker 
# 查看是否安装成功
$ docker info 
$ docker -v 
```
**镜像加速**
鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们可以需要配置加速器来解决，我使用的是网易的镜像地址：http://hub-mirror.c.163.com。

在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址即可。修改完成之后，点击 Apply & Restart 按钮，Docker 就会重启并应用配置的镜像地址了。
![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191124001923.png)

### Manjaro docker 安装
Manjaro 也拥有非常强大的包管理软件 pacman 和 yay
这里我们使用pacman，这里面的软件都是来自官方库

```bash
# 安装docker
$ sudo pacman -S docker
# 启动docker 服务
$ sudo systemctl start docker 
# 查看docker服务状态
$ sudo systemctl status docker
# 设置docker开启启动服务
$ sudo systemctl enable docker 
```
这里Linux 有一个比Mac 麻烦一点的地方，就是每次使用docker 需要用sudo 超级管理员权限
```bash
# 如果还没有 docker group 就添加一个
sudo groupadd docker

# 将自己的登录名(${USER} )加入该 group 内。然后退出并重新登录就生效啦
sudo gpasswd -aG ${USER} docker

# 重启 docker 服务
sudo systemctl restart docker
```
**Linux 镜像加速**

```bash
# 新建配置文件
$ sudo touch /etc/docker/daemon.json 
# 添加国内站点
{
    "registry-mirrors": ["https://registry.docker-cn.com","http://hub-mirror.c.163.com"]
}

# 重启docker daemon
$ sudo systemctl restart docker 

# 查看是否有修改成功
$ docker info 
# 查看Register Mirrors的信息
Registry Mirrors:
  https://registry.docker-cn.com/
  http://hub-mirror.c.163.com/

```



## Docker 镜像使用

```bash
# 列出本地的镜像 images
$docker images
$docker image ls 
REPOSITORY       TAG     IMAGE ID      CREATED             SIZE
ubuntu          latest   775349758637  2 weeks ago         64.2MB
# 标签的含义
- REPOSTITORY：表示镜像的仓库源
- TAG：镜像的标签
- IMAGE ID：镜像ID
- CREATED：镜像创建时间
- SIZE：镜像大小

# 获取镜像
$docker pull ubuntu:13.10

# 查找镜像
$docker search ubuntu
- NAME:镜像仓库源的名称
- DESCRIPTION:镜像的描述
- OFFICIAL:是否docker官方发布

# 删除镜像
$docker rmi

# 删除所有镜像


```



## 创建并启动容器
docker run 是docker 命令中比较复杂的一个命令 
```bash
$docker run <images> <command>
$docker run busybox echo hello world
$docker run Ubuntu:16.01 /bin/bash
$docker run -t-i Ubuntu:16.01 /bin/bash
-t-i: 交互式会话
-d: 后台方式
--rm: 运行完成后就会删除
$docker exec -ti <CONTAINER ID> /bin/bash
```

## 容器信息
```bash
# 下面所有的<CONTAINER ID> 都可以用容器的NAME 替代
# docker 很贴心的为我们的容器起了名字
# 列出运行容器
$docker ps 
$docker ps -a # 包含停止但没有消失的容器

```

## 容器管理
```bash
# 停止正在运行的容器
$docker kill <CONTAINER ID>
$docker stop <CONTAINER ID> 
# 两个命令都是会停止容器运行
# 停止没有消失的容器
$docker restart <CONTAINER ID>
$docker start <CONTAINER ID>
# 启动并进入交互界面
$docker start -it <CONTAINER ID> /bin/bash

# 删除无用的容器
$docker rm <CONTAINER ID>
# 删除所有已停止的容器
$docker rm -v $(docker ps -aq -f status=exited)
# 删除所有容器
$docker rm $(docker ps -a)
```

## 查看docker输出
用于查看docker 的输出，对于没有交互(-ti)的容器的时候，需要用这个命令查看容器输出
```bash
$docker logs <CONTAINER ID>
```

## 文件拷贝
```bash
$docker cp <CONTAINER ID>:[/path/to/file]
```

## Docker LNMP环境搭建
> 这里我用的是github 上phplearn
> 有一份教程整理的也很不错，下面列出来，以后继续看
> [Docker LNMP环境搭建](https://www.awaimai.com/2120.html#9)

```bash
$cd phplearn
$docker-compose up # 启动容器
$docker-compose stop # 停止服务
```

## 参考资料
> [DockerCheatSheet](https://github.com/eon01/DockerCheatSheet)
> [Linux(Manjaro) -Docker 安装及基本配置](https://www.cnblogs.com/imzhizi/p/10718310.html)



