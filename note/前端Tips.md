前端Tips:

**判断变量是不是数组**：(注意跨frame实例化对象不共享原型)
```javascript
var a=[];
a.constructor===Array;
a instanceof Array ===true;
```
关于**instanceof**方法(object instanceof constructor)：
用来检验constructor.prototype是否存在于参数object的原型链上。
关于new(var obj=new Xxx())：
1.创建一个新对象
2.将这个新对象的__proto__指向构造函数的prototype(即将新创建对象的隐式原型指向构造函数的显示原型)。
3.将构造函数的this指向这个新创建的对象(即将this指向这个新对象)。
4.无返回值或非对象返回则返回这个对象，否则返回这个返回的新对象。

**避免XSS**：(可以理解为一种js注入，既然是注入就需要对输入进行规范)
XSS方式：a.注入出现在URL中，然后又随服务器返回到浏览器b.这个注入会存储在服务端。
1.避免使用eval，new Function方法可接受字符串形式的js代码。
2.cookie的httpOnly可以阻止js读取cookie。
3.注意innerHTML,document.write方法。
4.对用户输入的数据进行HTML Entity编码。

**浏览器渲染原理**(不同浏览器大同小异)：
1.一般以8K单位接受请求的内容，并解析其中的HTML构建DOM Tree(display:none的元素不会渲染)。CSS构建CSS Rule Tree。
2.DOM，CSS合并生成Render Tree。根据CSS2标准，tree中每个节点都成为box，具有width，height，margin，padding等属性。
3.浏览器根据Render Tree可以知道网页中的节点，各节点的关系或样式或位置。最后通过显卡绘制出来。

**回流(reflow)和重绘(repaint)：**
回流：Render Tree中一些元素尺寸布局等发生改变，页面需要重新构建，页面需要执行reflow操作。
重绘：Render Tree中一些元素外观一类的属性发生改变，不会影响布局，这会触发repaint。

**减少reflow的次数**：
Dom Tree的每个节点都有reflow方法，一个节点的reflow可能触发其他节点的reflow，reflow不可避免，难以预测。
1.将多次的样式操作合并到一次操作，可以新建一个类选择器，将这些样式添加进来。
2.display:none不在Tree中，修改属性不会触发回流，可以先隐藏再操作，再显示。
3.DocumentFragment缓存操作，这个还没听过。
4.position设置为absolute或fixed。这样改变CSS会大大减少reflow。
5.不要使用table布局。
6.避免不必要的复杂CSS选择器，尤其是后代选择器！

**CSS3的box-sizing**：
设置盒子模型为标准模式或者IE模式。属性有三个：
1.content-box：默认值，border和padding不计算到width。
2.padding-box：padding算入width。
3.border-box：border和padding都会算入width。

取消冒泡的一种方法：event.cancleBubble=true;这种相当于全局取消事件冒泡。

**window.onload=function(){...}和$(document).ready(function(){...})**
1.js中需要等待图片等所有元素加载完毕才会执行，jq中则是等待DOM结构绘制完成即可执行。
2.js这方法只能执行一个，jq编写多个入口函数，多个都会执行。
3.如果需要等待所有元素加载完毕则使用$(window).load(function(){...}),这个相当于js中的window.onload。
4.一些问题：jq3版本js入口函数总是会先执行。jq2版本是正常顺序，3版本好像在网页资源很少的时候js的入口函数就会先执行。
5.jq可简写为$(function(){})

jq--dom:$("selector")[index]/$("selector").get(index);
dom--jq:$(dom);