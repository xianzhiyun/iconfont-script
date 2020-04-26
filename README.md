# iconfont-script
[](https://www.npmjs.com/package/iconfont-script)

## 简介

> 项目中采用iconfont去管理UI设计图标，由于... . . 等原因，图标并不是一次性给到前端的。
> 有新的图标就要到iconfont网站进行下载加压到本地，是不是感觉这样很不爽？

## 实现思路

1\. 获取buffer
2\. buffer写入本地 \*iconfont\. zip\*
3\. iconfont\. zip进行解压到 \*iconfont\* 文件夹
4\. 将解压后文件进行迁移到指定目录
5\. 将本地生成文件和文件夹 \*iconfont\. zip*、*iconfont*删除

## 🛠工具

> 常用工具据不一一描述了，自行查找他们使用方法，具体如何骚。

### rollup

### nodemon

### concurrently

### request

### 发布工具

```
let options = {
    url: _url,
    encoding: null,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'cookie': this.cookie
    },
    debug: false,
    maxRedirects: 5,
    // 禁止跳转，防SSRF
    followRedirect: false,
    timeout: 10000
}
```

Request 被废弃了, 几乎接触过Node的人都接触过Request。这里建议使用 *superagent* 轻量HTTP库。

## compressing实现解压

jszip如何进行压缩文件进行参考

## 在Class中如何使用递归？

deleteFolderRecursive删除文件和文件夹

## 概念

* Buffer
  + JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

* 

## 最后

## 面试题

1\. request中 \*encoding：null\*  \*headers中User-Agent\*？
2\. Buffer、Uint8Array、base64编码、Blob 这几个常用概念理解，什么场景先使用？
3\. 浅谈CSRF、SSRF理解？
4\. call、applay、bind应用？
5\. 在webpack中经常看到path\. join和path\. resolve区别是什么？
6\. 使用fs的同步方法，javascript 宏任务与微任务的解读eventLoop？
7\. 浏览器端和服务端如何实现一个文件上传和下载，如何实现大文件上传？
8\. forEach、map、for 循环过程中异步等待（async, await）有什么不同？
9\. 递归实现有几种方式，项目开发过程中哪些场景使用？

10. 服务端如何防止网络爬虫，有哪些方式？

## 更多推荐

[记一次node爬虫经历，手把手教你爬虫](https://www.cnblogs.com/scottjeremy/p/11961190.html)

## 参考

[nodejs中文网](http://nodejs.cn/api/)
[Node. js 不深也不浅得了解下编码](https://segmentfault.com/a/1190000002787763)
[https://blog.csdn.net/flytam/article/details/104741412](https://blog.csdn.net/flytam/article/details/104741412)
[https://www.cnblogs.com/star91/p/ji-yutravis-hegit-tag-shi-xiannpm-zi-dong-hua-fa-b.html](https://www.cnblogs.com/star91/p/ji-yutravis-hegit-tag-shi-xiannpm-zi-dong-hua-fa-b.html)
[https://cloud.tencent.com/developer/article/1506532](https://cloud.tencent.com/developer/article/1506532)
[https://www.lisa33xiaoq.net/945.html](https://www.lisa33xiaoq.net/945.html)
[https://blog.csdn.net/weixin_30909575/article/details/97745756](https://blog.csdn.net/weixin_30909575/article/details/97745756)
