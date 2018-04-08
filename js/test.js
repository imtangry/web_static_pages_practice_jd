let foo = "hello";

var robot = {
    name: "robot",
    weight: 100,
    say: function () {
        console.log(this.name);
    }
};
var student = {};
student.__proto__ = robot;
student.name = "xiaomin";
student.say();
console.log(student.__proto__);
console.log(student.weight);

function Cat(name) {
    //
    this.name = name;
    // this.say=()=>"Hello, "+this.name+"!";
}

// 不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。
// 因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例，
// 经常导致 Uncaught TypeError: Cannot read property of undefined
// 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。
Cat.prototype.say = function () {
    return "Hello, " + this.name + "!";
}

var kitty = new Cat('Kitty');
var heo = new Cat('Heo');
console.log(kitty.say());
console.log(heo.say());

console.log(kitty.say === heo.say);

var a = 2;
(function () {
    // 如果a是参数传入，我们可以把它当做是局部变量
    a = 3;
})();
let bbb;
console.log(a)
console.log(bbb);


bn = "12"
cn = bn - 0;
console.log(typeof(cn));
// 原型链上加的方法，才会是===的？？？