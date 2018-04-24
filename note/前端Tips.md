## 前端Tips:

#### **判断变量是不是数组**：
(注意跨frame实例化对象不共享原型)
```javascript
var a=[];
a.constructor===Array;
a instanceof Array ===true;
```
####关于**instanceof**：
用法：(object instanceof constructor)
用来检验constructor.prototype是否存在于参数object的原型链上。
关于new(var obj=new Xxx())：
1.创建一个新对象
2.将这个新对象的__proto__指向构造函数的prototype(即将新创建对象的隐式原型指向构造函数的显示原型)。
3.将构造函数的this指向这个新创建的对象(即将this指向这个新对象)。
4.无返回值或非对象返回则返回这个对象，否则返回这个返回的新对象。

####**避免XSS**：
(可以理解为一种js注入，既然是注入就需要对输入进行规范)
XSS方式：a.注入出现在URL中，然后又随服务器返回到浏览器b.这个注入会存储在服务端。
1.避免使用eval，new Function方法可接受字符串形式的js代码。
2.cookie的httpOnly可以阻止js读取cookie。
3.注意innerHTML,document.write方法。
4.对用户输入的数据进行HTML Entity编码。

####**浏览器渲染原理**
(不同浏览器大同小异)：
1.一般以8K单位接受请求的内容，并解析其中的HTML构建DOM Tree(display:none的元素不会渲染)。CSS构建CSS Rule Tree。
2.DOM，CSS合并生成Render Tree。根据CSS2标准，tree中每个节点都成为box，具有width，height，margin，padding等属性。
3.浏览器根据Render Tree可以知道网页中的节点，各节点的关系或样式或位置。最后通过显卡绘制出来。

####**回流(reflow)和重绘(repaint)：**
回流：Render Tree中一些元素尺寸布局等发生改变，页面需要重新构建，页面需要执行reflow操作。
重绘：Render Tree中一些元素外观一类的属性发生改变，不会影响布局，这会触发repaint。

####**减少reflow**：
Dom Tree的每个节点都有reflow方法，一个节点的reflow可能触发其他节点的reflow，reflow不可避免，难以预测。
1.将多次的样式操作合并到一次操作，可以新建一个类选择器，将这些样式添加进来。
2.display:none不在Tree中，修改属性不会触发回流，可以先隐藏再操作，再显示。
3.DocumentFragment缓存操作，这个还没听过。
4.position设置为absolute或fixed。这样改变CSS会大大减少reflow。
5.不要使用table布局。
6.避免不必要的复杂CSS选择器，尤其是后代选择器！

####**box-sizing**：
设置盒子模型为标准模式或者IE模式。属性有三个：
1.content-box：默认值，border和padding不计算到width。
2.padding-box：padding算入width。
3.border-box：border和padding都会算入width。
4.另外标准模式下，背景其实是包括边框的，可以使用background-clip来设置。
5.同理background-origin也可以设置背景图片的位置。

####取消冒泡：
event.cancleBubble=true;这种相当于全局取消事件冒泡。

####**入口函数**：
window.onload=function(){...}和$(document).ready(function(){...})
1.js中需要等待图片等所有元素加载完毕才会执行，jq中则是等待DOM结构绘制完成即可执行。
2.js这方法只能执行一个，jq编写多个入口函数，多个都会执行。
3.如果需要等待所有元素加载完毕则使用$(window).load(function(){...}),这个相当于js中的window.onload。
4.一些问题：jq3版本js入口函数总是会先执行。jq2版本是正常顺序，3版本好像在网页资源很少的时候js的入口函数就会先执行。
5.jq可简写为$(function(){...})。

####**promise**：
首先会执行Promise里的方法，方法里会有一个resolve和result，相当于两个指针，执行到一个就会触发相应的then或者是catch，then里是一个函数，接受的参数通过resolve传入。

**onmouseover**:移动到子元素也会继续触发over。
**onmouseenter**:子元素不会影响。

#### require.js
介绍：实现异步加载，简化很多js文件之间的依赖，加载，引入的表示方式。

####边框阴影
边框阴影也可以设置透明度，这样看起来会很美观，而且还会解决没透明度会出现阴影和背景色一样的情况。
```css
 box-shadow: -1px 0 2px rgb(000, 000, 000, 0.2),
      0 0 0 rgb(000, 000, 000, 0.2),
      1px 0 2px rgb(000, 000, 000, 0.2), 
      0 2px 4px rgb(000, 000, 000, 0.2);
```
####JS性能的优化：
1.避免全局查找，全局查找需要设计作用域链上的查找。
2.避免使用with一句，with会创建自己的作用域，会增加执行代码的作用域链的长度，with语句中的代码的执行时间肯定会比外面的代码的执行时间长。
```javascript
function test(){
  with(document.body){
  alert(tagName);
  innerHtml="Hello";
  }
}
function test(){
  var body=document.body;
  alert(body.tagName);
  body.innerHtml="Hello";
  }
}
```
3.几个算法复杂度的例子：
O(1):var value=10;arr[1];
O(log n):二分查找，总的执行时间和值得数量有关，但并不一定要获得的每个值。
O(n):遍历一个数组中的元素。
O(n^2):每个值至少需要获取n次，例如插入排序。
思路：可以将多次使用的一个复杂度高点的变量设为局部变量。
4.优化循环：
减值迭代：
优化循环体：
简化终止条件：因为每次循环都会计算终止条件，然后和他比较。
使用后测试循环（do-while）：
```javascript

```
5.展开循环：循环次数不多可以展开，减少了终止条件的判断。
思路：Duff装置，将所有循环按每八个一起执行。
```javascript
var iterations = Math.floor(values.length/8);
var leftover = values.length&8;//处理多余的几个元素
var i=0;
/*用来处理多出来的几个元素*/
if(leftover>0){
  do{
  process(values[i++]);
  }while(--leftover>0);
}
/*余下数量为8的倍数，不用担心下标越界*/
do{
  process(values[i++]);
  //...以下省略其余7个循环体
}while(--iterations>0);
```
6.避免双重解释:Function(),eval();
7.原生方法快点，switch语句快点，位运算符快点，var语句可以合并，迭代可以`arr[i++]`，只用一条语句创建数组或对象。

