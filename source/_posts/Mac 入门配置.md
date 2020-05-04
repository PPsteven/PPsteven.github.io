---
title: Mac 入门基础环境搭建
date: 2019-10-26 21:46:00
tags: Hexo
categories: 电脑基本配置
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191031005821.png
---

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

> 参考 [iTerm2常用的快捷键](https://www.cnblogs.com/manastudent/p/7367718.html)

设置全局打开快捷键

Perferemance -> Keys ->Hotkey -> show/hide all windows with a system-wide hotkey

command + shift + t  # 设置快捷键 打开iterm2

```
新建标签：command + t
关闭标签：command + w
切换全屏：command + enter
查找：command + f
垂直分屏：command + d
垂直上下分屏：command + shift + d
左右 tab 之间来回切换：⌘ + 1 / 2
查看历史命令：command + ; （输入常用命令的前缀后使用该快捷键可以实现补全的功能）
除当前行：ctrl + u / ctrl +c 
上一条命令：ctrl + p
搜索命令历史：ctrl + r
清屏：clear
重新打开：command + r
iTerm2 剪切板历史：command + shift + h
```

#### zsh  插件配置

目前已经有的自带插件在官网Github中可以看到，https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins。
凡是这里有的，都可以立刻生效。

#### 参考页面

> [一些实用常用插件推荐 for zsh oh-my-zsh](https://blog.e9china.net/lesson/yixieshiyongchangyongchajiantuijianforzshoh-my-zsh.html)

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

##### autojump

```bash
$ brew install autojump 
plugins=(其他的插件 autojump)

# 如果是linux 系统可能比较麻烦一点，需要从github 上下源码安装（当然也可以保证是最新的）
$ git clone git@github.com:wting/autojump.git  autojump
$ cd autojump
$ ./install.py

# 运行完毕后就会出现如下信息
Please manually add the following line(s) to ~/.zshrc:

	[[ -s /home/ppsteven/.autojump/etc/profile.d/autojump.sh ]] && source /home/ppsteven/.autojump/etc/profile.d/autojump.sh

	autoload -U compinit && compinit -u

Please restart terminal(s) before running autojump.

# 按照操作在 .zshrc 中添加，我是乖乖添加了，其实我们可以直接在plugins 中添加的
plugins=(其他的插件 autojump)
```

#### 附录`.zshrc`配置

```bash
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/ppsteven/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
# ZSH_THEME="agnoster"
ZSH_THEME="ys"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
          git
#          zsh-syntax-highlighting
          zsh-autosuggestions
	        sublime
	        autojump 
        )

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# added by Anaconda3 2019.07 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/Users/ppsteven/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/Users/ppsteven/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/ppsteven/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/Users/ppsteven/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda init <<<

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
alias zshconfig="vim ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
```



## 解压软件

### 解压软件 unrar

brew install unrar

使用方法

unrar x test.rar # 解压到当前目录

### 解压软件 7z

brew search 7z   # p7zip

brew install p7zip

使用方法

7z e filename.7z



## 图床软件PicGo

安装教程

> https://github.com/Molunerfinn/PicGo
>
> 看完上面的配置才发现也是找工作的学生，真是厉害

Github 图床配置

```
PPsteven/pictures
master
Token:XXXXX
img/
https://cdn.jsdelivr.net/gh/PPsteven/pictures
```

## 设置 ssh 远程连接超时

为了解决 ssh 连接一段时间后会断开，我们需要在 `服务端` 和 `客户端` 做出以下操作

```
/etc/ssh/sshd_config # 服务端配置
/etc/ssh/ssh_config # 客户端配置
```

### 服务器端

```bash
vim /etc/ssh/sshd_config
# 修改为
ClientAliveInterval 30 # 客户端每隔多少秒向服务发送一个心跳数据
ClientAliveCountMax 86400 # 客户端多少秒没有相应，服务器自动断掉连接
```

最后重启 sshd 服务 (centos7+)

```bash
sudo systemctl restart sshd
```

### 客户端

```bash
ServerAliveInterval 60 # 每分钟发送一次, 然后客户端响应, 从而保持长连接;
ServerAliveCountMax 3 # 表示服务器发出请求后客户端没有响应的次数达到3次, 就自动断开
```



## Charles破解教程

> 参考教程：[Charles mac 破解教程](https://www.jianshu.com/p/0bc767840e42)

```
# 工具栏中的 help --> register
Registered Name: https://zhile.io
License Key: 48891cf209c6d32bf4
```

> Charles设置指南：[Charles使用指南](https://www.jianshu.com/p/4e748e481a1a)

