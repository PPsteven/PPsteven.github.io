---
title: git cheetsheet
date: 2019-11-14 19:20:00
tags: [git,日常学习笔记]
categories: 基础技能
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191119215108.png
---

## cheetsheet
入门级别的git 基础操作，仅仅收录理解了的，常用的命令。负责的命令，在附录的大全里面可以找到

### git config
Git 有三层的配置文件
1. 仓库级的配置文件：在仓库的 `.git/config` 目录下，只对本仓库有效
2. 全局级的配置文件：Mac在 `~/.gitconfig` 目录
3. 系统级的配置文件：在Git 的 安装目录下 (经过查找，我的目录为/usr/local/Cellar/git/2.23.0_1/.bottle/etc)

```bash
# --local: 仓库级 , --glocal: 全局级 , --system: 系统级
# 添加配置
$ git config --global user.name "Name" # 添加用户名 --global 代表配置的全局的参数
$ git config --global user.email "email@example.com" # 添加邮箱

# 查看配置
$ git config --list # 查看全部git配置
$ git config --get user.name/user.email # 查看单个配置

# 删除配置
$ git config --unset user.name

# 编辑配置
$ git config -e --global

# 添加别名，对于一些比较长的别名，可以简化
# 也可以通过git config 
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
$ git config --global alias.graph "log --graph --oneline"
```
### git init
```bash
$ git init  # 创建空的git代码库
$ git init Myfolder # 创建文件夹Myfolder，并创建git代码库
```
### 文件（增删改提）
#### git add 增
```bash
# 把指定的文件添加到暂存区中
$ git add <文件路径>

# 添加所有修改、已删除的文件到暂存区中
$ git add -u [<文件路径>]
$ git add --update [<文件路径>]

# 添加所有修改、已删除、新增的文件到暂存区中，省略 <文件路径> 即为当前目录
$ git add -A [<文件路径>]
$ git add --all [<文件路径>]
$ git add .  # 当前目录（递归子目录）

# 查看所有修改、已删除但没有提交的文件，进入一个子命令系统
$ git add -i [<文件路径>]
$ git add --interactive [<文件路径>]

```

#### git commit 提交
```bash
# 把暂存区中的文件提交到本地仓库，调用文本编辑器输入该次提交的描述信息
$ git commit

# 把暂存区中的文件提交到本地仓库中并添加描述信息
$ git commit -m "<提交的描述信息>"

# 把所有修改、已删除的文件提交到本地仓库中
# 不包括未被版本库跟踪的文件，等同于先调用了 "git add -u"
$ git commit -a -m "<提交的描述信息>"

# 修改上次提交的描述信息
$ git commit --amend -m "desc"

# 拿372a* 提交的信息（作者、提交者、注释、时间戳等）来提交当前修改
$ git commit -c 372a
```

#### git reset 还原

```bash
# 重置暂存区，但文件不受影响
# 相当于将用 "git add" 命令更新到暂存区的内容撤出暂存区，可以指定文件
# 没有指定 commit ID 则默认为当前 HEAD
# 丢弃暂存区中的所有文件的修改（工作区不受影响）
$ git reset 
$ git reset --mixed 

$ git reset <文件路径,commit ID>
$ git reset --mixed  <文件路径,commit ID>

$ git reset --hard HEAD^ # 回到上一个版本（HEAD: 当前版本，HEAD^: 上一个版本，HEAD~100: 往上100个版本）
$ git reset --hard 1234567 # 回到指定版本号commit id（此处：commit id 假设为1234567******，Git会根据commit id的前几位自动寻找对应的版本）

$ git reflog # 查看命令历史
```

####  git revert 反做

```bash
# 生成一个新的提交来撤销某次提交，此次提交之前的所有提交都会被保留。
$ git revert <commit ID>
```
比较一下 git revert 和 git reset 的区别：

git reset是把HEAD向后移动来删除提交，而git revert是用一次新的提交来回滚之前的提交（HEAD会继续前进）。下面一幅图比较形象生动。

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191115001540.png)



关于git 的版本回退的问题，[廖雪峰的博客：时光穿梭机](https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)已经讲的很好了，我们可以通过`git log` 查看“当前”版本库的状态，但是如何查看“未来”的版本库呢？可以通过`git reflog` 查看。

#### git remove 删除

```bash
# 删除工作区文件，若文件在工作区或缓存区中有修改，会失败
$ git rm <文件路径>
$ git rm -f <文件路径> # 无论有没有在工作区或暂存区修改，强制删除
$ git rm --cached <文件路径> # 移除暂存区的文件，在本地仓库的文件夹中保留该文件
$ git rm -r <文件夹路径> # 移除文件夹
```

#### git checkout  恢复

```bash
# 当在暂存区中有修改时，使用暂存区中的修改覆盖工作区中的 <文件路径>
# 当不在暂存区中时，使用本地版本库中的HEAD指针处的修改覆盖工作区中的<文件路径>
$ git checkout -- <文件路径>
# 用本地版本库中 HEAD处提交的文件，覆盖 暂存区和工作区的文件
$ git checkout HEAD <文件路径>
# 用本地版本库中 93ef处提交的文件，覆盖 暂存区和工作区的文件
$ git checkout 93ef <文件路径>

```

### git 日志与文件状态

#### git status 状态

```bash
# 查看当前所处的分支暂存区和工作区的文件（会显示当前所处分支）
# 注1：处于暂存区的文件状态:：staged(已暂存)；处于工作区的文件状态:：untrack(未跟踪)、modified(已修改)
# 注2：工作区中的空目录不会被git追踪
$ git status
$ git status <branch name>

# 以简短模式查看暂存区和工作区的文件
# 会显示两列，第一列是文件的状态，第二列是对应的文件
# 文件状态：A 新增，M 修改，D 删除，?? 未添加到Git中
$ git status -s
```

#### git log 日志

```bash
# 打印所有的提交记录
$ git log

# 打印从第一次提交到指定的提交的记录
$ git log <commit ID>
$ git log -- <文件>

# 打印指定数量的最新提交的记录
$ git log -<指定的数量>

# 高级功能
# 记不住可以设置别名
$ git log -p <文件> # 显示出每次修改的内容
$ --graph  # 图形化的方式显示
$ --graph --oneline # 图形化简洁模式
$ --graph --oneline --name-only # 图像化简洁模式（只显示文件名清单）
$ --author = leon # 限定作者leon
$ --grep = "test" # 限定注释
$ --since="2018-10-7" --until='2019-10-12'
# since,until 标记对和 after，before 标记对是等价的
$ --after="2018-10-7" --before='2018-10-12'
$ --since=2.weeks # 最近2周的提交记录
$ --before = "2018-10-12"--since=
```

#### git show 显示修改

```bash
# 统计各个提交者的次数
$ git shortlog -sn 
# 显示修改内容(详细)
$ git show 3a6c
$ git show HEAD
# 显示最近一次提交的修改内容（不显示具体的修改内容）
$ git show --name-only HEAD 
```

### 分支管理

#### git branch

```bash
# 列出本地的所有分支，当前所在分支以 "*" 标出
$ git branch

# 列出本地的所有分支并显示最后一次提交，当前所在分支以 "*" 标出
$ git branch -v
$ git branch -r # 列出所有远程分支 cache
$ git branch -a # 列出所有本地分支和远程分支cache
$ git branch -av # 列出所有本地分支和远程分支cache（含简单说明）
$ git branch -vv # 查看本地分支和远程分支cache的追踪关系

# 创建新分支，新的分支基于上一次提交建立
$ git branch <分支名>

# 修改分支名称
# 如果不指定原分支名称则为当前所在分支
$ git branch -m [<原分支名称>] <新的分支名称>
# 强制修改分支名称
$ git branch -M [<原分支名称>] <新的分支名称>

# 删除指定的本地分支
# 删除的时候需要从被删除的分区切换出去
$ git branch -d <分支名称>

# 强制删除指定的本地分支
$ git branch -D <分支名称>
```

#### git checkout 分支切换

```bash
# git 提交流程 工作区-> 暂存区 -> 版本库
$ git checkout -- <file> # 撤销修改：1. 文件在添加到缓存区前修改，则回退到原工作区状态；2. 文件在添加到缓存区后修改，则回退到原缓存区状态。也即是将<file>撤回到最近一次git add或git commit状态（注：--表示在当前分支，如果没有，则切换到另一个分支）
$ 
```







### 远程操作

#### git clone 克隆

```bash
# 默认在当前目录下创建和版本库名相同的文件夹并下载版本到该文件夹下
$ git clone <远程仓库的网址>

# 指定本地仓库的目录
$ git clone <远程仓库的网址> <本地目录>

# -b 指定要克隆的分支，默认是master分支
$ git clone <远程仓库的网址> -b <分支名称> <本地目录>

# -o 设置远程仓库为origin
$ git clone -o <orgin name > https://github.com/kekec/Test.git 
```



```
# git 基础配置


git status respo # 查看当前状态
git diff <your file> # 查看工作区的文件与暂存区文件的区别
git diff <your file> --cached # 查看暂存区(stage/index)的文件与分支(master)的区别

git log # 查看最近到最远的提交记录（详情: commit id + Author + Date + comment）
git log --pretty=oneline # 查看最近到最远的提交记录（简写：commit id + comment）


git remote add origin git@github.com:XXX/learngit.git # 关联一个远程仓库
git push -u origin master # 推送master分支到远程  -u 第一次提交使用，关联本地master分支 和 远程 master 分支，之后可以不加 -u


# 克隆文件
# Git支持多种协议，包括https，但通过ssh支持的原生git协议速度最快，https 每次推送都必须输入口令。
git clone https://github.com/XXX/learngit.git Yourfilepath # https
git clone git@github.com:XXX/learngit.git ./lesson01 # ssh（推荐）

# 分支管理
# Git鼓励大量使用分支
git branch # 查看分支
git branch <name> # 创建分支
git branch -d <name> # 删除分支
git checkout <name>或者git switch <name> # 切换分支
git checkout -b <name>或者git switch -c <name> # 创建+切换分支
git branch dev + git checkout dev # 等价于上面的语句 
git merge <name> # 合并某分支到当前分支
git merge --no-ff -m "merge with no-ff" <name> # 合并后的分支有历史记录，而Fast-Forward合并之后，分支没有历史记录

# 解决冲突
git log --graph # 查看分支合并图
git log --graph --pretty=oneline --abbrev-commit // 查看分支合并缩略图
git checkout -b dev # 创建分支并切换

# Bug 分支
git stash # 隐藏分支工作现场，为修复bug准备
git stash list # 查看隐藏的工作现场
git stash apply # 恢复隐藏的工作现场
git stash drop # 删除隐藏的工作现场
git stash pop # 恢复并删除工作现场，等价于 git stash apply + git stash drop
git stash apply stash@[1] # 可以多次stash，通过git stash list查看所有的stash，然后可以恢复到指定的隐藏的工作现场
```

团队合作分支

![](https://www.liaoxuefeng.com/files/attachments/919023260793600/0)

## TO DO LIST

- [ ] git pull
- [ ] git rebase
- [ ] git 标签 
- [ ] 看完教程[git 教程](http://www.findme.wang/share/detail/id/327.html#sub6)

## 参考资料
- [廖雪峰git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
- [Git原理与命令大全](https://www.cnblogs.com/kekec/p/9248487.html)
- [Git命令大全](https://www.jianshu.com/p/93318220cdce)





