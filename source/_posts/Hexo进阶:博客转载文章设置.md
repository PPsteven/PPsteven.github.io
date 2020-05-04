---
title: Hexo进阶:博客转载文章设置
tags: [Hexo, iframe]
comments: false
date: 2019-12-22 15:10:44
categories: 电脑基本配置
keywords:
description:
top_img:
cover: https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191222162656.png
toc:
toc_number:
copyright:
---

遇见好的博客文章怎么办：1. 打上书签，让它永远的留在你的书签夹中。2. 在博客中转载
在博客中转载的目的是把一些 工具类的网站，快捷键的整理记录下来。但是Hexo是用Markdown编写的，没有博客转载的功能，这时候我们就需要借助 HTML 的 iframe 去实现我们的功能了。
这一部分知识属于前端的范畴了，也算是对于知识面的一个补充。
<!--more-->

## Same-Domain && Cross-Domain 

我们的需求是在用 iframe 引用别人的网站的时候，需要根据这个网站的大小自动调节我们网站的大小。但是因为chrome 的安全限制，我们是无法直接获取别的网站的大小的。

> \<iframe>'s which display content from different domains have security measures in place to prevent all sorts of stuff. For example, you can't have JavaScript access anything inside it. It can be very frustrating, for example, if you just want to do something normal and white-hat like adjust the height of the iframe to fit the content inside it. These security measures are in place to prevent all the black-hat kind of things you could do if you did have JavaScript access to the innards of an iframe.

简言之，就是游览器会阻止JavaScript 去做一些高危操作，如果是不一样的domian 的话，获取网站内部信息的行为就会被认为是危险的。

## Same-Domian

Same-Domain 的解决方法非常多，可以说，百度上搜到的大部分方法都是针对这一情况的。

我们直接附上代码 && 实例

```html
<style>
  iframe {
    width: 100px;
    min-width: 100%;
  }
</style>
<script type="text/javascript">
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    obj.style.width = obj.contentWindow.document.documentElement.scrollWidth + 'px';
    alert(obj.style.height);
    alert(obj.style.width);
  }
</script>
<iframe src="https://ppsteven.github.io/about/"
frameborder="0" scrolling="no" onload="resizeIframe(this)" 
id = "myiframe"
></iframe>
```

下面是实例，这里未了方便展示，我们直接限制了Height最大为400
<style>
  iframe {
    width: 100px;
    min-width: 100%;
  }
</style>
<script type="text/javascript">
  function resizeIframe(obj) {
    obj.style.width = obj.contentWindow.document.documentElement.scrollWidth + 'px';
    var height = obj.contentWindow.document.documentElement.scrollHeight;
    if (height > 400) height = 400;
    obj.style.height = height + 'px';
    //alert(obj.style.height); //提示大小
    //alert(obj.style.width);
  }
</script>
<iframe src="https://ppsteven.github.io/about/"
frameborder="0" scrolling="no" onload="resizeIframe(this)" 
id = "myiframe"
></iframe>

## Cross domain

### 手动定义Size

我们尝试使用上面Same-domain 的代码去获取百度的信息

```
<iframe src="http://www.baidu.com"
frameborder="0" scrolling="no" onload="resizeIframe(this)" 
id = "abc"
></iframe>
```

最终我们会得到 游览器 Block 的 警告

> 这个警告的页面是 在 Chrome 开发者工具的Console 中获得的，以后我们需要多次借助这个工具

```
Uncaught DOMException: Blocked a frame with origin "http://localhost:4000" from accessing a cross-origin frame.
    at resizeIframe (http://localhost:4000/2019/12/21/test/:32:42)
    at HTMLIFrameElement.onload (http://localhost:4000/2019/12/21/test/:39:2)
```

其实最重要的问题就是获取 页面的大小，这个过程如果不让游览器自己去完成的话，我们人手工也可以完成，只是费劲一点（当然和写一篇博客比，这个过程可能只花费不到一分钟）

只要在Console 中输入

```js
document.body.scrollHeight
document.body.scrollWidth
```

![](https://cdn.jsdelivr.net/gh/PPsteven/pictures/img/20191222155701.png)

```html
<iframe src="http://www.laruence.com/2015/05/28/3038.html"
frameborder="0" scrolling="no"
width="855px"
highth="26012px"
></iframe>
```

### Autozise

第二种方法就是利用postMessage 的方式，这一种方法我也亲自用过了，但是繁琐程度比较高。

需要在 Host.html 和 Frame.html 中都需要插入Js 代码

Host.html 就是 `<iframe>` 所在html，负责接受 Frame.html 传递过来的参数

Frame.html 也可以看做 source web 的网站，负责 传送数据。

这要求我们主动的去修改目标的html 代码，从中插入Js，这样的话，感觉不是很便捷，而且Js 代码也过于负责，目前不想整理这一块的内容。

> 具体操作请移步 参考资料 2

## 静态文本
这一段是后加的, 我们可以直接存储html 格式的文件，然后在头部加上yaml 格式即可完成和markdown一样的操作
```
---
layout: false
---
```

## 参考资料

1. [Cross Domain iframe Resizing](https://css-tricks.com/cross-domain-iframe-resizing/)
   这篇文章算是国外教程中整理的相当不错的文章了，介绍了在 same-domain 和 cross-domian 两种情况下的应对方式。

2. http://geekswithblogs.net/rashid/archive/2007/01/13/103518.aspx
   第一篇的教程就是参考这一篇文章的代码，原创级别

