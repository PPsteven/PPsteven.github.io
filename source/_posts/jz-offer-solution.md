title: 算法笔记:《剑指 Offer》
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

用言简意赅的方法记录 《剑指》，作为复习《剑指offer》的笔记



<!--more-->

## [面试题03. 数据中的重复数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

### Best Answer【利用下表法】

- 解题思路：

  利用 `nums 里的所有数字都在 0～n-1 的范围内` 这一条件，表示 `每个数字都只有一个坑位，一个坑位上不能有两个数字` 

  > 时间复杂度 O(n) 空间复杂度O(1)

```python
class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
       for i in range(len(nums)):
           while i != nums[i]:
               if nums[i] == nums[nums[i]]: return nums[i]
               # 原地交换
               temp = nums[i]
               nums[i] = nums[nums[i]]
               nums[temp] = temp
               
```

- 交换数组的时候，需要注意利用 python 便捷的交换方式存在陷阱

  ```python
  # 正确方法一：
  temp = nums[i]
  nums[i] = nums[nums[i]]
  nums[temp] = temp
  
  # 正确方法二：
  nums[nums[i]] , nums[i] = nums[i] , nums[nums[i]]
  
  # 错误方式：
  nums[i], nums[nums[i]] = nums[nums[i]], nums[i]
  ```

### Other Answer【哈希表法】

- 解题思路：`哈希表`

  > 时间复杂度 O(n) 空间复杂度O(n)

  Python的实现哈希表的方式是通过 `字典` 和 `集合` 的方式

  ```python
  # 基于集合
  class Solution:
      def findRepeatNumber(self, nums: List[int]) -> int:
         s = set()
         for i in nums:
             if i in s: return i
             else: s.add(i)
  # 基于字典
  class Solution:
      def findRepeatNumber(self, nums: List[int]) -> int:
         s = dict()
         for i in nums:
             if i in s: return i
             else: s[i] = True
  ```

## [面试题04. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

> 同 [搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)

### Best Answer【左下/右上元素移动法】

- 解题思路：

  左下、右上角的特点是，排除式查找。

  > 时间复杂度 O(行高+列宽) 空间复杂度：O(1)

  ```python
  class Solution:
      def findNumberIn2DArray(self, matrix: List[List[int]], target: int) -> bool:
          if not matrix: return False
          # 以右上角为例
          i, j = 0, len(matrix[0]) - 1
          while i < len(matrix) and j >= 0:
              if matrix[i][j] == target: return True
              elif matrix[i][j] < target: i += 1 # 比目标值小，向下一行查找
              else: j -= 1 # 比目标值大，向上一行查找
          return False
  ```

### Other Answer 【双折半查找】

- 解题思路 `折半法`

  > 参考：https://blog.nowcoder.net/n/d332492753844d18aa4edc484e3c1318
  >
  > 时间复杂度：O(logM + logN) 复杂度最坏情况为O(M * logN)

  二维数组分为上下左右四个边界top，bottom，left，right：

    - 根据上边界折半查找——确定 right 范围
    - 根据下边界折半查找——确定 left 范围
    - 根据左边界折半查找——确定 top 范围
    - 根据右边界折半查找——确定 bottom 范围

  最直接的方法，代码量大，考察基本功

```python
class Solution:
    # array 二维列表
    def Find(self, target, array):
        # write code here
        left = 0
        right = len(array[0]) - 1 
        top = 0
        bottom = len(array) - 1 
        
        while (left < right or top < bottom):
             # 对上边界进行折半，可以缩小右边界
             l = left
             r = right
             while (l <= r):
                  mid = (l+r) // 2
                  if array[top][mid] == target:
                       return True
                  elif array[top][mid] > target:
                       r = mid - 1
                  else:
                       l = mid + 1
             if (mid < right):
                  right = mid
             top += 1

             # 对下边界进行折半，可以缩小左边界
             l = left
             r = right
             while (l <= r):
                  mid = (l + r) // 2 
                  if array[bottom][mid] == target:
                       return True
                  elif array[bottom][mid] > target:
                       r = mid - 1 
                  else: 
                       l = mid + 1 
             if (mid > left):
                 left = mid 
             bottom -= 1

             # 对左边界进行折半，可以缩小下边界
             t = top
             b = bottom
             while (t <= b):
                 mid = (t + b) // 2 
                 if array[mid][left] == target:
                      return True
                 elif array[mid][left] > target:
                      b = mid - 1 
                 else: 
                      t = mid + 1 
             if (t < mid):
                 t = mid
             left += 1

             # 对右边界进行折半，可以缩小上边界
             t = top
             b = bottom
             while (t <= b):
                mid = (t + b) // 2 
                if array[mid][right] == target:
                     return True
                elif array[mid][right] > target:
                     b = mid - 1 
                else:
                     t = mid + 1 
             if (b > mid):
                 b = mid 
             right -= 1 

        return False


if __name__ == "__main__":
    ret = Solution().Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]])
    print(ret)
```

## [面试题05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

- 解题思路： `字符串相关操作`

## [面试题06. 从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/)

- 递归法

  递归是由计算机帮助实现 “栈” 结构

  ```python
  class Solution:
      stack = []
      def reversePrint(self, head: ListNode) -> List[int]:
          if not head: return []
          return self.reversePrint(head.next) + [head.val]
  ```

- 数据结构——栈 

  ```python
  class Solution:
      # 返回从尾部到头部的列表值序列，例如[1,2,3]
      def printListFromTailToHead(self, listNode):
          stack = []
          while listNode:
              stack.append(listNode.val)
              listNode = listNode.next
         return stack[::-1]
  ```

## [面试题07. 重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)

### Best Answer

- 解题思路:

  - 数据结构——二叉树

    根据 pre 确定 根节点

    根据 vin 确定左右子树的大小

  - 递归编程

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200512123358.png" style="zoom:50%;" />

- 注意点

  需要根据中序遍历结果，确定左子树长度  `tin.index(value)` 

```python
class TreeNode:
     def __init__(self, x):
          self.val = x
          self.left = None
          self.right = None
        
class Solution:
    # 返回构造的TreeNode根节点
    def reConstructBinaryTree(self, pre, tin):
        # write code here
        if len(pre) == 0 :
           return None
        if len(pre) == 1 :
           return TreeNode(pre[0])
        
        value = pre[0]
        root = TreeNode(value)
        # 截取左子树
        preLeft = pre[1:tin.index(value) + 1] # 先序遍历，从第二个开始截图 左子树长度的 数组
        tinLeft = tin[:tin.index(value)] # 中序遍历

        # 截取右子树
        preRight = pre[tin.index(value) + 1:] # 先序遍历， 左子树后的数组元素是 右子树
        tinRight = tin[tin.index(value) + 1:] # 中序遍历

        root.left = self.reConstructBinaryTree(preLeft, tinLeft)
        root.right = self.reConstructBinaryTree(preRight, tinRight)
        return root
      
if __name__ == "__main__":
    sol = Solution().reConstructBinaryTree([1,2,4,5,3,6,7],[4,2,5,1,6,3,7])
    print(sol)
```



## [面试题09. 用两个栈实现一个队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

### Best Answer

- 解题思路:
  **栈是后进先出(LIFO)，队列是先进先出(FIFO)。**
可以使用2个栈来表示，一个表示入栈，还有一个表示出栈，出栈的顺序与入栈的顺序相反。
  
  第一个栈弹出后压入第二个栈就可以了
  
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

  # 自定义实现
  class Stack:
      # item = [] 这样的用法是错误的，因为此时有两个栈实例都会使用此变量
      def __init__(self):
         self.item = [] 
          
      def push(self, node):
          self.item.append(node)
          
      def pop(self):
          v = self.item.pop()
          return v
          
      @property
      def length(self):
          return len(self.item)
      
      def isEmpty(self):
          if self.length > 0:
              return False
          else:
              return True
  ```
  
- 图解
	> 参考：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/fu-zhu-zhan-python3-c-by-z1m/

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200703134155.png)

```python
class CQueue:

    def __init__(self):
        # s1 用于存储，相当于仓库; s2 用于输出
        self.s1, self.s2 = [], []

    def appendTail(self, value: int) -> None:
        self.s1.append(value)

    def deleteHead(self) -> int:
        if self.s2: return self.s2.pop() 
        while self.s1: # 如果 s1 为空，尝试把 s2 数据换过来
            self.s2.append(self.s1.pop())
        if self.s2: return self.s2.pop() # 再次尝试取数据
        else: return -1
```

## [面试10- I. 斐波那契数列【动态规划经典】](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

## [面试10- II. 青蛙跳台阶问题【动态规划经典】](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

### Best Answer【动态规划】

- 解题思路：`动态规划`动态规划解析：

  > 作者：[jyd](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/solution/mian-shi-ti-10-i-fei-bo-na-qi-shu-lie-dong-tai-gui/)
  >
  > 时间复杂度：O(n) 空间复杂度O(n)

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200703145136.png)

```python
class Solution:
    def fib(self, n: int) -> int:
        fibArr = [0, 1]
        for i in range(2, n + 1):
            fibArr.append(fibArr[i - 1] + fibArr[i - 2])
        return fibArr[n] % 1000000007
```



### Other Answer 【循环求余法】

- 解题速率：`动态规划的改进` 

  > 作者：[jyd](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/solution/mian-shi-ti-10-i-fei-bo-na-qi-shu-lie-dong-tai-gui/)
  >
  > 时间复杂度：O(n)   **空间复杂度O(1)**

  动态规划的空间复杂度 O(n) ，可以不存储中间结果。

```python
class Solution:
    def fib(self, n: int) -> int:
        a, b = 0, 1
        for _ in range(n):
            a, b = b, a + b
        return a % 1000000007
```

### Other Answer【分治法+记忆化搜索】

- 解题思路： `分治法` + `记忆化搜索`

  传统的分治法会产生大量重复计算，一定会超时。通过将结果固定下来可以加快运算速度

  ```python
  class Solution:
      def fib(self, n: int) -> int:
          def F(n):
              if n in memory: return memory[n]
              value = F(n-1) + F(n-2)
              memory[n] = value 
              return memory[n]
          memory = {0:0, 1:1}
          return F(n) % 1000000007
  ```

  

## [面试题11. 旋转数组的最小数字【中高难】](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

### Best Answer【变形二分查找】

- 解题思路：

  > 时间复杂度O(n)  空间复杂度 O(1) 

  变形的二分查找，但是有一些坑

  a. 正确情况下的二分查找

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200513113239.png" style="zoom: 67%;" />

  b. 特殊情况

  当出现重复数字情形的时候，**直接缩小左边界（因为最小值总是在右侧出现）**
  
  情形4 可以适应非递增数列的最小值为队首元素的情形。最后的代码非常巧妙
  
  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200513113538.png" style="zoom:67%;" />

```python
class Solution:
    def minNumberInRotateArray(self, rotateArray):
        left = 0
        right = len(rotateArray) - 1
        while left < right: # 不能是 <=
            # 加入特殊情况，非递减数组的最小值就是队首
            if rotateArray[left] < rotateArray[right]:
                return rotateArray[left]
            mid = (left + right) // 2 
            if rotateArray[mid] > rotateArray[left]:
                 left = mid + 1  # 一般都是在右侧，所以放心加1
            elif rotateArray[mid] < rotateArray[right]:
                 right = mid # 此时 mid 可能是最小值，不能排除
            else:
                 left += 1  # 巧妙避免了offer书上说的坑点（1 0 1 1 1）
        return rotateArray[left]
```

- 二分法解题需要考虑的情况

  -  `while left <= right` 是错误的

    实例：[2,2,2,0,1]  

    错误输出 2 ，实际上是 0

  - `right = mid` 提现了最小值一般是在右侧

  - 考虑到存在有序的情况，单独处理

### Other Answer 【直接搜索】

> 时间复杂度： O(n)  空间复杂度: O(1)

```python
class Solution:
    def minNumberInRotateArray(self, rotateArray):
        if not rotateArray:
            return 0
       
        for i in range(1, len(rotateArray)):
            if rotateArray[i-1] > rotateArray[i]:
                return rotateArray[i]
        return rotateArray[0]
```



## [面试题12. 矩阵中的路径](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/)

### Best Answer

- 解题思路:  `DFS 深度搜索`

```python
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(i, j, word):
            if not word: return True # 已经找到
            if not (0 <= i <= len(board) - 1 and \
               0 <= j <= len(board[0]) - 1 and \
               board[i][j] == word[0]): return False
            flag.append((i, j)) # 加入访问过的节点
            for d in dirction:
                ni, nj = i + d[0], j + d[1]
                if (ni, nj) not in flag: # 判断有无走过
                     if dfs(ni, nj, word[1:]): return True
            flag.remove((i, j)) # 走完一定要回溯回状态
            return False
        
        dirction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        flag = []  # 标记走过的格子
        for i in range(len(board)):
            for j in range(len(board[0])):
                if dfs(i, j, word): 
                    return True
        return False
```

- 重点元素：

  > - 终止条件 `if not word: return True ` 不能漏掉
  >
  > - 访问过的节点矩阵：两种实现方法  **邻接矩阵表示法、稀疏矩阵标识方式**
  >
  >    `flags = [[0]*ncol for _ in range(nrow)]`  ，通过设置 `flags[j][i] = True`
  >
  >   `flags = [(1, 2), (3,4)]`
  >
  > - 一定要注意结束后 `回溯状态`



### Graceful Answer 【精妙写法】

> 参考自: [Krahets-Leetcode 题解](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/solution/mian-shi-ti-12-ju-zhen-zhong-de-lu-jing-shen-du-yo/)

```python
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(i, j, k):
            if not 0 <= i < len(board) or \
               not 0 <= j < len(board[0]) or \
               board[i][j] != word[k]: 
                  return False # 判断都放在这里
            if k == len(word) - 1: return True
            tmp, board[i][j] = board[i][j], '/' # 直接修改原矩阵
            res = dfs(i + 1, j, k + 1) or dfs(i - 1, j, k + 1) or dfs(i, j + 1, k + 1) or dfs(i, j - 1, k + 1)
            board[i][j] = tmp
            return res

        for i in range(len(board)):
            for j in range(len(board[0])):
                if dfs(i, j, 0): return True
        return False
```



## [面试题13. 机器人的运动范围](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/solution/mian-shi-ti-13-ji-qi-ren-de-yun-dong-fan-wei-dfs-b/)

### My Answer【DFS 深度搜索改进】

- 解题思路：`DFS 深度搜索` + `剪枝`

  上一题同样是 `DFS` 算法，其中提到一定要注意 `状态回溯` 。本题则不同，因为是求的  ***最多访问到的格子***，    ***最多访问的路径***  。所以 辅助矩阵 `visited` 是记录访问到的格子，最后返回的结果也是 `len(visited)`

  - 终止条件： `下标越界、题目条件限制、节点已访问`
  - 计算节点位数和的方法可以尝试 `memory` 记忆矩阵做缓存
  - 剪枝体现在：根据题意，只需要访问 `右`、`下` 两个方向即可。

```python
class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        def cal_digit(x):
            if not x in memory:
                ret = sum([int(_) for _ in str(x)])
                memory[x] = ret
            return memory[x]

        def dfs(i, j):
            if i >= m or j >=n: return  # 下表越界
            if cal_digit(i) + cal_digit(j)> k: return # 题目条件限制 
            if (i, j) in visited: return # 节点已访问过
            visited.append((i, j))
            dfs(i + 1, j)
            dfs(i, j + 1)
        
        visited = []
        memory = {}
        dfs(0, 0)
        return len(visited)
```

计算位数的方式：

```python
# 循环取余
def cal_digit(x):
    if not x in memory:
        ret, y = 0, x
        while y:
            ret += y % 10
            y = y // 10
        memory[x] = ret
    return memory[x]

# 字符串计算
def cal_digit(x):
    if not x in memory:
       ret = sum([int(_) for _ in str(x)])
       memory[x] = ret
    return memory[x]
```

### Best Answer【DFS 深度搜索】

- 解题思路：`DFS 搜索` + `数位和计算方式改进`

  > 参考：[Krahets-解题](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/solution/mian-shi-ti-13-ji-qi-ren-de-yun-dong-fan-wei-dfs-b/)
  >
  > [Krahets's Blog](https://krahets.gitee.io/) 这个大神些的东西，真的比原书的作者写的解法好，而且是python版

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200704123005.png)

  数位和增量公式：

  ```python
  s_x + 1 if (x + 1) % 10 else s_x - 8
  ```
![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200514214717.png) 

 **代码如下【很精妙的写法】：**

  ```python
  class Solution:
      def movingCount(self, m: int, n: int, k: int) -> int:
          def dfs(i, j, si, sj):
              if i >= m or j >= n or k < si + sj or (i, j) in visited: return 0
              visited.add((i,j))
              return 1 + dfs(i + 1, j, si + 1 if (i + 1) % 10 else si - 8, sj) \
                       + dfs(i, j + 1, si, sj + 1 if (j + 1) % 10 else sj - 8)
  
          visited = set()
          return dfs(0, 0, 0, 0)
  ```

### Best Answer 【BFS 广度搜索】

解题思路：`BFS 广度搜索`

```python
class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        queue, visited,  = [(0, 0, 0, 0)], set()
        while queue:
            i, j, si, sj = queue.pop(0)
            if i >= m or j >= n or k < si + sj or (i, j) in visited: continue
            visited.add((i,j))
            queue.append((i + 1, j, si + 1 if (i + 1) % 10 else si - 8, sj))
            queue.append((i, j + 1, si, sj + 1 if (j + 1) % 10 else sj - 8))
        return len(visited)
```



## [面试题14- I. 剪绳子【非常经典】](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)

> 参考：[腐烂的橘子🍊](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xiang-jie-bao-li-di-gui-ji-yi-hua-ji-zhu-dong-tai-/)

### Answer 01 【暴力法】

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200514215522.png" style="zoom: 50%;" />

下面我们手算一下 $F(4)$ 的取值是从 $F(3)\times1, 3 \times 1;F(2)\times 2, 2\times 2;F(1)\times3, 1\times3$ 中挑选出最大的值。可以归纳出如下递归函数

$$
F(n)=max(i\times(n-i),i\times F(n-i)),i=1,2,...,n-2
$$

暴力法存在大量计算一定会**超时**，所以一般暴力法都是搭配 `记忆化矩阵` 一起 `食用`

### Answer 02 【记忆化搜索】【自顶向下】

- 解题思路：**记忆化技术（自顶向下）**

  递归函数中存在大量重复的计算，记忆化技术，可以帮助缩小时间，通过计算机验证

  > 时间复杂度 $O(n^2)$  空间复杂度 $O(n)$

  ```python
  class Solution:
      def cuttingRope(self, n: int) -> int:
          def f(n):
              if n in memory: return memory[n]
              res = -1
              for i in range(1, n):
                  res = max(res, f(i) * (n - i), i * (n - i))
              memory[n] = res
              return memory[n]
          memory = {1: 1} # 可以将终止条件设置在 记忆化矩阵中
          return f(n)
  ```


### Best Answer 【动态规划】【自底向上】

- **解题思路：动态规划（自底向上）(推荐方法)**

  > 时间复杂度 `O(n)` 空间复杂度 O(n)

  动态规划的核心是，设定边界条件 和 状态转移方程 。

  建议一维动态数组 `dp` :

  - 边界条件：$dp[1] = dp[2] = 1$ ，表示长度为 2 的绳子最大乘积为 1；
  - 状态转移方程： $dp[i] = max(dp[i], max((i-j)*j, j*dp[i-j]))$

  ![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200704150131.png)

  ```python
  class Solution:
      def cuttingRope(self, n: int) -> int:
          d = [ 0 for _ in range(n + 1)]
          d[1], d[2] = 0, 1
          for i in range(3, n+1):
              res = -1
              for j in range(1, i // 2 + 1):
                  res = max(res, j * (i - j), j * d[i-j])
              d[i] = res
          return d[n]
  ```

### Best Answer 【动态规划空间优化】【自底向上】

> 同 面试题10-I 斐波那契数列一样。同样可以针对空间复杂度优化

```python
# 作者：z1m
# 链接：https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xiang-jie-bao-li-di-gui-ji-yi-hua-ji-zhu-dong-tai-/

class Solution:
    def cuttingRope(self, n):
        dp = [0, 1, 1]

        for i in range(3, n + 1):
            dp[i % 3] = max(max(dp[(i - 1) % 3], i - 1),
                    2 * max(dp[(i - 2) % 3], i - 2),
                    3 * max(dp[(i - 3) % 3], i - 3))
        return dp[n % 3]
```

### Best Answer 【数学推导】

这一部分属于数据公式的证明，可以参考如下教程，比较清晰

> [面试题14- I. 剪绳子（数学推导 / 贪心思想，清晰图解）](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/mian-shi-ti-14-i-jian-sheng-zi-tan-xin-si-xiang-by/)



## [面试题15-二进制中的1](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

- 解题思路：`位操作`

  - 原码、反码、补码相关概念。 原码 取反 + 1 ==> 补码
  
    > 教程：[原码, 反码, 补码 详解](https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html)
  
  - 相关位运算
  
    ```
    n & 1 # n & 1 验证最后一位是否是1
    n >> 1 # 等价于 n // 2 
    n & (n - 1) # 
    ```
  

### My Answer 【无符号位】【逐位判断】

> 时间复杂度 $O(log_2n)$ 空间复杂度 $O(1)$

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            res += n & 1
            n >>= 1
        return res
```



### My Answer 【有符号位】【诸位判断】

```python
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        if n < 0:
            n = n & 0xffffffff
        while n:
            res += n & 1
            n >>= 1
        return res
```



### Graceful Answer【无符号】【技巧法】

- 解题思路：技巧： `n & (n - 1)`
  - $(n - 1)$ 二进制最右边的 1变成0，0变成1
  - $n\times(n - 1)$ 二进制最右边的 1 变成 0，其余保持不变 。每一次 $n\times(n - 1)$都会消去一个0，直到消完为止。

  > 时间复杂度 $O(M),M 代表数字N中1的个数$ 空间复杂度: $O(1)$

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200704162344.png" style="zoom: 50%;" />

    ```python
  class Solution:
      def hammingWeight(self, n: int) -> int:
          res = 0
          while n:
              res += 1
              n &= n - 1
          return res
    ```

### Python 负数存储

> 参考 : 
>
> 1. [面试题65. 不用加减乘除做加法（位运算，清晰图解）](https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/solution/mian-shi-ti-65-bu-yong-jia-jian-cheng-chu-zuo-ji-7/)
> 2. [Python 对于负数的存储方式](https://www.runoob.com/w3cnote/python-negative-storage.html)

#### 原码、反码、补码的基本概念

首先介绍一下 原码、反码、补码的概念：

假设二进制位数共有五位，那么 **原码** 中，最高位为符号位，符号位为1代表负数，0代表正数。这样 3 和 -3 的原码可以表示为: **3 的原码 00101，-3 的原码为 10101。**

**反码** 是指，除符号位以外其余位全部取反，如 **3的原码是 00101，反码是 01010**

在计算机运算中都是以二进制运算，只能运算加法，减法也是转化为加法运算。这样，3 和 -3 的原码直接相加显然是不为0，补码就是为了解决这一类问题。我们要使 ` [3]补 + [-3]补 = 0` 

### 补码的计算

令 正数的补码 和 原码一样，即 `[3]原 = [3]补 = (00101)_b`

负数补码的计算是 原码的反码+1

如 [-3]原 = (10101)b，[-3]反=(11010)b，[-3]补=(11011)b

这样，最终 [3]补+[-3]补 = (00101)b+(11011)b = (0)b，因为最后的数字超过5位了，故为0。

下面，通过验证一下结论。

```python
bin(1) # 0b1 
bin(-1) # -0b1 负号 + 原码 （ Python 特色，Java 会直接输出补码）
bin(-1 & 0xff) # 0b11111111 # 截取8位
bin(-1 & 0xff) # 255 Python会将结果认为是正数
```

可以得出

- Python 的 bin 并不会直接显示出计算机中真实二进制数字，对于负数是直接加负号

- Python / Java 中的数字都是以 **补码** 形式存储的。但 Python 没有 `int` , `long` 等不同长度变量，即没有变量位数的概念。

  因为没有符号位，我们通过 `& 0xff` 来截取其前8位的字符。最后由

  $0b11111111 +0b1 = 0$ 可以看出，Python中真实存储的是 **补码** 



## [面试题16. 数值的整数次方](https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)

### Best Answer 【递归法】【快速幂】

- 解题思路：`快速幂`

  二分推导：

  - 当 n 为偶数： $x^n=x^{n/2}\times x^{n/2}$
  - 当 n 为奇数： $x^n=x^{n/2}\times x^{n/2}\times x$

  > 时间复杂度为 $O(log_2n)$ 空间复杂度 $O(1)$

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:
        """ 分治法: 递归版 """
        if x == 0:
            raise Exception("0 is not invalid")
        if n == 0: return 1 # 这个特别容易漏
        if n == 1: return x 

        postivate_n = abs(n)
        temp = self.myPow(x, postivate_n >> 1)
        res = temp * temp * (x if postivate_n & 1 else 1)
        return res if n > 0 else 1/res
```



### Graceful Answer 【数学递推法】【快速幂】

- 解题思路： `数据递推法` + `位运算`

  举例 $n = 9$ ，用二进制可表示为 $n = 9 = 1001_b$
  $$
  x^9 = 1\times x^{2^0} \times x^{2^3}
  $$
  这里，发现 $x^{2^0} = x$， 此时公式就变成
  $$
  x^9 = 1\times y \times y^3
  $$
  可以发现，只要对应二进制位为 0 的话，就不乘上去。

  ```python
  class Solution:
      def myPow(self, x: float, n: int) -> float:
          pos_n = abs(n)
          res = 1
          while pos_n:
              res = res * (x if (pos_n & 1) else 1)
              pos_n = pos_n >> 1
              x = x * x
          return res if n > 0 else 1/res
  ```

  

## [面试题17. 打印从1到最大的n位数](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)

### Simple Answer【简单版本】

- 题解，本题对于 `Python`并不是一道简单的题目。难点是如何处理  `大数情况` 

  ```python
  list(range(1, 10**n))
  ```

### Hard Answer 【大数版本】【全排列】

- 解题思路：`全排列`

  > 参考：[面试题17. 打印从 1 到最大的 n 位数（分治算法 / 全排列，清晰图解）](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/solution/mian-shi-ti-17-da-yin-cong-1-dao-zui-da-de-n-wei-2/)
  >
  > 时间复杂度  $O(10^n)$  空间复杂度 $O(1)$

  首先实现简单的实现  两个数字`0~9` 的全排列。可以通过 `递归` 去实现

  ```python
  # 利用递归实现 全排列问题
  def printNumbers(self, n: int) -> [int]:
          def dfs(x):
              if x == n: # 终止条件：已固定完所有位
                  res.append(''.join(num)) # 拼接 num 并添加至 res 尾部
                  return
              for i in range(10): # 遍历 0 - 9
                  num[x] = str(i) # 固定第 x 位为 i
                  dfs(x + 1) # 开启固定第 x + 1 位
          
          num = ['0'] * n # 起始数字定义为 n 个 0 组成的字符列表
          res = [] # 数字字符串列表
          dfs(0) # 开启全排列递归
          return res
  
  if __name__ == "__main__":
      res = printNumbers(2)
      print(res)
  # output:  
  # ['00', '01', '02', '03', '04', '05', ...., '97', '98', '99']
  ```

  接下来，需要对 `全排列` 做一下优化，去除多余的 0 和 从1开始输出

  这样的改进，感觉就是修复逻辑漏洞一样，比较考察是否细心，这里就比较见仁见智了。这里我参考的是 [Krahets](https://leetcode-cn.com/u/jyd/) 给的解法。

  ```python
  class Solution:
      def printNumbers(self, n):
          def dfs(x):
              if x == n: # 这一步复杂筛选和生产数字序列
                  s = ''.join(self.num)[self.digit:] # '0001' => '1'
                  if s == '0': return # 只处理 ’0000‘ 全零的这一情况
                  if self.digit + self.nine == n : self.digit -= 1
                  self.res.append(s)
                  return 
              for i in range(10): # 这一步复杂生产 '00', '01', '02' 这样的序列 
                  if i == 9: self.nine += 1
                  self.num[x] = str(i)
                  dfs(x + 1)
          self.num = ['0'] * n
          self.digit = n - 1 # 代表是从最后一位开始
          self.nine = 0 # 记录是不是从 9
          self.res = []
          dfs(0)
          return self.res
  
  if __name__ == "__main__":
      res = Solution().printNumbers(2)
      print(res)
  ```

  

## [面试题18. 删除链表的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

### My Answer【单指针】

```python
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        """ 单指针法 """
        # 删除头结点
        if head.val == val: return head.next
        
        temp = head
        # 非头结点
        while temp and temp.next:
            if temp.next.val == val and temp.next:
                temp.next = temp.next.next
            temp = temp.next
        return head
```



### My Answer【双指针】【较为清晰】

```python
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        """ 双指针法 """
        if head.val == val: return head.next # 如果正好是头结点
        pre, cur = head, head.next
        while cur:
            if cur.val == val:
                pre.next = cur.next
                return head
            else:
                pre, cur = pre.next, cur.next
```



### Other Answer 【递归】

```python
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        if not head: return head
        head.next = self.deleteNode(head.next, val)
        return head.next if head.val == val else head
```



## [面试题19. 正则表达式匹配【困难】](https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/)

本题的 【Hard】模式，正是因为考虑的情形比较多，很容易一些小细节漏做。尽管整理的时候已经是二次刷题了，但是还是花了 `1H` 调试+重写才成功

### My Answer 【递归法】

- 解题思路：`递归法`

  考虑到的极端情况

  - ab <--> ab
  - ab <--> .*
  - ab* 的时候，b 零次的信息很容易漏掉
  - 终止条件： `if not p: return not a`
  - 判断相等逻辑： `p[0] in {s[i], '.'}`

  ```python
  class Solution:
      def isMatch(self, s: str, p: str) -> bool:
          if not p: return not s
          # ab <--> a* 带星号的一定要先处理，不然在 s='' p='*b'的时候会出错
          if len(p) > 1 and p[1] == '*':
               if self.isMatch(s, p[2:]): return True # 零次情况考虑到
               i = 0
               while i < len(s) and p[0] in {s[i], '.'}: # aaab a*b
                  if self.isMatch(s[i+1:], p[2:]): return True 
                  i += 1
          if p and s and p[0] in {s[0], '.'}: # ab <--> ab
               return self.isMatch(s[1:], p[1:])
          else:
               return False
  ```

  于此，我们又发现可以改进的地方

  ```python
  while i < len(s) and p[0] in {s[i], '.'}: # aaab a*b
       if self.isMatch(s[i+1:], p[2:]): return True 
  ```
  可以列一张表，看到这里的 `while` 循环是不必要的，因为递归程序会帮我们一次次最终走到 `* 三次` 的情况，不需要我们自己显式的去写出，而且就算写出了，程序也走不到。

  |        | s    | p    | value           |
  | ------ | ---- | ---- | --------------- |
  | 原始   | aaab | a*b  | *True*          |
  | * 零次 | aaab | b    | False           |
  | * 一次 | aab  | b    | False--> * 二次 |
  | * 二次 | ab   | b    | False-->* 三次  |
  | * 三次 | b    | b    | True            |

  改进的代码
  
  ```python
  class Solution:
      def isMatch(self, s: str, p: str) -> bool:
          if not p: return not s
          # ab <--> a* 带星号的一定要先处理，不然在 s='' p='*b'的时候会出错
          if len(p) > 1 and p[1] == '*':
               if self.isMatch(s, p[2:]): return True # 零次情况考虑到
               if p and s and p[0] in {s[0], '.'} and self.isMatch(s[1:], p): return True 
          if p and s and p[0] in {s[0], '.'}: # ab <--> ab
               return self.isMatch(s[1:], p[1:])
          else:
               return False
  ```

### Graceful Answer【递归法】【大神代码】

```python
# 作者：z1m
# 链接：https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/solution/hui-su-dong-tai-gui-hua-by-ml-zimingmeng/

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p: return not s
        # 第一个字母是否匹配
        first_match = bool(s and p[0] in {s[0],'.'})
        # 如果 p 第二个字母是 *
        if len(p) >= 2 and p[1] == "*":
            return self.isMatch(s, p[2:]) or \
            first_match and self.isMatch(s[1:], p)
        else:
            return first_match and self.isMatch(s[1:], p[1:])
```

### Graceful Answer 【倒查递归】【大神代码】

```python
 def isMatch(self, s: str, p: str) -> bool:
        """
        倒查递归，思路参考
        https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/solution/zhu-xing-xiang-xi-jiang-jie-you-qian-ru-shen-by-je/
        
        1. 正则串是 正常字符串匹配/. s[:n-2] p[:m-2]
        2. 正则串带 * 
              a. 先直接去除 c* s,p[:m-2] 
              b. 如果匹配*前的字符串， s[:n-1] p
        3、 正常字符串 不匹配 直接返回False
        """
        if not p : return not s
        if s and p[-1] in {s[-1], '.'}: 
            return self.isMatch(s[:-1], p[:-1])
        
        if p[-1] == '*':
            return self.isMatch(s, p[:-2]) or \
                   bool(s and p[-2] in {s[-1], '.'} and self.isMatch(s[:-1], p))
        else:
            return False
```

### Graceful Answer 【动态规划】

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200705160832.png)

```python
# 作者：z1m
# 链接：https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/solution/hui-su-dong-tai-gui-hua-by-ml-zimingmeng/
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # 边界条件，考虑 s 或 p 分别为空的情况
        if not p: return not s
        if not s and len(p) == 1: return False

        m, n = len(s) + 1, len(p) + 1
        dp = [[False for _ in range(n)] for _ in range(m)]
        # 初始状态
        dp[0][0] = True
        dp[0][1] = False

        for c in range(2, n):
            j = c - 1
            if p[j] == '*':
                dp[0][c] = dp[0][c - 2]
        
        for r in range(1,m):
            i = r - 1
            for c in range(1, n):
                j = c - 1
                if s[i] == p[j] or p[j] == '.':
                    dp[r][c] = dp[r - 1][c - 1]
                elif p[j] == '*':       # ‘*’前面的字符匹配s[i] 或者为'.'
                    if p[j - 1] == s[i] or p[j - 1] == '.':
                        dp[r][c] = dp[r - 1][c] or dp[r][c - 2]
                    else:                       # ‘*’匹配了0次前面的字符
                        dp[r][c] = dp[r][c - 2] 
                else:
                    dp[r][c] = False
        return dp[m - 1][n - 1]
```



## [面试题21. 调整数组顺序使奇数位于偶数前面](https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)

### Best Answer【快排思路】【首尾双指针】

- 解题思路： `快排思想`

  主要变动的是在判断的依据上

  > 时间复杂度 $O(n)$   空间复杂度 $O(1)$

```python
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        if not nums: return []
        left = 0
        right = len(nums) - 1 
        temp = nums[left]
        while left < right:
            while left < right and nums[right] % 2 == 0:
                right -= 1
            nums[left] = nums[right]

            while left < right and nums[left] % 2 == 1:
                left += 1
            nums[right] = nums[left]
        nums[right] = temp
        return nums
```

更加简单一点的写法

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/solution/mian-shi-ti-21-diao-zheng-shu-zu-shun-xu-shi-qi-4/

class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        i, j = 0, len(nums) - 1
        while i < j:
            while i < j and nums[i] & 1 == 1: i += 1
            while i < j and nums[j] & 1 == 0: j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        return nums
```



### Best Answer 【首端快慢指针】

```python
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        # 首端快慢指针
        i, j, size = -1, -1, len(nums)
        while i < size - 1: 
             i += 1
             if nums[i] & 1 == 1: # 找到奇数
                j += 1
                nums[i], nums[j] = nums[j], nums[i]
        return nums
```



### Simple Answer 【辅助数组】

> 时间复杂度 $O(n)$   空间复杂度 $O(n)$

```python
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        num1, num2 = [], []
        for n in nums:
            if n & 1: num1.append(n)
            else: num2.append(n)
        return num1 + num2
```



## [面试题22. 链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

### Simple Answer【辅助数组】

> 时间复杂度 $O(n)$  空间复杂度 $O(n)$ 

```
class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        arr = []
        while head:
            arr.append(head)
            head = head.next 
        return arr[-1*k]
```



### Best Answer 【双指针】

- 解题思路： `双指` ，`两步走`

```python
class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        h1, h2 = head, head
        for _ in range(k): # h1 先走 k 步
            h1 = h1.next

        while h1: # h1 走完
            h1 = h1.next
            h2 = h2.next # 此时 h2 走了 n-k 步，即倒数第k个节点
        return h2
```



## [面试题24. 反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/)

### My Answer 1 【双指针头尾交换】

> 图参考：[【反转链表】：双指针，递归，妖魔化的双指针](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/fan-zhuan-lian-biao-yi-dong-de-shuang-zhi-zhen-jia/)

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200705211833.png" style="zoom: 50%;" />

```python
def reverseList(self, head: ListNode) -> ListNode:
        """ 双指针"""
        pre, cur = None, head
        while cur:
            cur_next_bak = cur.next # 因为cur.next 马上要指向前节点，这里做个备份
            cur.next = pre

            pre = cur
            cur = cur_next_bak
        return pre
```



### My Answer 2【递归】【理解有点难度】

> 动图来自：[动画演示+多种解法 面试题24. 反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/dong-hua-yan-shi-duo-chong-jie-fa-206-fan-zhuan-li/)

![](https://pic.leetcode-cn.com/dacd1bf55dec5c8b38d0904f26e472e2024fc8bee4ea46e3aa676f340ba1eb9d-%E9%80%92%E5%BD%92.gif)

```python
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        cur = self.reverseList(head.next)
        
        head.next.next = head
        head.next = None
        return cur
```



### My Answer 3【辅助空间】

```python
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        ret = None
        while head:
            node = ListNode(head.val)
            node.next = ret
            ret = node
            head = head.next

        return ret 
```



## [面试题25. 合并两个排序的链表【经典】](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

### Best Answer 

- 引入一个头节点

```python
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        sortedList = ListNode(None) # 伪节点
        head = sortedList
        while l1 and l2:
            if l2.val > l1.val:
                node = ListNode(l1.val)
                sortedList.next = node
                l1 = l1.next
            else:
                node = ListNode(l2.val)
                sortedList.next = node
                l2 = l2.next
            sortedList = sortedList.next
        sortedList.next = l1 if l1 else l2 # 剪枝
        return head.next
```



## [面试题26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

### Best Answer 【递归】

- 解题技巧
  - 在  return 中，加入`bool(A and B)` 来代替 `if not A and not B: return False ` ，显得更加简洁

```python
class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        def recur(A, B):
            if not B: return True 
            if not A and A.val != B.val: return False  # 头结点匹配成功
            return recur(A.left, B.left) and recur(A.right, B.right)
        return bool(A and B) and  # 空树不是任意一个树的子节点\ 
               (recur(A, B) or recur(A.left, B) or recur(A.right, B))
```



## [面试题27. 二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

### Best  Answer【递归】

```python
class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        if not root: return True
        root.left, root.right = root.right, root.left
        self.mirrorTree(root.left)
        self.mirrorTree(root.right)
        return root
```



## [面试题28. 对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

### Best Answer 【递归】

```python
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def compareTree(treeA, treeB):
            if not treeA and not treeB: return True
            if not treeA or not treeB: return False

            if treeA.val != treeB.val: return False
            return compareTree(treeA.left, treeB.right) and \
                   compareTree(treeA.right, treeB.left)
        if not root: return True
        return compareTree(root.left, root.right)
```



## [面试题29. 顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

My Answer 【寻找规律】

- 解题思路：

  可以通过观察，发现每次 横向移动的时候，移动的长度会减一。纵向移动同样如此。

  如一个 $3 \times 3$ 的矩阵，规律为：向右移动3次，向下移动2次，向左移动2次，向上移动1次，向右移动1次。

  我们给横向移动设置初始值值 3，纵向移动 2。每次移动完了就减一。

  > 这里需要考虑终止条件的位置：一定是在移动之前检查本方向是否已终止

  ```python
  class Solution:
      def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
          if not matrix: return []
          xlen, ylen = len(matrix[0]), len(matrix) - 1
          x, y = -1, 0
          direction = [(1, 0), (0, 1), (-1, 0), (0, -1)] # 右下左上
          dflag = 0
          ret = []
          while True:
              if not xlen: break # 在横向移动之前，检查能否移动，不能的话一定是代表结束
              for _ in range(xlen): # 横向打印
                  x = x + direction[dflag][0]
                  y = y + direction[dflag][1]
                  ret.append(matrix[y][x])
              
              xlen -= 1
              dflag = (dflag + 1) % 4
              
              if not ylen: break # 在纵向向移动之前，检查能否移动，不能的话一定是代表结束
              for _ in range(ylen): # 横向打印
                  x = x + direction[dflag][0]
                  y = y + direction[dflag][1]
                  ret.append(matrix[y][x])
              ylen -= 1
              dflag = (dflag + 1) % 4
          return ret
  ```



## [面试题30. 包含min函数的栈【思路经典】](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/)

### Best Answer 

- 解题思路：`辅助栈`

```python
class MinStack:
    def __init__(self):
        self.A, self.B = [], []

    def push(self, x: int) -> None:
        self.A.append(x)
        if not self.B or self.B[-1] >= x:
            self.B.append(x)

    def pop(self) -> None:
        if self.A.pop() == self.B[-1]:
            self.B.pop()

    def top(self) -> int:
        return self.A[-1]

    def min(self) -> int:
        return self.B[-1]
```



## [面试题31. 栈的压入、弹出序列](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)

### Best Answer 【模拟法】

- 解题思路： 
  由于题目中假定了两个队列长度相等，栈内元素不同。这一假设大大简化了问题的复杂程度

```python
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        tempList = []
        for each in pushed:
            tempList.append(each)
            while tempList and tempList[-1] == popped[0]:
                tempList.pop()
                popped = popped[1:]
            
        return True if not popped else False
```



## [面试题32 - I. 从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

### Best Answer【经典算法】【二叉树的层次遍历】

```python
class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        if not root : return []
        res = []
        queue = [root]
        while queue:
            node, queue = queue[0], queue[1:]
            res.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return res
 
# 利用 collection.deque 实现队列
class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        if not root : return []
        res, queue = [], collections.deque()
        queue.append(root)
        while queue:
            node = queue.popleft()
            res.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return res
```



## [面试题32 - II. 从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

### Best Answer 【层次遍历升级】

- 解题思路：

  核心解决的就是层与层的区分

  - 通过标记层号解决
  - 通过queue的长度来区分层

- 【标记层号】

  ```python
  class Solution:
      def levelOrder(self, root: TreeNode) -> List[List[int]]:
          if not root: return []
          res, queue = [], collections.deque()
          queue.append((root, 0))
          while queue:
              node, level = queue.popleft()
              if level > len(res) - 1: res.append([])
              res[level].append(node.val)
              if node.left: queue.append((node.left, level + 1))
              if node.right: queue.append((node.right, level + 1))
          return res
  ```

- 【根据queue长度】

  ```python
  class Solution:
      def levelOrder(self, root: TreeNode) -> List[List[int]]:
          if not root: return []
          res, queue = [], collections.deque()
          queue.append(root)
          while queue:
              _res = []
              for _ in range(len(queue)):
                  node = queue.popleft()
                  _res.append(node.val)
                  if node.left: queue.append(node.left)
                  if node.right: queue.append(node.right)
              res.append(_res)
          return res
  ```

  

## [面试题32 - III. 从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

> 参考：[面试题32 - III. 从上到下打印二叉树 III（层序遍历 BFS / 双端队列，清晰图解）](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/solution/mian-shi-ti-32-iii-cong-shang-dao-xia-da-yin-er--3/) 

### Best Answer

- 解题思路：

  - `层次遍历` + `双端队列` 

    在奇偶层节点加入上，奇数层从左端加入，偶数层在右端加入 

    ```python
    temp.appendleft()
    temp.append()
    ```

  ```python
  class Solution:
      def levelOrder(self, root: TreeNode) -> List[List[int]]:
          if not root: return []
          queue = collections.deque()
          queue.append(root)
          res = []
          while queue:
              temp = collections.deque()
              for _ in range(len(queue)):
                  node = queue.popleft()
                  if len(res) & 1 == 0: temp.append(node.val)
                  else: temp.appendleft(node.val)
                  if node.left: queue.append(node.left)
                  if node.right: queue.append(node.right)
              res.append(list(temp))
          return res
  ```

  - `层次遍历` + `奇偶逻辑分开` （略）

    在出队的时候，奇数层从左端出队，偶数层从右端出队

    ```python
    queue.popleft()
    queue.pop()
    ```

  - 仅对 `面试题32-II` 的顺序进行调整 （略）



## [面试题33. 二叉搜索树的后序遍历序列](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)

> [面试题33. 二叉搜索树的后序遍历序列（递归分治 / 单调栈，清晰图解）](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/mian-shi-ti-33-er-cha-sou-suo-shu-de-hou-xu-bian-6/)

### Best Answer 

- 解题思路：`递归分治`

  - 判断当前根是否存在错误 ，即 `是否符合  左 < 根 < 右`
  - `self.verifyPostorder(postorder[: m])` 判断左子树是否正确
  - `self.verifyPostorder(postorder[m : -1])` 判断右子树是否正确

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200707205301.png" style="zoom:50%;" />

  ```python
  class Solution:
      def verifyPostorder(self, postorder: List[int]) -> bool:
          if not postorder: return True
          # 判断是否符合 左<根<右
          root = postorder[-1]
          for i in range(len(postorder)):
              if postorder[i] > root: break
          m = i # m 为右子树的第一个元素
          for i in range(m, len(postorder) - 1):
              if postorder[i] < root: return False # 右子树出现了比根节点小的节点。
          
          return self.verifyPostorder(postorder[: m]) and \
                 self.verifyPostorder(postorder[m : -1])
  ```



## [剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

- 解题思路： `DFS`

```python
import copy
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        def dfs(root, sum):
            if not root : 
                return
            if sum == 0 and not root.left and not root.right:
                res.append(copy.copy(road))
                return 

            if root.left:
                road.append(root.left.val)
                get_value(root.left, sum - root.left.val)
                road.pop()
            if root.right:
                road.append(root.right.val)
                get_value(root.right, sum - root.right.val)
                road.pop()
            
        if not root: return []
        res = []
        road = [root.val]
        dfs(root, sum - root.val)
        return res
```



## [面试题35. 复杂链表的复制](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/)

### Best Answer【哈希表】

- 解题思路：

  直接通过 `哈希表` 去存储对应节点的地址。创建 `new` 和 `old` 两个节点。old 节点和 new 节点同步访问。对于所有的节点，只访问一次。再次访问的时候，直接返回的是 哈希表中存储的地址。

```python
class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        def copy(node):
            if not node: return node
            if node in visited:
                return visited[node]
            else:
                visited[node] = Node(node.val)
                return visited[node]
        
        if not head: return None
        visited = {}
        old = head 
        new = Node(head.val)
        visited[old] = new
        
        while old:
            new.next = copy(old.next)
            new.random = copy(old.random)
            new = new.next
            old = old.next
        return visited[head]
```



### Best Answer 【遍历搜索】【DFS】【BFS】

很容易想到通过递归去解决链表的复制问题，但是如何遍历？可以采用 DFS & BFS 的方式去实现

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200714175143.png" style="zoom:50%;" />

- 解题 思路：`DFS`

  ```python
  # 作者：z1m
  # 链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/lian-biao-de-shen-kao-bei-by-z1m/
  
  class Solution:
      def copyRandomList(self, head: 'Node') -> 'Node':
          def dfs(head):
              if not head: return None
              if head in visited:
                  return visited[head]
              # 创建新结点
              copy = Node(head.val, None, None)
              visited[head] = copy
              copy.next = dfs(head.next)
              copy.random = dfs(head.random)
              return copy
          visited = {}
          return dfs(head)
  ```

- 解题思路：`BFS`

  ```python
  class Solution:
      def copyRandomList(self, head: 'Node') -> 'Node':
          visited = {}
      
          def bfs(head):
              if not head: return head
              clone = Node(head.val, None, None) # 创建新结点
              queue = collections.deque()
              queue.append(head)
              visited[head] = clone
              while queue:
                  tmp = queue.pop()
                  if tmp.next and tmp.next not in visited:
                      visited[tmp.next] = Node(tmp.next.val, [], [])
                      queue.append(tmp.next)  
                  if tmp.random and tmp.random not in visited:
                      visited[tmp.random] = Node(tmp.random.val, [], [])
                      queue.append(tmp.random)
                  visited[tmp].next = visited.get(tmp.next)
                  visited[tmp].random = visited.get(tmp.random)
              return clone
          return bfs(head)
  ```

  

## [面试题36. 二叉搜索树与双向链表【困难】](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/)

### My Answer 【中序遍历】【辅助队列】

- 解题思路：`中序遍历` + `辅助队列`

  ```python
  class Solution:
      def treeToDoublyList(self, root: 'Node') -> 'Node':
          def dfs(cur): # 中序遍历
              if not cur: return []
              dfs(cur.left) # 左
              res.append(cur) # 中
              dfs(cur.right) # 右
  
          if not root: return None
          res = []
          dfs(root)
          # 根据 队列，前后链接链表
          for i in range(0, len(res) - 1):
              res[i].right = res[i + 1]
              res[i+1].left = res[i]
          # 头尾特殊处理
          res[0].left = res[-1] 
          res[-1].right = res[0]
          return res[0]
  ```

  

### Best Answer 【中序遍历】【双指针改进】

- 解题思路

  上述方法虽然简单，但是借助了 `辅助队列` ，可以利用双指针改进

  ```python
  class Solution:
      def treeToDoublyList(self, root: 'Node') -> 'Node':
          def dfs(cur):
              if not cur: return None
              dfs(cur.left)
              if self.pre:
                  self.pre.right, cur.left = cur, self.pre
              else:
                  self.head = cur # 此时记录的是头结点
              self.pre = cur # 最后遍历的是尾结点
              dfs(cur.right)
          
          if not root: return None
          self.pre = None
          dfs(root)
          self.head.left, self.pre.right = self.pre, self.head 
          return self.head
  ```

  

## [面试题37. 序列化二叉树【困难】](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/)

### Best Answer

- 解题思路：`层次遍历`

  我们可以根据 level 层级，限制最后生成 `队列` 的长度

  ```python
  import collections
  
  class TreeNode(object):
      def __init__(self, x):
          self.val = x
          self.left = None
          self.right = None
  
  class Codec:
  
      def serialize(self, root):
          """Encodes a tree to a single string.
          
          :type root: TreeNode
          :rtype: str
          """
          if not root: return "[]"
          res, queue = [], collections.deque()
          queue.append(root)
          level = 0
          while queue:
              for _ in range(len(queue)):
                  node = queue.popleft()
                  if node:
                     res.append(node.val)
                     queue.append(node.left)
                     queue.append(node.right)
                  else:
                     res.append("null")
              level += 1
          level -= 1 # 减一后的level是真实的 层数
          res = res[:2**level - 1]
          return "[" + ",".join([str(_) for _ in res]) + "]"
               
              
      def deserialize(self, data):
          """Decodes your encoded data to tree.
          
          :type data: str
          :rtype: TreeNode
          """
          if data == "[]": return None
          vals, i = data[1:-1].split(','), 1
          root = TreeNode(int(vals[0])) 
          queue = collections.deque()
          queue.append(root)
          while queue and i < len(vals):
              node = queue.popleft()
              if vals[i] != "null":
                   node.left = TreeNode(int(vals[i]))
                   queue.append(node.left)
              i += 1
              if vals[i] != "null":
                   node.right = TreeNode(int(vals[i]))
                   queue.append(node.right)
              i += 1
          return root
  ```

  

## [面试题38. 字符串的排列【全排列】](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)

### Best Answer

- 解题思路：`回溯` + `交换`

  ```python
  # 作者：jyd
  # 链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/mian-shi-ti-38-zi-fu-chuan-de-pai-lie-hui-su-fa-by/
  
  class Solution:
      def permutation(self, s: str) -> List[str]:
          c, res = list(s), []
          def dfs(x):
              if x == len(c) - 1:
                  res.append(''.join(c)) # 添加排列方案
                  return
              dic = set()
              for i in range(x, len(c)):
                  if c[i] in dic: continue # 重复，因此剪枝
                  dic.add(c[i])
                  c[i], c[x] = c[x], c[i] # 交换，将 c[i] 固定在第 x 位
                  dfs(x + 1) # 开启固定第 x + 1 位字符
                  c[i], c[x] = c[x], c[i] # 恢复交换
          dfs(0)
          return res
  ```

  

### My Answer

- 解题思路： `回溯` + `辅助站`

  每一位上只能使用一次，故用 `visited 矩阵` 记录的位置

  ```python
  class Solution:
      def permutation(self, s: str):
          def recur(st):
              if len(st) == len(s):
                   res.append(st)
                   return
              for i in range(len(s)):
                  if i not in visited:
                      visited.append(i)
                      recur(st + s[i])
                      visited.remove(i)
  
          visited, res = [], []
          recur("")
          return list(set(res))
  ```

  

## [面试题39. 数组中出现次数超过一半的数字](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/)

> 参考：https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/solution/mian-shi-ti-39-shu-zu-zhong-chu-xian-ci-shu-chao-3/

- 解题思路：

  -  哈希表统计法： 遍历数组 nums ，用 HashMap 统计各数字的数量，最终超过数组长度一半的数字则为众数。此方法时间和空间复杂度均为 $O(N)$ 。
  - 数组排序法： 将数组 nums 排序，由于众数的数量超过数组长度一半，因此 数组中点的元素 一定为众数。此方法时间复杂度 $O(N log_2 N)$
  - **摩尔投票法：** 核心理念为 **“正负抵消”** ；时间和空间复杂度分别为 $O(N)$ 和 $O(1)$；是本题的最佳解法。

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200708172711.png" style="zoom:50%;" />

### Best Answer 【摩尔投票法】

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        votes, count = 0, 0
        for num in nums:
            if votes == 0: x = num
            votes += 1 if num == x else -1
        # 验证 x 是否为众数
        for num in nums:
            if num == x: count += 1
        return x if count > len(nums) // 2 else 0 # 当无众数时返回 0
```



## [面试题40. 最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

- 解题思路：

  -  `快排` + `筛选`

    > 时间复杂度: $O(N log_2 N)$， 空间复杂度 $O(1)$

  - `堆排`

    > 时间复制度：$O(Nlog_2k)$ ，空间复杂度 $O(N)$

### My Answer1【快排】

- `快排` + `筛选`

  ```python
  # 快排 + 筛选
  class Solution:
      def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
          def quicksort(nums, start, end):
              if start >= end: return 
              pivot = nums[start]
              low, high = start, end
              while low < high:
                  while low < high and nums[high] >= pivot: high -= 1
                  nums[low] = nums[high]
                  while low < high and nums[low] < pivot: low += 1
                  nums[high] = nums[low]
              nums[low] = pivot
              quicksort(nums, start, low - 1)
              quicksort(nums, low + 1, end)
  
          quicksort(arr, 0, len(arr) - 1)
          return arr[:k]  # 筛选
  ```

  上面的方法没有利用到 `快排` 的性质，由于每次排完之后，存在 `左 < 中 < 右 ` 

  - `中 == k - 1` 我们已经获得了前K个元素，但是也没有排序
  - `中 > k - 1` 只需要在左边找
  - `中 < k - 1` 只需要在右边找

- 利用`快排` 性质

  ```python
  class Solution:
      def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
          def quicksort(nums, start, end):
              if start >= end: return 
              pivot = nums[start]
              low, high = start, end
              while low < high:
                  while low < high and nums[high] >= pivot: high -= 1
                  nums[low] = nums[high]
                  while low < high and nums[low] < pivot: low += 1
                  nums[high] = nums[low]
              nums[low] = pivot
              if low == k - 1:
                  return arr[:k]
              elif low < k - 1:
                  quicksort(nums, low + 1, end)
              else:
                  quicksort(nums, start, low - 1)
  ```

  

### My Answer2 【堆排】

```python
class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
       def adjust_heap(nums, i, size):
           lchild = 2 * i + 1
           rchild = 2 * i + 2
           max = i
           if i < size / 2:
               if lchild < size and nums[lchild] > nums[max]: max = lchild
               if rchild < size and nums[rchild] > nums[max]: max = rchild
               if max != i:
                   nums[max], nums[i] = nums[i], nums[max]
                   adjust_heap(nums, max, size)
        
       def build_heap(nums):
            size = len(nums)
            for i in range(0, size >> 1)[::-1]:
                adjust_heap(nums, i, size)
       
       if not arr: return []
       arr = [-1 * _ for _ in arr]
       build_heap(arr)
       size = len(arr)
       for i in range(len(arr) - 1, len(arr) - 1 - k, -1):
        #    print(arr)
           arr[0], arr[i] = arr[i], arr[0]
           adjust_heap(arr, 0, i)
       arr = [-1 * _ for _ in arr][::-1]
       
       return arr[:k]
```

堆排可以直接使用 `python` 自带的 `堆结构`

```python
import heapq
from random import shuffle
class Solution:
    def getLeastNumbers(self, arr, k: int) :
        shuffle(arr)  # 随机排序
        heapq.heapify(arr) # 建立堆结构
        return heapq.nsmallest(k, arr)
```

> heapq 模块的使用 
>
> ```python
> heapq.heappush(heap, item) # 添加元素
> heapq.heappop(heap) # 弹出元素
> heapq.heappushpop(heap, item) #添加元素后，再弹出一个元素，比 heappush + heappop 更高效
> heapq.heapreplace(heap, item) #添加元素后，返回的是原数组中最小的元素
> heapq.heapify(x) # 堆的初始化
> heapq.nlargest(n, heap) # 最大n个元素
> heapq.nsmallest(n, heap) # 最小n个元素
> 
> # heapreplace vs heappushpop 
> >>> a = [2,7,4,0,8,12,14,13,10,3,4]
> >>> heapify(a)
> >>> b = a[:]
> >>> heappushpop(a, -1)
> -1
> >>> heapreplace(b, -1)
> 0
> ```
>
> 

## [面试题41. 数据流中的中位数【困难】](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

### Best Answer【优先队列】

- 解题思路：

  维持两个根堆，一个是大顶堆A，一个是小顶堆B。其中A的最大元素 小于 B的最小元素。

  寻找中位数的思路：**令m为A的长度，n为B的长度，N为总长度​**

  - 当 m = n 时，证明N为偶数，中位数为 (A的堆顶 + B的堆顶)/2
  - 当 m != n 时，证明N为奇数，中位数为A的堆顶(也可以取B的堆顶，类推)
  - Tips:
    - 为了保存中位数一直在A的堆顶，要保证A的长度始终要大于等于B。而且所有元素一定要在A，B中都调整过。
    - 当 m = n 时，应该向A推元素，故应**先推B，再推A**，此时 A 有 m + 1 个，B有 n 个
    - 当 m != n 时，应该向B推元素，因为我们始终保持的是A的数量大于B。即 m >= n。故应**先推A再推B**，此时 A 有 m，B 有 n + 1 个
    - 我们可以看出，先推的那个总是长度不变的，可以直接使用 `heapq.hashpushpop()` 方法
    - A 是大堆顶，故 `push&pop` 的时候应该注意使用负数。heapq 实现了小顶堆，需要借助 负号 实现大根堆

  > 时间复杂度：$O(logn)$。堆插入和删除需要$O(logn)$，查找中位数需要$O(1)$。
  > 空间复杂度：$O(n)$

  ```python
  # 作者：jyd
  # 链接：https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/mian-shi-ti-41-shu-ju-liu-zhong-de-zhong-wei-shu-y/
  
  class MedianFinder:
  
      def __init__(self):
          self.max_heap, self.min_heap = [], []
  
      def addNum(self, num: int) -> None:
          if len(self.max_heap) == len(self.min_heap):
               heapq.heappush(self.max_heap,
                              -heapq.heappushpop(self.min_heap, num)) 
          else:
               heapq.heappush(self.min_heap,
                              -heapq.heappushpop(self.max_heap, -num))
              
      def findMedian(self) -> float:
          if len(self.max_heap) == len(self.min_heap):
              return (- self.max_heap[0] + self.min_heap[0])/2
          else:
              return - self.max_heap[0]
  ```



### Best Answer【折半直接插入】

> 参考：[腐烂的橘子🍊](https://leetcode-cn.com/u/z1m/)  [图解 排序+二分查找+优先队列](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/you-xian-dui-lie-by-z1m/)

- 解题思路：

  排序法是针对无序数组，本题中最适合的排序方法是 **直接插入排序**，Python 自带的 `bisect` 已经为我们提前实现了 `二分插入` 

  Tips:

  - 当 数组长度为奇数时，直接返回中位数：`nums[len(nums)>>1]`

  - 当 数组长度为偶数时，直接返回平均数：

    `(nums[len(nums)//2] + nums[len(nums)//2 +1])/2`

  ```python
  # a 查找数组；x为插入的元素；lo,hi 约定为数组的范围
  bisect.insort(a, x, lo=0, hi=len(a)) # 折半插入，若存在x则插入x的右侧
  bisect.insort_right # 同 bisect.insort
  bisect.insort_left #  折半插入，若存在x则插入x的左侧
  # 有以下三种方法，对应上面的插入方法。不同的是，它们只返回应插入的位置
  bisect.bisect
  bisect.bisect_left
  bisect.bisect_right
  ```

  ```python
  class MedianFinder:
  
      def __init__(self):
          self.A = []
  
      def addNum(self, num: int) -> None:
          bisect.insort(self.A, num)
  
      def findMedian(self) -> float:
          size = len(self.A)
          if size & 1 == 0: # even
              return (self.A[size >> 1] + self.A[(size >> 1) - 1]) / 2 
          else:
              return self.A[size >> 1]  
  ```



## [面试题42. 连续子数组的最大和](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/)

> 参考[Krahets](https://leetcode-cn.com/u/jyd/) 的 [方法总结](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/mian-shi-ti-42-lian-xu-zi-shu-zu-de-zui-da-he-do-2/)

| 常见解法 | 时间复杂度 | 空间复杂度 |
| -------- | ---------- | ---------- |
| 暴力搜索 | $O(N^2)$   | $O(1)$     |
| 分治思想 | $O(NlogN)$ | $O(logN)$  |
| 动态规划 | $O(N)$     | $O(1)$     |
| 剪枝法   | $O(N)$     | $O(1)$     |

### Best Answer 【暴力+剪枝】

- 解题思路：

  只需要 保证求出的 sum 始终大于 0 即可，若是小于0，完全可以直接丢弃。

  > 本质算是暴力法的剪枝，这种剪枝巧妙的利用了规律

  ```python
  # 64ms
  class Solution:
      def maxSubArray(self, nums: List[int]) -> int:
          s, ret = 0, -101
          for i in nums:
              if s < 0: s = 0
              s += i
              ret = max(ret, s)
          return ret 
  ```



### Best Answer 【动态规划】

<img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200710162955.png" style="zoom:50%;" />

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        for i in range(1, len(nums)):
            nums[i] += max(nums[i - 1], 0)
        return max(nums)

# 作者：jyd
# 链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/mian-shi-ti-42-lian-xu-zi-shu-zu-de-zui-da-he-do-2/
```

上面 jyd 在处理的时候，直接在 nums 基础上进行了运算，可以说节约了 $O(N)$ 的空间使用，非常精妙



### Other Answer 【分治法】

> 参考资料：
>
> [最大子序和（暴力法 + 分治法 + DP）- Python3](https://leetcode-cn.com/problems/maximum-subarray/solution/bao-li-qiu-jie-by-pandawakaka/)
>
> [【超全·4种解法】动态规划及优化、贪心法、分治法（JavaScript实现）](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/chao-quan-4zhong-jie-fa-dong-tai-gui-hua-ji-you-hu/)

- 解题思路：

  - 将数组分为 2 部分。例如 [1, 2, 3, 4] 被分为 [1, 2] 和 [3, 4]
  - 通过递归计算，得到左右两部分的最大子序列和是 lsum，rsum
  - 从数组中间开始向两边计算最大子序列和 cross
  - 返回 max(lsum, cross, rsum)

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200710162955.png" style="zoom:50%;" />

  **Tips:**

  - 由于 `len(nums)==1` 保证了 `mid=len(nums)//2 - 1` 和 `mid - 1` 是存在的
  - 中间值计算一定是从 mid 开始的连续值

  ```python
  # 544 ms
  class Solution:
      def maxSubArray(self, nums: List[int]) -> int:
          def crossSum(nums):
              mid = len(nums) // 2 - 1 
              left_max_sum, left_sum = nums[mid], 0
              for i in nums[mid: : -1]:
                  left_sum += i
                  left_max_sum = max(left_max_sum, left_sum)
              
              right_max_sum, right_sum = nums[mid + 1], 0 
              for i in nums[mid + 1: : 1]:
                  right_sum += i
                  right_max_sum = max(right_max_sum, right_sum)
              return left_max_sum + right_max_sum
  
          if len(nums) == 1: 
              return nums[0]
          mid = len(nums) >> 1
          left_max = self.maxSubArray(nums[:mid])
          right_max = self.maxSubArray(nums[mid:])
          mid_max = crossSum(nums)
          return max(left_max, right_max, mid_max)
  ```

## [剑指 Offer 43. 1～n整数中1出现的次数](https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/)

待整理

## [剑指 Offer 44. 数字序列中某一位的数字](https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/)

### Best Answer【分析】

- 解题思路：

  首先，我们要确定，要找的数字是 几位数，数字有如下规律：

  | 数字    | 位数 | 个数                       |
  | ------- | ---- | -------------------------- |
  | 0~9     | 1    | 10                         |
  | 10~99   | 2    | 100 - 10                   |
  | 100~999 | 3    | 1000 - 100 - 10            |
  |         | n    | $10^n - 10^{n-1}-\dots-10$ |

   根据输入的 n 可以很容易的确定位数 X，这样 $(n-(10^n - 10^{n-1}-\dots-10))/X$ 就是X位上的数字的序号。

```python
class Solution:
    def findNthDigit(self, n: int) -> int: 
        digit = 1
        temp = 9 * (10 ** (digit - 1) * digit)
        while n - temp > 0: # 确定位数 digit
            n -= temp
            digit += 1
            temp = 9 * (10 ** (digit - 1) * digit)
        
        base = 10 ** (digit - 1)
        i, j = n // digit, n % digit # n 是代表digit 位上第n个数
        cur = base + i - 1 + (1 if j > 0 else 0)
        return int(str(cur)[j-1])
```





## [面试题45. 把数组排成最小的数](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

- 解题思路： `自定义排序规则`

  排序判断规则： 设 $nums$任意两数字的字符串格式 $xx$ 和 $yy$ ，则
  若拼接字符串 $x + y > y + x$ ，则 $m > n$ ；
  反之，若 $x + y < y + x$ ，则 $n < m$ ；

  > 参考： [Krahets](https://leetcode-cn.com/u/jyd/) [面试题45. 把数组排成最小的数（自定义排序，清晰图解）](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/)

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200711124357.png" style="zoom: 50%;" />

  ```python
  def minNumber(self, nums) :
          """ python 快排实现 自定义规则 """
          def greater_than(x, y):
              return True if x + y >= y + x else False
          
          def quick_sort(nums, start, end):
              if start >= end: return 
              low, high = start, end
              pivot = nums[low]
              while low < high:
                  while low < high and greater_than(nums[high], pivot): 
                      high -= 1
                  nums[low] = nums[high]
                  while low < high and not greater_than(nums[low], pivot): 
                      low += 1
                  nums[high] = nums[low]
              nums[low] = pivot
              quick_sort(nums, start, low - 1)
              quick_sort(nums, low + 1, end)
          
          nums_str = [str(_) for _ in nums]
          quick_sort(nums_str, 0, len(nums_str) - 1)
          return ''.join(nums_str)
  ```

  第二种解法，使用 python 自定义排序规则

  ```python
  # 作者：jyd
  # 链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/
  
  class Solution:
      def minNumber(self, nums: List[int]) -> str:
          def sort_rule(x, y):
              a, b = x + y, y + x
              if a > b: return 1
              elif a < b: return -1
              else: return 0
          
          strs = [str(num) for num in nums]
          strs.sort(key = functools.cmp_to_key(sort_rule))
          return ''.join(strs)
  ```

  

## [面试题46. 把数字翻译成字符串](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/)

### My Answer 【递归解法】

- 解题思路：

  `递归法`

  ```python
  class Solution:
      def translateNum(self, num: int) -> int:
          """ 递归解法 """
          def dfs(s):
              if s == "": 
                  self.ret += 1
                  return 
              dfs(s[1:])
              if len(s) > 1 and s[:2] >= '10' and s[:2]<="25": # 符合条件就继续向下
                  dfs(s[2:])
          self.ret = 0
          dfs(str(num))
          return self.ret
  ```

  

### Best Answer 【动态规划】

- 解题思路

  **动态规划-转移方程**
  $$
  dp(i)=\left\{ \begin{aligned} dp(i - 2) + dp(i - 1) , \quad & between \ 0..25 
   \\dp(i - 1), \quad & else \end{aligned} \right.
  $$
  

  **边界条件**
  $$
  dp(0) = dp(1) = 1
  $$
  

  ```python
  class Solution:
      def translateNum(self, num: int) -> int:
          """ dp 表达式改写 """
          s = str(num)
          dp = [0] * (len(s) + 1)
          dp[0] = dp[1] = 1  # dp 从 1 开始计数
          for i in range(2, len(s) + 1): 
              if 10 <= int(s[i-2 : i]) <= 25:  # s 从 0 开始计数
                  dp[i] = dp[i - 1] + dp[i - 2]
              else:
                  dp[i] = dp[i - 1]
          return dp[len(s)]
  ```

- 从右向左，不存储中间变量的 `dp改进`

  ```python
  class Solution:
      def translateNum(self, num: int) -> int:
          """
          python dp 表达式改写，但是不存储中间变量: 节省了 dp 列表的空间占用
          """
          s = str(num)
          a = b = 1
          for i in range(len(s) - 2, -1, -1):
              a, b = (a + b if "10" <= s[i:i + 2] <= "25" else a), a
          return a
  ```

- 从右向左，`字符串` 改为 `求余`

  ```python
  def translateNum(self, num: int) -> int:
          """
          python 求余改写
          """
          a = b = 1
          y = num % 10
          while num != 0:
              num //= 10
              x = num % 10
              a, b = (a + b if 10 <= 10 * x + y <= 25 else a), a
              y = x
          return a
  ```
  
  

## [面试题47. 礼物的最大价值](https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/)

### Answer1 【DFS】【超时】

- 解题思路：

  方向可以优化为 ***右方*** 和  ***下方***

  访问了太多路径，最终超时（20/62）

```python
class Solution:
    def maxValue(self, grid: List[List[int]]) -> int:
        def dfs(i, j):
            if i >= m or j >=n: return
            self.value += grid[i][j]
            self.ret = max(self.ret, self.value)
            dfs(i + 1, j)
            dfs(i, j + 1)
            self.value -= grid[i][j]

        self.value, self.ret = 0, 0
        m, n = len(grid), len(grid[0])
        dfs(0, 0)
        return self.ret
```

### Best Answer 【动态规划】

- 题目解析：

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200711214955.png" style="zoom: 50%;" />

  ```python
  def maxValue(self, grid: List[List[int]]) -> int:
          """ 直接实现的动态规划 """
          m, n = len(grid), len(grid[0])
          dp = [[0] * n for _ in range(m)]
  
          for i in range(m):
              for j in range(n):
                  if i == 0 and j == 0:
                      dp[i][j] = grid[0][0]
                  elif i == 0:
                      dp[i][j] = dp[i][j-1] + grid[i][j]
                  elif j == 0:
                      dp[i][j] = dp[i-1][j] + grid[i][j]
                  else:
                      dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
          return dp[m-1][n-1]
  ```

- 优化的动态规划

  上面的动态规划做了太多的逻辑判断，我们发现很多是不必要做的，可以统一起来。

  做法就是 dp 从下标 (1, 1)开始，最后的(m, n) 是结果。这样成功的原因是，上侧，左侧都不会产生越界错误了。

  ```python
  def maxValue(self, grid: List[List[int]]) -> int:
          """ 优化的动态规划 """
          m, n = len(grid), len(grid[0])
          dp = [[0] * (n + 1) for _ in range(m + 1)]  # dp 是 从1,1 开始的。原因是为了避免复杂的逻辑判断
          dp[1][1] = grid[0][0]
          for i in range(1, m + 1):
              for j in range(1, n + 1):
                  dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]
          return dp[m][n]
  ```

  



## [面试题48. 最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

### Best Answer【滑动窗口】+【双指针】

- 解题思路：

  - head 代表头指针，tail 代表尾指针
  - （1） 如果当前遍历到的数字没有出现过，右移区域
  - （2） 如果当前遍历到的数字出现过，左移区域

  **【借助辅助数组】**

  ```python
  class Solution:
      def lengthOfLongestSubstring(self, s: str) -> int:
          visited = {} # 借助辅助数组
          for i in set(s):
              visited[i] = 0
          head, tail = -1, 0
          res = 0
          while tail < len(s): # 终止条件是，尾巴走完
              if head + 1 < len(s) and visited[s[head + 1]] == 0:
                  head += 1
                  visited[s[head]] += 1
              else:
                  visited[s[tail]] -= 1
                  tail += 1
              res = max(res, head - tail + 1)
          return res 
  ```

  **第二种 【双指针】写法，不适用辅助数组**

  ```python
  class Solution:
      def lengthOfLongestSubstring(self, s: str) -> int:
          if len(s) < 2: return len(s)
          head, tail = 0, 0
          res = 0
          while tail < len(s):
              if s[tail] not in s[head: tail]:
                   tail += 1
              else:
                  while s[tail] in s[head: tail]:
                      head += 1
              res = max(res, tail - head)
          return res 
  ```

  > 本题中的边界条件是有点费脑子的，需要多想想



### Other Answer 【动态规划】

- 解题思路：

  > 参考资料： [Krahets](https://leetcode-cn.com/u/jyd/) 面试题48. 最长不含重复字符的子字符串（动态规划 / 双指针 + 哈希表，清晰图解）

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200712005837.png" style="zoom: 50%;" />

  通过直接翻译动态规划的方程，可以发现 `while j >= 0 and s[j] != s[i]: j -= 1` 存在大量查找，实际算法效果并不是很理想。

  解决方法是，直接存储对应元素的最靠左的位置

  ```python
  class Solution:
      def lengthOfLongestSubstring(self, s: str) -> int:
          """ 动态规划方程直接翻译 500ms """
          if not s: return 0 
          dp = [0] * len(s)
          dp[0] = 1
          for i in range(1, len(s)):
              j = i - 1
              while j >= 0 and s[j] != s[i]: j -= 1
              if j == -1: # 全部都是新元素
                  dp[i] = dp[i - 1] + 1
              elif dp[i - 1] >= i - j: # 证明 没有新的元素出现
                  dp[i] = i - j
              else: # 存在新的元素出现，范围应该扩大
                  dp[i] = dp[i - 1] + 1
          return max(dp)
  ```

  **【动态规划】 + 【哈希表】**

  ```python
   def lengthOfLongestSubstring(self, s: str) -> int:
          """
          dp 动态规范方程翻译, 哈希表改进 63ms
          """
          if not s: return 0
          dp = [0] * len(s)
          dp[0] = 1 # d[i] 代表以 s[i] 结尾的最小子字符串的长度
          dic = {}
          dic[s[0]] = 0
          for i in range(1, len(s)):
             j = dic.get(s[i], -1)
             dic[s[i]] = i
             dp[i] = dp[i - 1] + 1 if dp[i - 1] < i - j else i - j
             
          return max(dp)
  ```

  

## [面试题49. 丑数](https://leetcode-cn.com/problems/chou-shu-lcof/)

### Best Answer 【动态规划】

- 解题思路

  p1, p2, p3 是作为 2，3，5 的位置。每次是从 0 的位置开始向右走。

  ```python
  class Solution:
      def nthUglyNumber(self, n: int) -> int:
          dp = [1] * n
          p1, p2, p3 = 0, 0, 0
          for i in range(1, n):
              dp[i] = min(dp[p1] * 2, dp[p2] * 3, dp[p3] * 5)
              if dp[i] == dp[p1] * 2: p1 += 1
              if dp[i] == dp[p2] * 3: p2 += 1
              if dp[i] == dp[p3] * 5: p3 += 1
          print(dp)
          return dp[-1]
  ```



## [面试题50. 第一个只出现一次的字符](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

### Best Answer【哈希表】

```python
class Solution:
    def firstUniqChar(self, s: str) -> str:
        letter = set()
        for i in range(len(s)):
            if s[i] in letter: continue
            if s[i] in s[i+1:]:
                letter.add(s[i])
                continue
            else:
                return s[i]
        return " "
```



## [剑指 Offer 51. 数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)

### Best Answer 【折半直接插入】

- 解题思路

  直接插入排序是最容易想到的思路，因为直接插入排序是一个一个依次插入，因为每次插入的时候都需要进行比较，所以，逆序对可以看做其中间产物。

  举一个例子： **[4, 3, 1, 5]**

  | 排序数组         | 逆序对    |
  | ---------------- | --------- |
  | [**4**]          | 0         |
  | [**3**, 4]       | 1         |
  | [**1**, 3, 4]    | 1 + 2     |
  | [1, 3, 4, **5**] | 1 + 2 + 0 |

  所谓的 逆序对就是看排序后右边数字的个数

  > 查找的时间复杂度为 $O(log_2N)$ ，插入的时间复杂度为 $O(N)$

```python
class Solution:
    def reversePairs(self, nums):
        if not nums: return 0

        res = 0
        sorted = [nums[0]]
        size = len(nums)

        for i in range(1, size):
            left, right = 0, i - 1
            while left < right:
                mid = (left + right) >> 1
                if nums[i] >= sorted[mid]:
                    left = mid + 1
                else:
                    right = mid - 1
            if nums[i] >= sorted[left]: left += 1
            sorted.insert(left, nums[i])
            res += i - left
        return res
```

当然，也可以使用 Python 自带的二分插入的库  `bisect` 去改写

```python
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        sort = []
        ret = 0
        for i in range(len(nums)):
            pos = bisect.bisect_right(sort, nums[i]) # 二分查找，找到第一个大于nums[i]的位置
            sort.insert(pos, nums[i]) # 插入
            ret += i - pos # 位于插入元素右侧的个数就是逆序对的个数
        return ret 
```



### Best Answer 【归并排序】

- 解题思路：

  上面一种解法是利用了折半插入的中间产物，而实际上，归并也会产生类似的中间产物

  举例：$[4,3,1,2,5,6,8,7]$

  | 编数   | 排序过程                            | 逆序对 |
  | ------ | ----------------------------------- | ------ |
  | 原始   | [4, 3] [1, 2] [5, 6] [8, 7]         | 0      |
  | 第一遍 | **[3, 4]** [1, 2] [5, 6] **[7, 8]** | 2      |
  | 第二遍 | **[1, 2, 3, 4]** [5, 6, 7, 8]       | 4      |
  | 第三遍 | [1, 2, 3, 4, 5, 6, 7, 8]            | 0      |
  |        | 总逆序对                            | 6      |

```python
class Solution:
    def reversePairs(self, nums):
        def merge_sort(nums):
            if len(nums) < 2:
                return nums
            mid = len(nums) >> 1
            left, right = merge_sort(nums[:mid]), merge_sort(nums[mid:])
            return merge(left, right)
        
        def merge(left, right):
            l, r, temp = 0, 0, []
            while l < len(left) and r < len(right):
                if left[l] <= right[r]:
                    temp.append(left[l])
                    l += 1
                else:
                    temp.append(right[r])
                    self.res += len(left) - l
                    r += 1
            temp += left[l:]
            temp += right[r:]
            return temp
        
        self.res = 0
        merge_sort(nums)
        return self.res
```

对于统计的代码 `self.res += len(left) - l` 举一个列子 $[4, 3],[1, 2]$

| l    | r    | temp         | 逆序对 |
| ---- | ---- | ------------ | ------ |
| 0    | 0    | [1]          | 2      |
| 0    | 1    | [1, 2]       | 2      |
|      |      | [1, 2, 3, 4] |        |

主要的原因是 left[l] 代表的是 left 中第 $l$ 小的，如果 left[l] >right[l]，那么也可以说，left 中共有 $len(left) - l$ 比 $right$ 大



## [面试题52. 两个链表的第一个公共节点](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

### Answer 1【哈希表】

> 空间复杂度 $O(N)$ 不满足 $O(1)$ 的条件

```python
class Solution:
    """ 哈希表, 但是不满足空间 O(N) 要求 """
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        hash_table = set()
        while headA:
            hash_table.add(headA)
            headA = headA.next
        while headB:
            if headB in hash_table: return headB
            else: headB = headB.next
```



### Best Answer【双指针法】

- 解题思路：

  此类问题，首先考虑的是 `双指针法` ，同本节 [面试题22. 链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/) 类似

  其实总结起来就是：起点虽然不一样，但路程一样，终点一样,速度一样，必定同时到达！其中，路程是构思的关键点。

```python
def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        node1, node2 = headA, headB
        while node1 != node2:
            node1 = node1.next if node1 else headB
            node2 = node2.next if node2 else headA
        return node1
```

> 看到 `while node1 != node2` 会不会产生死循环？
>
> 不会的。原因是，最后node1，node2 的路程是一样的。最后一定是同时为null



## [面试题53 - I. 在排序数组中查找数字 I【经典】](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

### Best Answer 

**【基础二分小变形】**

```python
def searchRange(arr, l, r, target):
    leftLimit = binarySearchLeft(arr, l, r, target)
    rightLimit = binarySearchRight(arr, l, r, target)
    return [leftLimit, rightLimit]

def binarySearchLeft(arr, l, r, target):
    while l <= r:
        pivot = int(l + (r - l)/2) 
        if arr[pivot] > target:
             r = pivot - 1
        elif arr[pivot] < target:
             l = pivot + 1
        elif pivot == 0 or arr[pivot - 1] != target:
            return pivot
        else:
            r = pivot - 1
    return -1

def binarySearchRight(arr, l, r, target):
    while l <= r:
        pivot = int(l + (r - l)/ 2)
        if arr[pivot] > target:
            r = pivot - 1
        elif arr[pivot] < target:
            l = pivot + 1
        elif pivot == r or arr[pivot + 1] != target:
            return pivot
        else:
            l = pivot + 1
    return -1 
ret = searchRange([5,7,7,8,8,10], 0, 5, 8)
print(ret)
```

利用 Python 自带的 `bisect` 去处理

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        i = bisect.bisect_left(nums, target)
        j = bisect.bisect_right(nums, target)
        return j - i
```

## [剑指 Offer 53 - II. 0～n-1中缺失的数字](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)

### Best Answer 【二分法】

- 解题思路：

  - $nums[i] = i$ 左节点

  - $nums[i] \ne i$ 右节点

    最后返回的是 右节点的第一个

```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        i, j = 0, len(nums) - 1
        while i <= j:
            m = (i + j) >> 1
            if nums[m] - m == 0:
                i = m + 1
            else:
                j = m - 1
        return i
```



## [面试题54. 二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

### Best Answer 【二叉搜索树】+ 【剪枝】

二叉搜索树的中序遍历就是有序数组

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthLargest(self, root: TreeNode, k: int) -> int:
        def rightTraversal(root):
            if not root or self.k <= 0: 
                return
            rightTraversal(root.right)
            self.k -= 1
            if self.k == 0:
                self.res = root.val
            rightTraversal(root.left)
        
        self.k = k
        rightTraversal(root)
        return self.res
```



## [面试题55 - I. 二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

### Best Answer【DFS】【后序遍历】

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        def preorder(root, deep):
            if not root:
                return
            self.maxdepth = max(self.maxdepth, deep)
            preorder(root.left, deep + 1)
            preorder(root.right, deep + 1)
        
        self.maxdepth = 0
        preorder(root, 1)
        return self.maxdepth
```



### Best Answer 【BFS】【层次遍历】

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root: return 0
        res, queue = 0, collections.deque()
        queue.append(root)
        level = 0
        while queue:
            for _ in range(len(queue)):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level += 1
        return level 
```



## [面试题55 - II. 平衡二叉树](https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/)

### Best Answer【分治】【递归】

```python
class Solution:
    def __init__(self):
        self.res = True

    def isBalanced(self, root: TreeNode) -> bool:
        def tree_depth(root):
            if not root: return 0
            if not self.res: return 0 # 剪枝操作
            left_depth = tree_depth(root.left) # 左子树深度
            right_depth = tree_depth(root.right) # 右子树深度
            if abs(left_depth - right_depth) > 1: # 验证是否是平滑二叉树
                self.res = False
            return max(left_depth, right_depth) + 1
        tree_depth(root)
        return self.res 
```



## [面试题56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

### Best Answer 【位运算】【异或】

- 解题思路：

  **异或用法:**
  $$
  \begin{aligned}
  a \oplus b &= b \oplus a \\
  a \oplus a &= 0 \\
  (a \oplus b) \oplus c &= a \oplus (b \oplus c) \\
  0 \oplus a &= a 
  \end{aligned}
  $$
  对于 数组 $[1, 1, 2, 2, 3, 4]$ 第一步，利用 $a \oplus a = 0$ ，可以得到 
  $$
  1 \oplus 1 \oplus 2 \oplus 2 \oplus 3 \oplus 4 = 3 \oplus 4 \\
  (011)_b \oplus (100)_b = (111)b = 7
  $$
  由于是找到两个不一致的数，所以只需要把 3，4 这两个不同的数分到两个不同的组中，如：

  $[1, 1, 3]$， $[2, 2, 4]$ 。直接对组内元素进行 `互异(xor)` ，可得最后的结果 **3，4**

  我们直接根据 $(111)_b$ 的任意个1去区分3，4，因为我们知道在该二进制位上，这两个元素一定是不同的。

```python
class Solution:
    def singleNumbers(self, nums: List[int]) -> List[int]:
        a, b, xor_ret = 0, 0, 0
        for number in nums:
            xor_ret = xor_ret ^ number # 全部异或
        h = 1
        while (xor_ret & h == 0): # 从右向左找到第一个二进制为1的位置，并根据这位置去分组
            h = h << 1
        for number in nums:
            if number & h: a = a ^ number # 组内异或
            else: b = b ^ number
        return [a, b]
```



## [面试题56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

### Best Answer【哈希表】

- 解题思路：

  由于本题没有 空间复杂度为  $O(n)$ 的限制，所以直接使用 `哈希表` 是一个比较好的方法

  > 时间复杂度 $O(n)$ ，空间复杂度 $O(n)$

  ```python
  class Solution:
      def singleNumber(self, nums: List[int]) -> int:
          d = {}
          for number in nums:
              if d.get(number): d[number] += 1
              else: d[number] = 1
          for k, v in d.items():
              if v == 1:
                  return k
  ```



### Best Answer 【位运算】

- 解题思路

  $[9,1,7,9,7,9,7]$ 可以依次按位统计
  $$
  1001 \\
  0001 \\
  0111 \\
  1001 \\
  0111 \\
  1001 \\
  0111 \\
  ----\\
  3337 \\
  $$
  对最后的统计结果对 3 求余，3337 就变成  $(0001)_b=1$  ，1为我们的结果

  ```python
  class Solution:
      def singleNumber(self, nums: List[int]) -> int:
          counts = [0] * 32
          for num in nums:
              for j in range(32):
                  counts[j] += num & 1
                  num = num >> 1
          res, m = 0, 3
          d = 1
          for i in range(32):
              counts[i] = counts[i] % m
              res += counts[i] * d
              d = d << 1
          return res 
  ```

- Tips:

  对于最后二进制转换的地方，我们有两种计算方法

  ```python
  # [1,0,1,1,0..0]
  # 第一种计算方法: 1*1 + 0*2 + 1*4 + 1*8 = 13
  for i in range(32):
  	  counts[i] = counts[i] % m
      res += counts[i] * d
      d = d << 1
  # 第二种计算方法： 直接位移操作
  for i in range(32):
      res <<= 1
      res |= counts[31 - i] % m
      res if counts[31] % m == 0 else ~(res ^ 0xffffffff)
  ```

- Python 中的负数问题

  >  https://www.runoob.com/w3cnote/python-negative-storage.html



## [面试题57. 和为s的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/)

### Best Answer 【窗口】

- 解题思路：

  【Sum II】的变形，加上了 `递增数组` 的情况，本质上是将 `窗口` 缩小。默认 窗口 设置为 `0 - n-1`

  总共有 3 种情况：

  - 两端和等于 target ：输出两个数

  - 两端和小于 target ：左端右移
  - 两端和大于 target ：右端左移

  ```python
  class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
            l, r = 0, len(nums) - 1
            while True:
                if nums[l] + nums[r] == target:
                     return [nums[l], nums[r]]
                elif nums[l] + nums[r] > target:
                     r -= 1
                else:
                     l += 1
  ```



### [面试题57. 和为s的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/)

### Best Answer【滑动窗口】

- 解题思路：

  - 数据段的和小于target：右端右移
  - 数据段的和大于target：左端右移
  - 数据段的和等于target:   加入结果，并且左端右移

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200713024652.png" style="zoom: 33%;" />
  
  > 参考资料： [什么是滑动窗口，以及如何用滑动窗口解这道题（C++/Java/Python）](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/shi-yao-shi-hua-dong-chuang-kou-yi-ji-ru-he-yong-h/)
  
  ```python
  class Solution:
      def findContinuousSequence(self, target: int) -> List[List[int]]:
          i, j = 1, 1
          sum, res = 1, []
          while i <= target // 2:
              if sum < target: # 右边界向右移动
                  j += 1
                  sum += j
              elif sum > target: # 左边界向右移动
                  sum -= i
                  i += 1
              else:
                  res.append(list(range(i, j + 1))) # 记录结果
                sum -= i  # 左边界向右移动 
                  i += 1
          return res 
  ```
  
  

## [面试题58 - I. 翻转单词顺序](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)

需要注意的是，Python 的字符串操作比较简单，失去了考察的价值。C++操作就有考察价值。

### Best Answer 【字符串操作】

- 从右向左查找，一旦找到空格，就把单词标记，最后拼接输出

  ```python
  class Solution:
      def reverseWords(self, s: str) -> str:
          s = s.strip()
          i = j = len(s) - 1
          res = []
          while i >= 0:
              while i >= 0 and s[i] != " ": i -= 1
              res.append(s[i + 1: j + 1])
              while i >= 0 and s[i] == " ": i -= 1
              j = i 
          return ' '.join(res)
  ```

- 从左向右查，走到空格，代表一个单词找到，把单词标记好，最后拼接输出

  ```python
  class Solution:
      def reverseWords(self, s: str) -> str:
          s = s.strip()
          i = j = len(s) - 1
          res = []
          while i >= 0:
              while i >= 0 and s[i] != " ": i -= 1
              res.append(s[i + 1: j + 1])
              while i >= 0 and s[i] == " ": i -= 1
              j = i 
          return ' '.join(res)
  ```

  

### Other Answer【Python版字符串】

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join([_ for _ in s.split(' ')[::-1] if _])
```



## [面试题58 - II. 左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

### Best Answer【字符串】【遍历版】

- 解题思路：

  用一个指针指向  `s` ，如果不停的右移，到底后从头开始循环 

```python
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        ret, size = "", len(s)
        i = n % size
        for _ in range(len(s)):
            ret += s[i]
            i = (i + 1) % size
        return ret
```



### Best Answer【三次翻转】【标答】

- 解题思路：

  对于 `C++` 来说，一个比较推荐的解题思路是 通过三次翻转的方式去解决。

  如 abcdef， k =2，通过如下三步可以完成翻转

  1. 将前k 个元素翻转，即 ab => ba
  2. 将后n-k 个元素翻转，即 cdef => fedc
  3. 整体翻转 bafedc => cdefab 

  > 时间复制度 $O(N)$， 空间复杂度 O(1)

  ```python
  class Solution:
      def reverseLeftWords(self, s: str, n: int) -> str:
          def reverse(s, i, j):
             while i < j: 
                 s[i], s[j] = s[j], s[i]
                 i += 1
                 j -= 1
          s = list(s)
          reverse(s, 0, n - 1)
          reverse(s, n, len(s) - 1)
          reverse(s, 0, len(s) - 1)
          return ''.join(s)
  ```

  

### Answer 【字符串】【切片法】

```python
class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        n = n % len(s)
        return s[n:] + s[:n] 
```



## [面试题59 - I. 滑动窗口的最大值](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/)

My Answer【数据结构】

- 解题思路：

  模拟 [面试题30. 包含min函数的栈](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/solution/mian-shi-ti-30-bao-han-minhan-shu-de-zhan-fu-zhu-z/) 的思路，实现一个类似的结构

  实现的思路参考如下图，来自 [面试题59 - I. 滑动窗口的最大值（单调队列，清晰图解）](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/)

  <img src="https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200713151806.png" style="zoom:33%;" />

  ```python
  class MaxQueue:
      def __init__(self):
          self.data, self.max_data = collections.deque(), collections.deque()
      
      def push(self, value):
          self.data.append(value)
          while self.max_data and value > self.max_data[-1]: self.max_data.pop()
          self.max_data.append(value)
      
      def pop(self):
          if self.max_data and self.data.popleft() == self.max_data[0]:
              self.max_data.popleft()
      
      @property
      def max_value(self):
          if self.max_data:
              return self.max_data[0]
  ```

  使用 MaxQueue 来实现题目的要求

  ```python
  class MaxQueue:
      def __init__(self):
          self.data, self.max_data = collections.deque(), collections.deque()
      
      def push(self, value):
          self.data.append(value)
          while self.max_data and value > self.max_data[-1]: self.max_data.pop()
          self.max_data.append(value)
      
      def pop(self):
          if self.max_data and self.data.popleft() == self.max_data[0]:
              self.max_data.popleft()
      
      @property
      def max_value(self):
          if self.max_data:
              return self.max_data[0]
          
  
  class Solution:
     def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
          if not nums: return []
          queue, ret = MaxQueue(), []
          for _ in range(k):
              queue.push(nums[_])
          ret.append(queue.max_value)
          j = k -1
          while j < len(nums) - 1:
              queue.pop()
              j += 1
              queue.push(nums[j])
              ret.append(queue.max_value)
          return ret 
  ```



### Best Answer 【大神简洁代码】

实现思路同上，只是代码更加简单了

```python
# 作者：jyd
# 链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/
  
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        deque = collections.deque()
        res, n = [], len(nums)
        for i, j in zip(range(1 - k, n + 1 - k), range(n)):
            if i > 0 and deque[0] == nums[i - 1]: deque.popleft() # 删除 deque 中对应的 nums[i-1]
            while deque and deque[-1] < nums[j]: deque.pop() # 保持 deque 递减
            deque.append(nums[j])
            if i >= 0: res.append(deque[0]) # 记录窗口最大值
        return res
```



### My Answer 【三指针】

- 解题思路

  设置三个指针：i，j 标记滑动窗口的范围，pmax 标记最大值的位置

  最大值修改的情况有两种种：

  - 当移出的元素正好是最大值的时候，需要遍历一遍滑动窗口，寻找新的最大值
  - 当新加入的元素比最大值还大，那么最大值的位置直接就是新元素的位置。

```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        def find_max_postion(nums, i, j):
            pmax = i
            for k in range(i + 1, j + 1):
                if nums[k] > nums[pmax]: pmax = k
            return pmax
        
        if not nums: return []
        pmax, ret = find_max_postion(nums, 0, k - 1), []
        ret.append(nums[pmax])

        i, j = 1, k
        while j < len(nums):
            if i - 1 == pmax: # 移出的数值正好是最大值
                pmax = find_max_postion(nums, i, j)
            if nums[j] > nums[pmax]: # 如果加入的数值比 最大值还要大，修改最大值的位置
                pmax = j 
            ret.append(nums[pmax])
            i += 1
            j += 1
        return ret 
```



## [面试题59 - II. 队列的最大值](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

Best Answer

- 解题思路：

  已与 上题解释过了

```python
class MaxQueue:

    def __init__(self):
        self.data, self.max_data = collections.deque(), collections.deque()

    def max_value(self) -> int:
        if self.max_data: return self.max_data[0]
        else: return -1
        
    def push_back(self, value: int) -> None:
        self.data.append(value)
        while self.max_data and value > self.max_data[-1]: 
            self.max_data.pop()
        self.max_data.append(value)

    def pop_front(self) -> int:
        if not self.max_data: return -1
        pop_data = self.data.popleft()
        if pop_data == self.max_data[0]:
            self.max_data.popleft()
        return pop_data
```



## [面试题60. n个骰子的点数【困难】](https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/)

### Best Answer【动态规划】

- 解题思路：

  > 

  本题采用动态规划的方法去做，根据题意，1个骰子总共有6个情况，n个骰子共有 $6^n$ 种情况。

  不妨令 $dp(i,j)$ ，其中 i 代表 骰子的格数，j 代表 i 个骰子的数字之和。

  我们可以很容易的得到  **递推方程**：
  $$
  dp(i, j) = dp(i-1,j-1) + dp(i-1,j-2) + \dots +dp(i-1, j-6) \\
           = \sum_{d=1}^{min(j-n+1, 6)} dp(i-1,j-d)
  $$
  对于 d 的范围 $min(s-n+1, 6)$ 的解释是，$dp(3,2)$ 是不合理的，因为3个骰子的和最小是3，用代数标识即为 $ j-d \ge i-1$ ，即 $6 \ge j - i + 1 \ge d $ 。

  对于 **递推方程** 的初始化条件：
  $$
  dp(1,j) = 1, j = 1, 2,3,4,5,6
  $$
  

```python
class Solution:
    def twoSum(self, n: int) -> List[float]:
        dp = [[0] * (6 * n + 1) for _ in range(n + 1)]  # 递归方程初始条件
        for i in range(1, 7): 
            dp[1][i] = 1
        for i in range(2, n + 1):
            for j in range(i, 6 * i + 1): # 和的范围在 i ~ 6 * i
                for k in range(1, 7): # 减的范围在 1 ~ 6
                    if j - k < i - 1: break
                    dp[i][j] += dp[i - 1][j - k]
        base = 6 ** n
        return [_ / base for _ in dp[n]][n:]
```



## [剑指 Offer 61. 扑克牌中的顺子](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/)

> 参考： [面试题61. 扑克牌中的顺子（集合 Set / 排序，清晰图解）](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/solution/mian-shi-ti-61-bu-ke-pai-zhong-de-shun-zi-ji-he-se/)

### Best Answer【集合】

- 解题思路：

  由于存在大小王，所以可能存在 $[0,0,3,0,5]$ 这样不连续的数组，故不知道数组的起点。解决方法就是限制数组的范围。这里数组 $5-3=2<5$ ，所以是顺子。

  若存在 $[1,0,0,6,7]$ ，数组范围为 $7-1=5$ 超出五张顺子的范围，所以不是顺子。

  判断：

  - 若存在两张相同的牌 => 不是顺子
  - 若最大最小值之差 大于等于 5 => 不是顺子

  > 时间复杂度 $O(1)$ ，空间复杂度 $O(1)$

```python
class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        repeat = set()
        ma, mi = 0, 14
        for num in nums:
            if num == 0: continue # 跳过大小王
            ma = max(ma, num) # 最大牌
            mi = min(mi, num) # 最小牌
            if num in repeat: return False # 若有重复，提前返回 false
            repeat.add(num) # 添加牌至 Set
        return ma - mi < 5 # 最大牌 - 最小牌 < 5 则可构成顺子 
```



## [面试题62. 圆圈中最后剩下的数字【困难】](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)

### Best Answer 【模拟法】

- 解题思路：

  完全模拟题目操作，但是由于 Python 中删除节点的时间复杂度 $O(N)$ ，共要删除 $N-1$ 次，故时间复杂度为 $O(N^2)$，这会导致超时。

  根据 [Java解决约瑟夫环问题，告诉你为什么模拟会超时！](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/javajie-jue-yue-se-fu-huan-wen-ti-gao-su-ni-wei-sh/)  这一篇文章，可以发现，使用模拟法会导致超时。但是采用 Java 中的 `ArrayList` 类型能 AC。

  不过从时间复杂度上分析：

  |            | 查找复杂度 | 删除复杂度 | 总复杂度 |
  | ---------- | ---------- | ---------- | -------- |
  | ArrayList  | O(1)       | O(n)       | O(n)     |
  | LinkedList | O(n)       | O(1)       | O(n)     |

  无论采用 `ArrayList` 或是 `LinkedList` 的时间复杂度都是一样的。只是作者在研究源码发现，Java 的 `remove` 是对连续内存空间的拷贝，可以通过AC。

  不过这类方法我们还是不准备采用，下面给出 `连续存储` 和 `链式存储` 的代码

**Python 连续存储【List 类型】** 

```python
class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        s = list(range(n))
        i, j = 0, n
        for _ in range(n - 1):
            i = (i + m - 1) % j
            s.remove(s[i]) # 删除节点操作为 O(N)
            j -= 1
        return s[0]
```



**Python 链式存储【自定义类型】**

>参考  [Wikipedia 约瑟夫问题](https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98)

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None 

def create_nodes(n):
    head = Node(0)
    pre = head
    for i in range(1, n):
        new_node = Node(i)
        pre.next = new_node
        pre = pre.next 
    pre.next = head # 连接头，形成闭环
    return head 

class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        if n == 1: return 0
        head = create_nodes(n)
        pre = None 
        cur = head
        while cur != cur.next: # 若 cur == cur.next 那么代表只有一个节点
            for i in range(m - 1): # 删除第 m 个，先走 m - 1 步
                pre = cur
                cur = cur.next
            print(cur.value) # 输出删除的节点
            pre.next = cur.next # 删除 cur 这一节点
            cur = pre.next
        return cur.value
```



### Best Answer【约瑟夫问题】

>详细解答，请移步 [换个角度举例解决约瑟夫环](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/huan-ge-jiao-du-ju-li-jie-jue-yue-se-fu-huan-by-as/)

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20200714120203.png)

可以知道，最后的答案一定是位于 数据的0位置，所以可以总结出 **逆推公式**：
$$
f(n,m) = \begin{cases} 
							0 & n = 1\\
              (f(n-1, m)+m)\%n & n>1\\
         \end{cases}
$$


```python
# 作者：aspenstarss
# 链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/huan-ge-jiao-du-ju-li-jie-jue-yue-se-fu-huan-by-as/

class Solution {
public:
    int lastRemaining(int n, int m) {
        int pos = 0; // 最终活下来那个人的初始位置
        for(int i = 2; i <= n; i++){
            pos = (pos + m) % i;  // 每次循环右移
        }
        return pos;
    }
};
```



## [面试题63. 股票的最大利润](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/)

### Best Answer 

> 注意：这里只买卖一次股票，若是可以多次买卖股票的话，需要用到 `动态规划`

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices: return 0
        ret, min_value = 0, prices[0]
        for i in prices[1:]:
            if i < min_value: min_value = i
            ret = max(ret, i - min_value)
        return ret 
```



## [面试题66. 构建乘积数组](https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/)

### My Answer 

- 解题思路：

  解题：B 的每一位计算方法是 将A对应位置排除后的各位相乘。但是需要注意的是若是存在 0 的情况，就需要分类讨论，因为不能除以 0 

  可以分为三种情况讨论：

  - 两个及两个以上的零：返回全空  $[0,0,0,0]$
  - 一个零：$A=[3,0,5]$，$ B=[0,15,0] $  B在A为零的位置上为A中非零数相乘，在A的非零位均为0
  - 无零：$A=[3,1,5]$ ，$total = 3 \times 1 \times 5$  则 $B=[total/3, total/1, total/5]$

```python
class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        res = [0] * len(a)
        zeros = []
        total = 1
        for i in range(len(a)):
            if a[i] == 0:
                zeros.append(i)
            else:
                total *= a[i]
                
        if len(zeros) == 1: 
            res[zeros[0]] = total
        elif len(zeros) == 0:
            res = [total // i for i in a]
        return res 
```



### Best Answer 【双数组】

- 解题思路：

  用两个数组存储左右计算出的结果，如 $l[i],r[i]$ 分别代表自左至 i，自右至i 的数字的乘积。

  最后的结果 $res[i] =l[i-1] \times r[i+1]$

  ```python
  class Solution:
      def constructArr(self, a: List[int]) -> List[int]:
          l = [1] * len(a)
          r = [1] * len(a)
          for i in range(1, len(a)):
              l[i] = l[i - 1] * a[i - 1]
          for i in range(len(a) - 2, -1, -1): # reverse(range(n-1))
              r[i] = r[i + 1] * a[i + 1]
          res = []
          for i in range(len(a)):
              res.append(l[i] * r[i])
          return res 
  ```