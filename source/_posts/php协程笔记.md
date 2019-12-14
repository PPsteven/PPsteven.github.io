---
title: php协程笔记
comments: false
date: 2019-12-07 18:19:13
tags:
categories:
keywords:
description:
top_img:
cover:
toc:
toc_number:
copyright:
---

## 前言
在实习的过程中使用到了腾讯微服务平台（Tencent Service Framework，TSF）框架，tsf中经常看到 

`$ret = (yield func(a,b));`

这样的用法。
yield 外面包括号的用法并不常见，实际上这是yield的一种特殊的用法——***协程***。
这里我准备通读一下这一领域的经典教程，好好理解yield 和 协程 是如何在PHP 项目开发中起到作用的。

> [在PHP中使用协程实现多任务调度| 风雪之隅](http://www.laruence.com/2015/05/28/3038.html)
>
> 作者背景：风雪之隅，PHP开发组核心成员，鸟叔，PHP7的主要开发者。本篇文章其实他对一篇英文教程的翻译之作。

之所以标题起笔记，原因是原文理解起来稍有难度，所以我这里加上自己的理解。本篇可以在大家读原文的过程中做一个参考。

yield 的作用
- 迭代生成器



## 进程、线程、协程的区别

### 进程

- 进程是程序执行的一个实例
- 进程是资源分配的最小单位，资源包括：CPU，内存，I/O等

- 进程间的通讯方式（IPC） <---- 抄，参考https://blog.csdn.net/daaikuaichuan/article/details/82951084
  - 管道 Pipe
  - 命名管道 FIFO
  - \* 消息队列（Message Queue)
    - 腾讯的hippo
    - Kafka
  - 信号量（Semaphore）
  - 共享内存（Shared Memory）
  - \* 套接字（Socket）

### 线程

- **轻量级进程(Lightweight Process，LWP）**
- CPU调度的最小单位
- 进程由于是拥有系统资源，所以切换时需要保存上下文环境，开销大。线程开销小

### 协程

- 协程是一种比线程更加轻量级的存在
- 与进程线程不同的是，协程是完全由程序控制在（用户态执行）
- 举例： 当我们读文件的时候，我们可以主动让出控制权，而不是等待I/O操作完成。
- 特点
  - 极高的执行效率，没有线程那么大的切换开销。
    我们知道涉及到内核参与管理的程序，需要从用户态通过中断的方式切换到内核态。这样的开销是极大的。
  - 不需要多线程的锁机制，**在协程中控制共享资源不加锁**
  - 对用户可见
  - 协同，因为是由程序员自己写的调度策略，其通过协作而不是抢占来进行切换
  - **协程的思想本质上就是控制流的主动让出（yield）和恢复（resume）机制**（来源：[PHP7下的协程实现](https://segmentfault.com/a/1190000012457145)）
  - 安全性上，

## 迭代生成器
迭代生成器是我们对于 yield 最常用的一个功能。
用 yield 替代 return 作为函数的返回最大的作用是，它返回的不仅是一个值，而是一个迭代器。这一优点在面对无法载入到内存的大型数据集有很大的作用

如以下代码
```php
function xrange($start,$end,$step = 1){
	for ($i = $start ; $i <= $end ; $i += $step){
		yield $i;
	}
}

foreach (xrange(1,10000000000) as $num) {
	echo $num ."<br>";
}
```
很明显，这里使用return的话，返回的是一个巨型的数据，当你数据量特别的时候会造成数据溢出的问题。
yield 的神奇之处在于，它会保持生成器的状态。函数会一直运行，直到下一个yield。程序执行的控制流可以在主代码和生成器函数之间切换，也不用用户担心上下文环境的问题。
优点
- 运行大型数据集
- 不用编写就能生成复杂的生成器

写一个生成器的流程，需要
- 被迭代的类实现 IteratorAggregate 接口
- 定义一个返回迭代类的方法，这个类必须实现Iterator 接口
- 提供一系列必须实现的方法
  - rewind : 函数内部指针设置回到数据开始处
  - valid : 判读是否还有数据
  - key : 返回数据指针值
  - current : 返回当前指针指向的值
  - next : 移动到下一位
yield 关键字简化了实现迭代器的过程。
- [ ] TODO 实现一个PHP Iterator 对象

## 协程

yield 的一个特性是函数每次执行到yield 的时候，就会主动让出控制权。这一点可以很好的帮助我们控制程序的执行顺序。

### send 函数

public Generator::send ( [mixed](https://www.php.net/manual/zh/language.pseudo-types.php#language.types.mixed) `$value` ) : [mixed](https://www.php.net/manual/zh/language.pseudo-types.php#language.types.mixed)

向生成器中传入一个值，并且当做 [yield](https://www.php.net/manual/zh/language.generators.syntax.php#control-structures.yield) 表达式的结果，

***然后继续执行生成器***。

如果当这个方法被调用时，生成器不在 [yield](https://www.php.net/manual/zh/language.generators.syntax.php#control-structures.yield) 表达式，那么在传入值之前，它会先运行到第一个 [yield](https://www.php.net/manual/zh/language.generators.syntax.php#control-structures.yield) 表达式。

传入生成器的值。这个值将会被作为生成器当前所在的 [yield](https://www.php.net/manual/zh/language.generators.syntax.php#control-structures.yield) 的返回值。

> 利用send 函数，我们可以很方便的与协程进行交互，具体如下。

### yield 作为参数接受者
```php
<?php
function logger($fileName) {
    echo "这个语句只会执行一次","\n";
    while (true) {
        echo yield . "\n";
        //函数每次都会执行要yield 暂停，然后让出控制权。
    }
}

$logger = logger(__DIR__ . '/log');
$logger->send('Foo');  // 输出 "这个语句只会执行一次", 输出 Foo \n;
$logger->send('Bar');  // 输出 Bar \n;
?>
```

yield 作用：
 - 1. 类似于debug 时候的断点，每一次都是运行到 yield 停止
 - 2. 可以利用send方法给 yield 传递数据

> 那自然会有一个疑问，此处的 yield 有没有接受数据回来？
> 答案： 没有

这个例子可以看到yield 并没有返回数据，是NULL
```php
<?php
function logger($fileName) {
    echo "这个语句只会执行一次","\n";
    while (true) {
        echo yield . "\n";
        //函数每次都会执行要yield 暂停，然后让出控制权。
    }
}

$logger = logger(__DIR__ . '/log');
$a = $logger->send('Foo');  // 输出 "这个语句只会执行一次", 输出 Foo;
var_dump($a); // 返回 NULL , 这里的yield 并没有返回任何值

?>
```

### yield 同时接受和发送数据
```php
<?php
function gen() {
    $ret = (yield 'yield1');
    var_dump($ret);
    $ret = (yield 'yield2');
    var_dump($ret);
}
 
$gen = gen();
var_dump($gen->current());    // string(6) "yield1"
var_dump($gen->send('ret1')); // string(4) "ret1"   (the first var_dump in gen)
                              // string(6) "yield2" (the var_dump of the ->send() return value)
var_dump($gen->send('ret2')); // string(4) "ret2"   (again from within gen)
                              // NULL               (the return value of ->send())
?>
```

逐句分析

$ gen = gen() 指针指向这个迭代器

$ gen-> current() 运行到第一个yield ，返回 yield 语句的值 yield，并 输出 类型和值

$ gen ->send("ret1")  当前生成器在 yield 语句，于是把 "ret1" 当做 （yield "yield1"）的结果，并赋值给 \$ret1。而且还会执行一个 gen->next() 移到下一个yield 处，返回第二个yield 语句的返回值

$ gen ->send("ret2")  当前生成器在第二个yield 语句，把"ret2" 当做   (yield "yield2") 的结果，并赋值给 \$ret2 。继续向下执行，此时指针会移至迭代器末尾，此时已经没有yield ，所以返回NULL

### 多任务合作

为了帮助理解 协程和任务调度的关机，yield 在 任务运行的过程中可以主动中断自身，并把控制权交还给调度器。

这里我们先需要实现: 任务、调度器

#### 任务

```php 
<?php
class Task { //实现一个任务
    protected $taskId; //任务ID
    protected $coroutine;//协程
    protected $sendValue = null;//send 传送的value
    protected $beforeFirstYield = true;//是不是第一次传送
    // 因为每次send 返回的值，都是当前yield 的下一个yield 的返回值，这导致了第一个yield 的返回值被丢弃了。对于第一个 yield，我们需要用current()获取返回值，从第二个往后用send()获取返回值。
    public function __construct($taskId, Generator $coroutine) {//协程类型是 迭代器
        $this->taskId = $taskId;
        $this->coroutine = $coroutine;
    }
 
    public function getTaskId() {
        return $this->taskId;
    }
 
    public function setSendValue($sendValue) {
        $this->sendValue = $sendValue;
    }
 
    public function run() {
        if ($this->beforeFirstYield) {// 如果是第一次yield，那么就用current()返回
            $this->beforeFirstYield = false;
            return $this->coroutine->current();
        } else {//如果不是第一个yield，就用send设置一个value，并返回下一个yield的值
            $retval = $this->coroutine->send($this->sendValue);
            $this->sendValue = null;//设置完毕清空value
            return $retval;
        }
    }
 
    public function isFinished() {
        return !$this->coroutine->valid();// 判断迭代器是否迭代完毕
    }
}
```

#### 迭代器

```php
<?php
class Scheduler {//实现一个调度器
    protected $maxTaskId = 0; // 最大任务
    protected $taskMap = []; // taskId => task
    protected $taskQueue;// 任务队列
 
    public function __construct() {
        $this->taskQueue = new SplQueue(); // 实例化一个队列
    }
 
    public function newTask(Generator $coroutine) {
        $tid = ++$this->maxTaskId;// 生成任务id
        $task = new Task($tid, $coroutine); // 创建任务
        $this->taskMap[$tid] = $task;// 标识 taskId => task
        $this->schedule($task);
        return $tid;
    }
 		
    //任务入队
    public function schedule(Task $task) {
        $this->taskQueue->enqueue($task); 
    }
    
    //任务运行
    public function run() {
        while (!$this->taskQueue->isEmpty()) {
            $task = $this->taskQueue->dequeue();// 出队
            $task->run(); //任务运行
 
            if ($task->isFinished()) { //当前任务结束，删除
                unset($this->taskMap[$task->getTaskId()]);
            } else {
                $this->schedule($task);//未完成的话，放入队尾继续执行
            }
        }
    }
}
?>

```

用一个例子看看程序是否按照我们的期望在运行

```php
<?php
include ("Task.php"); // 载入定义好的模块
include("Scheduler.php");

function task1() {// 程序运行10次
    for ($i = 1; $i <= 10; ++$i) {
        echo "This is task 1 iteration $i.\n";
        yield;
    }
}

function task2() {// 程序运行5次
    for ($i = 1; $i <= 5; ++$i) {
        echo "This is task 2 iteration $i.\n";
        yield;
    }
}

$scheduler = new Scheduler;

$scheduler->newTask(task1());
$scheduler->newTask(task2());

$scheduler->run();

结果如下:
This is task 1 iteration 1.
This is task 2 iteration 1.
This is task 1 iteration 2.
This is task 2 iteration 2.
This is task 1 iteration 3.
This is task 2 iteration 3.
This is task 1 iteration 4.
This is task 2 iteration 4.
This is task 1 iteration 5.
This is task 2 iteration 5.
This is task 1 iteration 6.
This is task 1 iteration 7.
This is task 1 iteration 8.
This is task 1 iteration 9.
This is task 1 iteration 10.
```

发现程序是交替运行的，和我们的预期是相同的。因为我们使用了队列的结构，若是一个任务从队列中取出后并没有运行结束，我们会放入队尾继续运行。

#### 与调度器之间的通信

我们再看一眼，上面例子中需要运行的程序

```php
function task1() {// 程序运行10次
    for ($i = 1; $i <= 10; ++$i) {
        echo "This is task 1 iteration $i.\n"; // <-- 若是要在用调度器中的taskid 替代此句需要怎么做。
        yield;
    }
}
```

如何实现：任务与调度器之间的通信。

我们使用的是 进程用来和操作系统会话的同样的方式来通信：系统调用。

要注意的是，不能简单的把调度器作为一个参数，传递给任务，不然很危险。这里作者通过yield表达式，配合send 来传递信息。

首先是对可调用的系统调用做一个封装

```php
<?php
class SystemCall {
    protected $callback;
    // 传入的值是 一个可调用的类/函数
    public function __construct(callable $callback) {
        $this->callback = $callback;
    }
    // __invoke:当类发生调用的使用使用
    // 这样，类在使用的时候看上去和一个函数一样
    // 传入的参数是 任务 和 调度器
    // 作用是运行 初始化的函数/类
    public function __invoke(Task $task, Scheduler $scheduler) {
        $callback = $this->callback;
        return $callback($task, $scheduler);
    }
}
?>
```

下面我们需要进行消息通讯

```php
<?php
function task($max) {
    // 我们需要传入 $tid 的值 从调度器中
    $tid = (yield getTaskId()); // <-- here's the syscall!
    for ($i = 1; $i <= $max; ++$i) {
        echo "This is task $tid iteration $i.\n";
        yield;
    }
}
 
$scheduler = new Scheduler;
 
$scheduler->newTask(task(10));
$scheduler->newTask(task(5));
 
$scheduler->run();
?>
```

这里，我们需要对传入的getTaskId 进行修改

传入的值是来自与调度器和任务的，结合之前的封装的系统调用

```php
<?php
function getTaskId() {
    return new SystemCall(function(Task $task, Scheduler $scheduler) {
        $task->setSendValue($task->getTaskId());
        $scheduler->schedule($task);
        // 这里返回的是一个系统调用
        // 作用是给任务设置 send 的值，send值的内容是 taskid
        // 把此任务加入调度器的队列中去
    });
}
```

> 这里return 的不是如函数名写的 taskid，而是一个系统调用。
>
> 最后程序中的 $tid = (yield getTaskId()); 又会把这个系统调用传入调度器的队列中

进过这样的操作，我们调度器的队列中有两种类型的任务

- SystemCall类型，但是它也可以和函数一样调用
- Task 类型，也就是我们的任务类型

所以我们必须还要修改一下调度器的run方法（其实就是加入一段对SystemCall 的处理）

```php
public function run() {
    while (!$this->taskQueue->isEmpty()) {
        $task = $this->taskQueue->dequeue();
        $retval = $task->run();
 				
       // 这一段是新加的,如果出队的类型是系统调用，就在调度器里面调用它，传入任务 和 调度器
       // 调用的结果是 
       // $task 会设置一个 Send 值
       // $this(调度器) 会把这个 $task 加入到调度器的末尾
        if ($retval instanceof SystemCall) {
            $retval($task, $this);
            continue;
        }
      //--------------------------
 
        if ($task->isFinished()) {
            unset($this->taskMap[$task->getTaskId()]);
        } else {
            $this->schedule($task);
        }
    }
}
```



yield指令提供了任务中断自身的一种方法，然后把控制交回给任务调度器。因此协程可以运行多个其他任务。更进一步来说, yield还可以用来在任务和调度器之间进行通信。
