---
title: 如何利用SSH连接家中的服务器
date: 2019-12-01 13:23:30
tags: [ssh,sunny-ngrok]
categories: 环境搭建
keywords: 
description: 
top_img: 
comments: false
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191201153141.png
toc: 
toc_number:  
copyright: 
---

## 前言

家中闲置了一台电脑，准备用来当做服务器。一方面也是作为linux 学习练练手，二是可以运行一些爬虫小程序或者是网页服务。

这里我用的manjaro，这是目前比较流行的linux 发行版，最热门的linux桌面发行版之一。

我选择manjaro也是想作为替代windows 来用。manjaro拥有一个非常方便的软件仓库，利用pacman和yay等命令可以十分方便的安装软件。

家中的电脑，由于没有公网ip，只能在家中用ssh 访问，一旦出门，就无法访问服务器了。这非常不方便，因为可能要从电脑上获取资料，访问数据库，修改代码等等操作，一旦离开本地环境，也太不方便了。

经过百度后发现，需要利用  **内外穿透** 技术实现。 内网穿透技术有很多了，我这里选择的是ngrok 这个方案。

我试了一下两种方案，第一个是外国的，没有尝试成功，而且免费版本每次断开后，生成的url 是随机的。所以没有采用。第二个是国内的Sunny-Ngrok，有免费版的。先尝试一波，如果好用再购买。

- [ngrok](https://dashboard.ngrok.com/get-started)
- [ngrok.cc](https://www.ngrok.cc/download.html)  （Sunny-Ngrok）

<!--more-->

##  局域网连接服务器

这里先给出用局域网连接服务器的方法
```bash
# linux 查看ip 地址一般是下面三种方法（不同系统不一样）
$ ifconfig
$ ipconfig
$ ip addr <--manjaro
```
运行如下
```bash
$ ip addr | grep inet
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
    inet 192.168.1.102/24 brd 192.168.1.255 scope global dynamic noprefixroute wlp2s0
    inet6 fe80::1bd5:9435:6572:ffc7/64 scope link noprefixroute
# ip地址是 192.168.1.102
```
局域网中使用
```bash
ssh -p 22 ppsteven@192.168.1.l02
# -p 22 也可以省略，因为ssh 的默认端口号就是22 
```

方便起见，我选择把这条语句在zsh中创建一个别名

把`alias locallogin="ssh ppsteven@192.168.1.102"`添加在`~/.zshrc`配置中



## Sunny-Ngrok教程

教程基本上都在 [ngrok.cc官方文档](http://www.ngrok.cc/_book/general/tcp.html) 写的很清楚了，但是有一些还是需要注意的。

### 开通隧道

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191201135321.png)

如果你是想用ssh，开通的就是TCP转发。记得要把本地端口换成22（当然不换也是可以的，只要你最后连ssh 的时候设置好端口就行了）

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191201135519.png)



最后看到的结果是这样的

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191201153141.png)

```
ssh ppsteven@free.aa.com 就可以连接上你的服务器了
```

### Ngrok 启动

上图可以看到，有一项显示，你有没有开启ngrok

启动的方法，官网教程里面也有写,我走一遍

### 下载客户端

我用的是Mac 下载zip文件，然后上传到服务器的操作。有图形界面的同学，可以直接按照官网操作。

```bash
$ scp ~/Downloads/linux_amd64.zip ppsteven@192.168.1.102:~/Documents
$ ssh 192.168.1.102
$ cd ~/Documents
$ unzip linux_amd64.zip
```
### 启动ngrok 服务
```bash
# 当前目录在linux_amd64 下
$ ./sunny clientid 隧道id
```
启动服务后，我们在官网的后端就可以看到结果。

### 连接远程服务器
ngrok 的作用直观的来说，就是给我们提供了一个公网ip，使我们可以访问内网地址。
可以简单的认为 192.168.1.102 等于 www.abc.com (提供的域名)，命令如下

```bash
$ ssh ppsteven@www.abc.com 
```

## .zshrc 配置小结

```bash
$ alias localDell="ssh ppsteven@192.168.1.102"
$ alias remoteDell="ssh ppsteven@free.aa.com &"
```
加上& 表示是后台运行



## 参考资料

[有了内网穿透神器 ngrok ，个人电脑也能做服务器](https://zhuanlan.zhihu.com/p/91684175)