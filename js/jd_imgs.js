// 京东轮播图
var d = document,
    imgs_now = 0,
    cover = d.getElementsByClassName("white_bg")[0],
    lis = d.getElementsByClassName("imgs_list")[0].getElementsByTagName("li"),
    l_b = d.getElementsByClassName("l_button")[0],
    r_b = d.getElementsByClassName("r_button")[0];

l_b.addEventListener('click', changeImg(0, imgs_now));
r_b.addEventListener('click', changeImg(1, imgs_now));

function changeImg(mode) {
    if (mode === 0) {

    }
    else if (mode === 1) {

    }

}
function load_img() {

}