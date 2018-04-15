// 京东轮播图
var d = document,
    imgs_now = 0,
    imgs_pre = -1,
    cover = d.getElementsByClassName("white_bg")[0],
    lis = d.getElementsByClassName("imgs_list")[0].getElementsByTagName("li"),
    l_b = d.getElementsByClassName("l_button")[0],
    r_b = d.getElementsByClassName("r_button")[0],
    img_list = d.getElementsByClassName("imgs_list")[0],
    l = lis.length,
    intervals_next = [],
    intervals_animate = [];

l_b.addEventListener('click', changeImg(0, imgs_now));
r_b.addEventListener('click', changeImg(1, imgs_now));



img_list.onmouseover = function () {
    while (intervals_animate.length!==0){
        clearInterval(intervals_animate.pop());
    }
    while(intervals_next.length!==0){
        clearInterval(intervals_next.pop());

    }
    lis[imgs_pre].className = "none";
    lis[imgs_pre].style.opacity = "0";
    cover.style.display="none";
    cover.style.opacity = 0;
}
img_list.onmouseout=function () {
    auto_change();
}
auto_change();

// 首先实现自动轮播函数，鼠标移入停止轮播，移出则继续调用轮播函数
function auto_change() {
    // 没有鼠标事件，这个定时器将一直存在
    intervals_next.push(setInterval(function () {
        if (imgs_now !== l - 1) {
            change(1);
        } else {
            change(0);
        }
    }, 4000));
}

function change(flag) {
    imgs_pre = imgs_now;
    // 判断是否从头再来
    if (flag === 0) {
        imgs_now = 0;
    }
    else {
        imgs_now += 1;
    }
    let cover_opacity = 0.5,
        pre_opacity = 1,
        temp_pre = lis[imgs_pre];

    // 设置遮罩层
    cover.style.display = "block";
    cover.style.opacity = cover_opacity;
    // 设置下一个图
    lis[imgs_now].className = "show";
    lis[imgs_now].style.opacity = pre_opacity;
    lis[imgs_now].style.zIndex = "49";
    // 设置上一个图
    temp_pre.style.opacity = "1";
    temp_pre.style.zIndex = "0";
    // 开始动画，遮罩层5ms消失，上一个图片3ms消失
    intervals_animate.push(setInterval(function () {

        cover_opacity = cover_opacity - 0.01;
        pre_opacity = pre_opacity - 0.04;

        cover.style.opacity = cover_opacity;
        temp_pre.style.opacity = pre_opacity;

        if (cover_opacity < 0) {
            cover.style.opacity = 0;
            temp_pre.style.opacity = 0;
            temp_pre.className = "none";
            //页面切换时会出现bug，会出现多个li属性为show，为了解决只能遍历设属性了
            for (let i = 0; i < l; i++) {
                if (i !== imgs_now) {
                    lis[i].className = "none";
                }
            }
            cover.style.display = "none";
            console.log(cover_opacity);
            while (intervals_animate.length > 0) {
                clearInterval(intervals_animate.pop());
            }
            return;
        }
    }, 10));
}

function changeImg(mode) {
    if (mode === 0) {

    }
    else if (mode === 1) {

    }

}

function load_img() {

}