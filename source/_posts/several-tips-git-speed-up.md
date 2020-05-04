---
title: 提升 git 速度的几个加速方法
tags: git
comments: false
date: 2020-05-03 20:07:16
categories:
keywords:
description:
top_img:
cover:
toc:
toc_number:
copyright:
---

最近经常需要从github上拉代码下来，速度实在是太慢了。所以写这篇文件，来好好总结一下提速的方法。

提速分为本地计算机提速，和远程服务器提速。其中有一些方法是共通的。



<!--more-->

## 使用镜像源

> 参考 [知乎Don.hub](https://www.zhihu.com/question/27159393)

替换 github 镜像网站

github.com --> github.com.cnpmjs.org

```
https://github.com/graykode/nlp-tutorial
https://github.com.cnpmjs.org/graykode/nlp-tutorial
```

这个方法最简单，提速效果还是很明显的



## 修改hosts

DNS污染是GFW的一个重要手段，通过修改 hosts 文件来直接绕过DNS解析是一个不错的方法。这是一个主流的解决方法，但是实测下来效果并不显著。

第一步: 找到以下两个域名对应最快的 ip 地址

 查 ip 地址： https://www.ipaddress.com

```
github.global.ssl.fastly.net  
github.com
```

第二步添加至 hosts

```
vim /etc/hosts
```



##使用国内托管平台

通过国内托管平台，如码云 `gitee/阿里云/oschaina` 等作为中转，将代码 fork 到自己的仓库下。然后去 clone 对应仓库的repo，基本可以到达满速。

搬运教程：https://zhuanlan.zhihu.com/p/111697412

## 

## 参考资料