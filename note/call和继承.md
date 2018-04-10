​        函数本身有个prototype，在使用call继承时，这个prototype不会自动指向父类的prototype。这是后需要手动指向，之后prototype里的constructor指向了父类函数本身。这是也需要手动指向这个构造函数本身。

​        访问属性或方法时会层层查找，无法匹配就会显示undefined。

​        任何想要被继承的方法都应该被写在prototype对象里，并永远使用父类的prototype来创造子类的prototype。

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function () {
    console.log(this.name);
}

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
var t1 = new Teacher("Lily", 12, 'math');

t1.say = function () {
    console.log("重写");
}
```
​        call里面的参数指的是使用call方法的那个函数的参数。而且此时this参数中的this不会指向call中this的参数了。

​        关于this：**不要在选项属性或回调上使用箭头函数**，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。**因为箭头函数是和父级上下文绑定在一起的**，this 不会是如你所预期的 Vue 实例， 经常导致 Uncaught TypeError: Cannot read property of undefined


​       apply和call相同点：第一个都接收新的对象，都能改变this指向的对象。
​       不同点：apply接收的参数是数组形式，call的实参则是分开接收的


```javascript
function Animal(name) {
    this.name=name;
    console.log("父类：" + this.name);
    console.log("父类：" + this.id);

}

function Dog(name,id) {
    this.name = name;
    this.id = id;
    console.log("子类：" + this.name);
    console.log("子类：" + this.id);
    this.say=function () {
        console.log(this.name);
    }
}

var dog = new Dog("fff",1);
Animal.call(dog,"ggg");//这个ggg指的就是Animal的name,这个会覆盖传入的this中的name(如果这里面有name属性)
```

