---
title: 博客第一贴：Hexo 搭建
date: 2019-10-27 21:46:00
tags: Hexo
categories: 电脑基本配置
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191031005140.png
---

# Hexo 博客搭建

> CodeSheep 学习笔记

Hexo 是一款基于node.js 的静态博库框架，而且可以可以方便的托管在Github 上（ 正好B站 up 主 :程序羊也推荐了）， 所以也正好简单记录一下Hexo 的安装配置过程

## 参考文档

不少博客已经总结的很好了，所以提前放上人家的地址

[hexo教程：github page+独立域名搭建(1)](http://fangzh.top/2018/2018090514/)

[hexo从零开始到搭建完整](https://www.cnblogs.com/visugar/p/6821777.html)

## 本地搭建hexo博客

### 下载node.js 

 官网下载LTS版本，直接安装

### npm 安装hexo

注意：切换为 root 账号操作    ```su```  ,切换淘宝源 cnpm,会更加快

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装hexo `cnpm install hexo-cli -g` 

安装完后用`hexo -v` 查看一下是否安装成功

### 启动hexo

在目录下创建 blog 文件夹  `mkdir blog` ,进入 `cd blog`

**初始化hexo** 

```bash
sudo hexo init
```

出现 `INFO  Start blogging with Hexo!`  表示安装完成

**启动hexo** 

```bash
hexo server / hexo s
```

### 写第一篇博客

```
hexo n 'my first blog'
```

命令会在 /Users/YourUserName/blog/source/_posts/ 文件夹下生成一篇 md文件

可以在finder 中用 typro 编辑

清空hexo: ` hexo clean`

重新生成hexo： `hexo generate / hexo g`

## github 仓库上搭建

### 新建仓库

New repository 

注意：名字必须为自己的用户名+.github.io

如 PPsteven.github.io

### 安装git 插件

```bash
cnpm install --save hexo-deployer-git
```

### 修改 _config.yml 配置文件

在配置文件中找到如下代码，添加repo 信息和 branch 信息

```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/PPsteven/PPsteven.github.io.git
  branch: master
```

部署hexo

```bash
hexo clean    #会清除缓存文件db.json及之前生成的静态文件夹public；
hexo g     #会重新生成静态文件夹public；
hexo deploy/ hexo d    #因为之前已经安装了插件并且在博客配置文件中也配置好了，所以这个命令会在博客根目录下生成一个.deploy_git的文件夹，并 把本地生成的静态文件部署到LiLei.github.io这个仓库中的master分支上；
```

如果是第一次部署，会提示输入github 账号和密码

**成功！！**

远端访问：PPsteven.github.io

# 进阶教程

## 参考教程：

> [hexo教程:基本配置+更换主题+多终端工作+coding page部署分流(2)](http://fangzh.top/2018/2018090715/)
>
> [如何使用 Hexo 和 GitHub Pages 搭建这个博客](https://uchuhimo.me/2017/04/11/genesis/#more)

学习了上面的教程后，基本的搭建和部署已经没有问题了。

主要的一个需求就是多电脑同步的问题。

## Hexo CheetSheet

- 初始化目录：`hexo init [folder]`

- 新建文章：`hexo new/n [layout] <title>` 或

  - 新建草稿：`hexo new draft <title>`
  - 新建页面：`hexo new page tags`

- 将草稿发布为正式文章：`hexo publish <title>`

- 生成静态文件：`hexo generate/g`

  - 监听文件变化：`hexo g --watch` 或 `hexo g -w`

- 部署：`hexo deploy/d`

  - 先生成后部署：`hexo d -g`
  - 等于 `hexo g` 加 `hexo d`

- 启动本地服务器（服务器会监听文件变化并自动更新）

  - `hexo server/s `

  - 启动调试：`hexo s --debug`
  - 预览草稿：`hexo s --draft`

- 清除缓存：`hexo clean`

## 主题安装教程


> 安装教程： [NexT官网](http://theme-next.iissnan.com/getting-started.html)
>          [jerry博客](https://jerryc.me/posts/21cfbf15/)



### 下载主题&启动

```bash
cd blog
git clone https://github.com/iissnan/hexo-theme-next themes/next
# 编辑_config.yml
theme: next
```

```bash
cd blog
git clone https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
# 编辑_config.yml
theme: Butterfly
```

## NexT 主题配置

### 设定主题/语言

主题配置的文件在themes/NexT 文件夹下的_config.yml 中，我们按照官网教程，依次配置

```yaml
#scheme: Muse
#scheme: Mist
scheme: Pisces

language: zh-Hans
```

### 添加标签/分类/关于页面

hexo 新建命令 `hexo n [layout] title` 中 layout 有三个模板

post创建文章，生成在`/source/_posts`文件夹下，draft创建草稿，生成在` /source/ _drafts` 文件夹下，page创建页面，生成在`/source/YourPageName `文件夹下   

![image-20191027011714501](/Users/ppsteven/Library/Application Support/typora-user-images/image-20191027011714501.png)

- 新建页面

  ```bash
  hexo new page tags
  hexo new page categories
  hexo new page about
  ```

- 修改菜单（编辑 themes/next/_config.yml）

  ```yaml
  menu:
    home: / || home
    about: /about/ || user # 关于页面
    tags: /tags/ || tags  # 标签页面
    categories: /categories/ || th # 分类页面
    archives: /archives/ || archive # 归档页面
    #schedule: /schedule/ || calendar
    #sitemap: /sitemap.xml || sitemap
    commonweal: /404/ || heartbeat # 公益404
  ```

### 设置头像

_config.yml 在blog 文件和 theme/next 文件夹下都有

blog 下的为站点配置文件，主题下的为主题配置文件

`mkdir themes/next/source/uploads` ，放置头像图片（jpg/gif 等）

修改配置文件

```yaml
# avatar: http://example.com/avatar.png
avatar: /uploads/avatar_1.jpg
```

### 设置作者昵称

修改  **站点配置文件** 

```yaml
author: Your name
```

### 设置阅读字数与时长

需要安装插件，[地址](https://github.com/willin/hexo-wordcount)

```yaml
# Post wordcount display settings
# Dependencies: https://github.com/willin/hexo-wordcount
post_wordcount:
  item_text: true
  wordcount: true
  min2read: true
  totalcount: true
  separated_meta: true
```

### 配置搜索服务

Local Search添加百度/谷歌/本地 自定义站点内容搜索

```bash
cnpm install hexo-generator-searchdb --save
```

编辑站点配置文件，新增如下代码

```yaml
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

编辑主题配置文件，启动本地搜索

```yaml
# Local search
# Dependencies: https://github.com/flashlab/hexo-generator-search
local_search:
  enable: true
  # if auto, trigger search by changing input
  # if manual, trigger search by pressing enter key or search button
  trigger: auto
  # show top n results per article, show all results by setting to -1
  top_n_per_article: 3
```

设置摘要

```yaml
# Automatically Excerpt. Not recommend.
# Please use <!-- more --> in the post to control excerpt accurately.
auto_excerpt:
  enable: True
  length: 150
```

