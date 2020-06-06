---
title: 剑指 Offer 归纳
tags: [剑指Offer，刷题]
comments: false
date: 2020-05-14 20:13:20
categories: 刷题
keywords:
description:
top_img:
cover:
toc:
toc_number:
copyright:
---

《剑指 Offer 》 刷题小计，主要记录别人解题的思路和方法。

以及题目的类型和重点

<!--more-->

#### 面试题04. 二维数组中的查找

方法

- 左上/右下 排除式查找

  时间复杂度：![img](https://www.nowcoder.com/equation?tex=O(%E8%A1%8C%E9%AB%98%20%2B%20%E5%88%97%E5%AE%BD)&preview=true)
  空间复杂度：![img](https://www.nowcoder.com/equation?tex=O(1)&preview=true)

- N行折半查找

  > https://blog.nowcoder.net/n/d332492753844d18aa4edc484e3c1318

  二维数组分为上下左右四个边界top，bottom，left，right：

  - 根据上边界折半查找——确定 right 范围
  - 根据下边界折半查找——确定 left 范围
  - 根据左边界折半查找——确定 top 范围
  - 根据右边界折半查找——确定 bottom 范围



#### 面试题06. 从尾到头打印链表

- 递归法

  递归是由计算机帮助实现 “栈” 结构

- 数据结构——栈 

  先进后出



#### 面试题07. 重建二叉树

- 数据结构——二叉树

  根据 pre 确定 根节点

  根据 vin 确定左右子树的大小

- 递归编程

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200512123358.png" style="zoom:50%;" />



#### 面试题09. 用两个栈实现一个队列

- 栈是后进先出，队列是先进先出。
  可以使用2个栈来表示，一个表示入栈，还有一个表示出栈，出栈的顺序与入栈的顺序相反。

- 第一个栈弹出后压入第二个栈就可以了

- python 栈 & 队列 实现

  ```python
  # python 栈实现
  stack = []
  stack.append(1) # 入栈
  stack.pop() # 出栈
  # python 队列实现
  from collections import deque 
  queue = deque(['A', 'B', 'C']) 
  queue.append('D') # 入队
  queue.popleft() # 出队
  ```

  

#### 面试题11. 旋转数组的最小数字

- 变形的二分查找，但是有一些坑

  a. 正确情况下的二分查找

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200513113239.png" style="zoom: 67%;" />

  b. 特殊情况

  当出现重复数字情形的时候，**直接缩小左边界（因为最小值总是在右侧出现）**

  情形4 可以适应非递增数列的最小值为队首元素的情形。最后的代码非常巧妙

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200513113538.png" style="zoom:67%;" />

#### 面试题12. 矩阵中的路径

- DFS 深度搜索



#### 面试题13. 机器人的运动范围

- DFS 深度搜索

- BFS 广度搜索

- 剪枝优化

  - 通过分析发现，本题只考虑走 右、下两个方向即可

  - 数位和的计算上，用数学公式进行优化

    ```python
    s_x + 1 if (x + 1) % 10 else s_x - 8
    ```

    ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200514215019.png)

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200514214717.png)

> 参考：[Krahets's Blog](https://krahets.gitee.io/)
>
> 这个大神些的东西，真的比原书的作者写的解法好，而且是python版

#### 面试题14- I. 剪绳子

> 参考：[腐烂的橘子🍊](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xiang-jie-bao-li-di-gui-ji-yi-hua-ji-zhu-dong-tai-/)

- 暴力法

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200514215522.png" style="zoom: 50%;" />

递归函数 $F(n)=max(i\times(n-i),i\times F(n-i)),i=1,2,...,n-2F(n)=max(i×(n−i),i×F(n−i)),i=1,2,...,n−2$

- **记忆化技术（自顶向下）**

  递归函数中存在大量重复的计算，记忆化技术，可以帮助缩小时间，通过计算机验证

- **方法三：动态规划（自底向上）(推荐方法)**

  动态规划的核心是，设定边界条件 和 

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200514220028.png)

- 方法四：动态规划优化解法

  任何大于 33 的数都可以拆分为数字 1，2，31，2，3 的和，且它们对 33 的余数总是 0，1，20，1，2

  可以降低 空间利用率

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200514220028.png)

- 方法五：数学推导



#### 面试题15-二进制中的1

- python 二进制问题

  字符操作：
  
  n & 1 验证最后一位是否是1
  
  n & (n - 1) 消0