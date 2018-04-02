let foo="hello";

var robot={
    name:"robot",
    weight:100,
    say:function(){
        console.log(this.name);
    }
};
var student={};
student.__proto__=robot;
student.name="xiaomin";
student.say();
console.log(student.__proto__);
console.log(student.weight);

function Cat(name) {
    //
    this.name=name;
    // this.say=()=>"Hello, "+this.name+"!";
}
Cat.prototype.say=()=>"Hello, "+this.name+"!";

var kitty = new Cat('Kitty');
var heo=new Cat('Heo');
console.log(kitty.say());
console.log(heo.say());

console.log( kitty.say === heo.say);

var a=2;
(function () {
    // 如果a是参数传入，我们可以把它当做是局部变量
a=3;
})();
let bbb;
console.log(a)
console.log(bbb);


bn="12"
cn=bn-0;
console.log(typeof(cn));
// 原型链上加的方法，才会是===的？？？

for(var i=0;i<35;i++){
    console.log("{data_id: "+i+", city: \"\"},")
}