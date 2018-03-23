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
    this.say=()=>"Hello, "+this.name+"!";
}

var kitty = new Cat('Kitty');
var heo=new Cat('Heo');
kitty.say();
console.log( kitty.say === heo.say);