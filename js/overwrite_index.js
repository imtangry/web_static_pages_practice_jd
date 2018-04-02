var city = new Vue({
        el: "#city",
        data: {
            turn_red: {
                color: "#F10215",
                backgroundColor: "#ffffff"
            },
            city: [
                {data_id: 0, city: "北京"},
                {data_id: 1, city: "上海"},
                {data_id: 2, city: "天津"},
                {data_id: 3, city: "重庆"},
                {data_id: 4, city: "河北"},
                {data_id: 5, city: "山西"},
                {data_id: 6, city: "河南"},
                {data_id: 7, city: "辽宁"},
                {data_id: 8, city: "吉林"},
                {data_id: 9, city: "黑龙江"},
                {data_id: 10, city: "内蒙古"},
                {data_id: 11, city: "江苏"},
                {data_id: 12, city: "山东"},
                {data_id: 13, city: "安徽"},
                {data_id: 14, city: "浙江"},
                {data_id: 15, city: "福建"},
                {data_id: 16, city: "湖北"},
                {data_id: 17, city: "湖南"},
                {data_id: 18, city: "广东"},
                {data_id: 19, city: "广西"},
                {data_id: 20, city: "江西"},
                {data_id: 21, city: "四川"},
                {data_id: 22, city: "海南"},
                {data_id: 23, city: "贵州"},
                {data_id: 24, city: "云南"},
                {data_id: 25, city: "西藏"},
                {data_id: 26, city: "陕西"},
                {data_id: 27, city: "甘肃"},
                {data_id: 28, city: "青海"},
                {data_id: 29, city: "宁夏"},
                {data_id: 30, city: "新疆"},
                {data_id: 31, city: "港澳"},
                {data_id: 32, city: "台湾"},
                {data_id: 33, city: "钓鱼岛"},
                {data_id: 34, city: "海外"},
            ]
        }

    }),
    app1 = new Vue({
        el: "#app1",
        data: {
            message: "测试"
        }
    });

// 还是用js写第一个下拉表格的效果
var city=document.getElementById("city").getElementsByClassName("item");
var red_now;
for(var i=0;i<city.length;i++){
    var city_=city[i];
    city_.addEventListener("click",function () {
        city_.children[0].style.backgroundColor="#F10215";
        city_.children[0].style.color="#ffffff";
        if(red_now===undefined){
            red_now=i;
            return;
        }else {
            city[red_now].children[0].style.backgroundColor="#ffffff";
            city[red_now].children[0].style.backgroundColor="#999999";
        }

    });
}



