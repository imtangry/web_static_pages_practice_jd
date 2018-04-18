// 京东轮播图
window.onload = function () {


    var d = document,
        imgs_now = 0,
        imgs_pre = 2,
        cover = d.getElementsByClassName("white_bg")[0],
        lis = d.getElementsByClassName("imgs_list")[0].getElementsByTagName("li"),
        l_b = d.getElementsByClassName("l_button")[0],
        r_b = d.getElementsByClassName("r_button")[0],
        img_list = d.getElementsByClassName("imgs_list")[0],
        circle_list = d.getElementsByClassName("circle"),
        l = lis.length,
        intervals_next = [],
        intervals_animate = [],
        change_flag = true;

    l_b.addEventListener('click', function () {
        click_change(0);
    });
    r_b.addEventListener('click', function () {
        click_change(1);
    });

// 绑定事件

    img_list.onmouseenter = function (e) {
        e.stopPropagation();
        // 这个会影响两个按钮之间的flag
        // change_flag = true;
        clear_reset();
    }
    img_list.onmouseleave = function (e) {
        e.stopPropagation();
        auto_change();

    }
    // 会出bug，会重复触发鼠标移入移出。
    for (let i = 0; i < l; i++) {
        circle_list[i].onmouseenter = function () {
            if(i===imgs_now){
                return;
            }
            change(2, i);
        }
    }


// 清除所有定时器，且快速完成未完成动画
    function clear_reset() {
        while (intervals_animate.length !== 0) {
            clearInterval(intervals_animate.pop());
        }
        while (intervals_next.length !== 0) {
            clearInterval(intervals_next.pop());

        }
        lis[imgs_pre].className = "none";
        lis[imgs_pre].style.opacity = "0";
        cover.style.display = "none";
        cover.style.opacity = 0;
    }

// 首先实现自动轮播函数，鼠标移入停止轮播，移出则继续调用轮播函数
    function auto_change() {
        // 没有鼠标事件，这个定时器将一直存在
        intervals_next.push(setInterval(function () {
            if (imgs_now !== l - 1) {
                change(0, 1);
            } else {
                change(0, 0);
            }
        }, 4000));
    }

    function click_change(mode) {
        // 点击前清除定时器，点击后貌似会自动执行自动轮播
        //防止多次点击，等待切换动画执行完在执行

        if (change_flag === false) {
            console.log("执行了这个");
            return;
        }
        change_flag = false;
        clear_reset();
        // 左点击
        if (mode === 0) {
            if (imgs_now === 0) {
                change(1, l - 1);
            } else {
                change(1, imgs_now - 1);
            }
        } else {
            if (imgs_now === l - 1) {
                change(1, 0);
            } else {
                change(1, imgs_now + 1);
            }
        }

    }

// 实现切换时的动画
    function change(mode, flag) {
        while (intervals_animate.length > 0) {
            clearInterval(intervals_animate.pop());
        }
        imgs_pre = imgs_now;
        // 自动模式
        if (mode === 0) {
            // 判断是否是最后一个图片
            imgs_now = (flag === 0 ? 0 : imgs_now + 1);
        }
        // 点击按钮模式
        else if (mode === 1) {
            imgs_now = flag;
        }
        // 列表按钮点击模式
        else {
            imgs_now = flag;
        }
// 在底层执行pointer样式切换
        circle_style(imgs_now, imgs_pre);
        let cover_opacity = 50,
            pre_opacity = 100,
            temp_pre = lis[imgs_pre];

        // 设置遮罩层
        cover.style.display = "block";
        cover.style.opacity = cover_opacity;
        // 设置下一个图
        lis[imgs_now].className = "show";
        lis[imgs_now].style.opacity = pre_opacity;
        lis[imgs_now].style.zIndex = "49";
        // 设置上一个图
        temp_pre.style.opacity = "100";
        temp_pre.style.zIndex = "0";

        // 开始动画
        intervals_animate.push(setInterval(function () {
            console.log("动画循环执行");
            cover_opacity = cover_opacity - 1;
            pre_opacity = pre_opacity - 4;

            cover.style.opacity = cover_opacity / 100;
            temp_pre.style.opacity = pre_opacity / 100;

            if (cover_opacity < 0) {
                while (intervals_animate.length > 0) {
                    clearInterval(intervals_animate.pop());
                }
                cover.style.opacity = "0";
                temp_pre.style.opacity = "0";
                temp_pre.className = "none";
                //页面切换时会出现bug，会出现多个li属性为show，为了解决只能遍历设属性了
                for (let i = 0; i < l; i++) {
                    if (i !== imgs_now) {
                        lis[i].className = "none";
                    }
                }
                cover.style.display = "none";
                change_flag = true;
                return;
            }
        }, 10));
    }

    //小圆点hover，自动轮播，点击轮播时候变化样式
    //暂时实现切换，这个小点的动画也有点复杂。
    function circle_style(index, pre_index) {
        circle_list[pre_index].style.backgroundColor = "";
        circle_list[index].style.backgroundColor = "#ffffff";

    }
    auto_change();
}