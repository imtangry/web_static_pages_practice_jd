###underscore入门：
####摘要：
javascript是函数式编程语言，支持高阶函数和闭包。可以写出简洁的代码：
```javascript
var a1=[1,4,9,16];
var a2=a1.map(Math.sqrt);//[1,2,3,4]
var a3=a2.filter((x)=>{return x%2 ===0;});//[2.4] 或 (x)=> x%2 ===0;
```