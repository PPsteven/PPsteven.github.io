---
title: mysql 常用命令
tags: [mysql]
comments: false
date: 2020-03-01 22:38:46
categories: mysql
keywords:
description:
top_img:
cover:
toc:
toc_number:
copyright:
---

慢慢总结常用的的mysql 命令，看做是平时工作的“缓存”

<!--more-->

## 修改密码强度

修改密码强度一般是mysql5.7 升级到 mysql8.0，或者是刚刚安装mysql8.0时候很容易碰到的问题。

```mysql
# 查看密码需要满足的条件
SHOW VARIABLES LIKE 'validate_password%'; 

# validate_password_policy代表密码策略，默认是1：符合长度，且必须含有数字，小写或大写字母，特殊字符。设置为0判断密码的标准就基于密码的长度了。一定要先修改两个参数再修改密码
set global validate_password.policy=0;

# validate_password_length代表密码长度，最小值为4
set global validate_password.length=4; 
```



## 创建新的用户

```mysql
# 创建新用户 reader01， 赋予密码'onlyread@123'
CREATE USER `reader01`@`%` IDENTIFIED by 'onlyread@123';
# 赋予 select 权限， 赋予nongwei_syn所有数据表的访问权限
GRANT SELECT ON `nongwei_syn`.* TO `reader01`@`%` ;
# 降低 mysql 加密规则
ALTER USER `reader01`@`%` IDENTIFIED WITH mysql_native_password BY 'onlyread@123';
# 刷新一下权限
flush privileges;
# 查看用户的权限
show grants for reader01;
GRANT USAGE ON *.* TO `reader01`@`%`
GRANT SELECT ON `nongwei_syn`.* TO `reader01`@`%`
```



## 数据字典显示

**显示字段的详细信息（包含COMMENT）**

```mysql
show full columns from d_dbname.t_table_name
```

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200322184343.png)

建议每次建表的时候，都带上COMMENT

如果你一开始并没有这样做的话，需要借助 `alter` 来添加 `COMMENT`

```mysql
alter table `d_dbname`.`t_table_name` modify column foodtype   varchar(20)                              COMMENT '品种';
```

**显示建表的SQL**

```mysql
show create table  `d_dbname`.`t_table_name`

# output:
CREATE TABLE `t_vegnet_price_202003` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '序号',
  `foodtype` varchar(20) DEFAULT NULL COMMENT '品种',
  `market` varchar(30) DEFAULT NULL COMMENT '批发市场',
  `lprice` float(10,2) DEFAULT NULL COMMENT '最低价',
  `hprice` float(10,2) DEFAULT NULL COMMENT '最高价',
  `avgprice` float(10,2) DEFAULT NULL COMMENT '平均价',
  `unit` varchar(20) DEFAULT NULL COMMENT '计量单位',
  `date` varchar(10) DEFAULT NULL COMMENT '日期',
  `pagenum` int DEFAULT NULL COMMENT '页码',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `date` (`date`,`foodtype`,`market`)
) ENGINE=InnoDB AUTO_INCREMENT=42501 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```