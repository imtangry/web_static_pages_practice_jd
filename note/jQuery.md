###**jq事件**：
click();mouseover();dbclick();keydown();blur()和js中onblur()失去焦点;focus();
change()select或者textarea发生改变调用？select()当input里的元素被选择触发？
```javascript
$("button").mousedown(function(){
  $("p").slideToggle();
});
```
###**常用事件**：
bind();unbind();绑定事件，解绑事件。
on();off();jq1.7以后出现，推荐使用这个方法。
attr(),removeattr();prop()1.7之后推荐使用，removerprop()已经不支持。
addClass(),hasClass(),removeClass(),toggleClass()相当于add和remove;
```javascript
$("button").bind("click",function(){
  $("p").slideToggle();
});
```
###**jq动画**：
show(),hide();toggle();
fadeIn(),fadeOut(),fadeToggle();
slideDown(),slideUp(),slideToggle();
animate({prop:'val'},time);
###**jq其他**：
$("ul").append("<li>hello</li>"),选中元素内部插入指定内容;
appendTo,相当于颠倒顺序,$("b").appendTo("div"),将b添加到div的内部;
和prepend(),prependTo()对应;
insertBefore(),insertAfter();
$("li",{id:'one',text:'hello'});
remove(),删除匹配元素
empty(),删除匹配元素的所有子节点(匹配元素下面的所有内容);
detach(),也是移除，但是和remove不同的是，detach会保留所有事件和数据;
detach和remove返回值是被删除对象，detach返回的对象会保留事件和数据;
children(),找直接子代.find()找后代;
$(selector).each(function(index,element));



