**jq事件**：
click();mouseover();dbclick();keydown();blur()和js中onblur()失去焦点;focus();
change()select或者textarea发生改变调用？select()当input里的元素被选择触发？
```javascript
$("button").mousedown(function(){
  $("p").slideToggle();
});
```
**常用事件**：
bind();unbind();绑定事件，解绑事件
on();off();jq1.7以后出现，推荐使用这个方法。
```javascript
$("button").bind("click",function(){
  $("p").slideToggle();
});
```
**jq动画**：



