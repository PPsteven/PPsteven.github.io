---
title: Mac 入门基础环境搭建
date: 
tags: Hexo
categories: 电脑基本配置
---

# Mac 基础配置

## Homebrew常用命令

> 官网安装 Homebrew
>
> http://mxcl.github.com/homebrew/

#### 前言

包管理软件

Win: 360软件管家

Debian/Ubuntu: apt包管理系统 

Redhat/Fedora: yum包管理系统

Mac OS X: Macports,Fink,AppStore

以及   **Homebrew** 

#### 使用方法

brew -v	查询Homebrew版本
brew -h	brew帮助
brew update	更新Homebrew
brew install <pkg_name>	安装任意软件
brew uninstall <pkg_name>	卸载任意软件
brew search <pkg_name>	查询任意包
brew list	列出安装列表
brew info <pkg_name>	查看任意包内容信息
brew upgrade <pkg_name>	更新任意包
brew cleanup <pkg_name>	删除具体旧软件
brew cleanup		删除所有旧软件
brew outdated		已安装的包是否需要更新

## item2+oh-my-zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

chsh -s /bin/zsh. # 命令航切换bash为zsh shell
iterm的perference->profiles->commond 设置成/bin/zsh # iterm2 界面手动切换

- 更改shell 语言
  1. cat /etc/shells # 查看所有 shell
  2. chsh -s /bin/zsh #切换为zsh 
  3. 修改文件
     vi ~/.zshrc
     source ~/.zshrc
  4. echo $SHELL # 查看当前shell 



#### Iterm2 使用技巧

设置全局打开快捷键

Perferemance -> Keys ->Hotkey -> show/hide all windows with a system-wide hotkey

command + .  # 设置快捷键 打开iterm2
command + d # 打开多个terminal
command + shift + d # 垂直打开多个terminal



#### zsh  插件配置

目前已经有的自带插件在官网Github中可以看到，https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins。
凡是这里有的，都可以立刻生效。

**参考页面**

[一些实用常用插件推荐 for zsh oh-my-zsh](https://blog.e9china.net/lesson/yixieshiyongchangyongchajiantuijianforzshoh-my-zsh.html)

##### git 默认自带

##### zsh-syntax-highlighting  语法高亮

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

将zsh-syntax-highlighting 下载到zsh 的plugins 目录中

```
plugins=(其他的插件 zsh-autosuggestions)
```

##### zsh-autosuggestions 自动建议

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

```
plugins=(其他的插件 zsh-autosuggestions)
```

##### sublime 默认自带

| 命令        | 作用                         |
| ----------- | ---------------------------- |
| st          | 打开sublime                  |
| st + 文件夹 | 打开文件夹                   |
| st + 文件   | 打开文件                     |
| stt         | 打开当前文件夹 ，等价于 st . |
| sst         | 管理员权限 相当于 sudo st    |

##### z 默认自带

```bash
z -x 无效路径
z 目录名称
```

### 解压软件 unrar

brew install unrar

使用方法

unrar x test.rar # 解压到当前目录

### 解压软件 7z

brew search 7z   # p7zip

brew install p7zip

使用方法

7z e filename.7z



