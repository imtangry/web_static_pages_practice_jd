###requirejs
源码约2000行，它的一些功能：
1.异步加载代码
2.简单配置后可以加载本地，可以加载其他域的文件，没有加载成功可以切换源加载。
3.一些关键词：require,define,requirejs,require.config,

###基本使用：
1.
```javascript
<script src="js/require.js"></script>
<script src="js/require.js" data-main="js/main"></script>
```

2.载入模块（无参模块可以放后面）
```javascript
// main.js
　　require.config({
　　　　paths: {
　　　　　　"jquery": "lib/jquery.min",
　　　　　　"underscore": "lib/underscore.min",
　　　　　　"backbone": "lib/backbone.min"
　　　　}
　　});
require(['jquery', 'underscore', 'backbone'], function ($,_,Backbone){
　　　　// some code here
　　});
```

data-main里面定义的require.config()相当于全局设置，且会默认将baseUrl指向这个js文件目录，此外.js后缀可以省略。