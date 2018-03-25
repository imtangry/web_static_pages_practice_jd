"use strict"
var global = function () {
    var dc = window.document;
    var pointer = dc.getElementsByClassName("pointer");
    var imgs = dc.getElementsByClassName("test");
    var now = 0;
    var mount = pointer.length;
    // 定时器可以在全局设置一个对象，包含他，之后用push，装入数组
    // 绑定点击事件
    for (let i = 0; i < mount; i++) {
        pointer[i].addEventListener("click", function () {
            // 防止多次点击
            if (i === now) {
                return;
            }
            //TODO 这里的要换成图片无缝连接的轮换函数,但是频繁点击会有点bug
            change(now, i);
            // 这个就是等待定时器执行完毕才会继续下面的语句
            now = i;
        });
    }
    imgs[now].style.display = "inline";
    //使用定时器实现图片的动态轮换
    var change = function (now, next) {
        // imgs[now].style.display = "none";
        // now = i;
    clearInterval(interval);


        imgs[next].style.display = "block";
        var nel = imgs[next];
        var nol = imgs[now];
        var nevalue = 500;
        var novalue = 0;
        var speed = 2;
        console.log("点击事件");
        var interval = setInterval(function () {
            if (nevalue <= 2) {
                // nel = 0 + 'px';
                nel.style.left = 0 + "px"
                nol.style.display = "none";
                now = next;
                console.log(now);
                clearInterval(interval);
                return;
            }
            nel.style.left = nevalue + "px";
            nol.style.left = novalue + "px";
            nevalue = nevalue - speed;
            novalue = novalue - speed;
        }, 1)
    }
    dc.addEventListener("click", function (e) {
        var taget = e.target;
    })
}();
