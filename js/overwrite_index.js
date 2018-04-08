var city = new Vue({
        el: "#top_more1",
        data: {
            turn_red: {
                color: "#F10215",
                backgroundColor: "#ffffff"
            },
            city_selected: "北京",
            city_unselected: '',
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
        },
        methods: {
            // 使用Vue完成城市选择
            styleChange: function (item) {
                this.city_selected = item.city;
                if (typeof item.selected == 'undefined') {
                    Vue.set(item, "selected", true);
                    if (this.city_unselected == '') {
                        this.city_unselected = item;
                        return false;
                    }
                    if (this.city_unselected.data_id !== item.data_id) {
                        this.city_unselected.selected = !this.city_unselected.selected;
                        this.city_unselected = item;
                    }
                }
                else {

                    if (this.city_unselected.data_id !== item.data_id) {
                        // 注意语句的顺序
                        this.city_unselected.selected = !this.city_unselected.selected;
                        item.selected = !item.selected;
                        this.city_unselected = item;
                    }
                }
            }
        }
    }),

    my_jd = new Vue({
        el: "#my_jd",
        data: {
            item1: [
                {option: "待处理订单"},
                {option: "消息"},
                {option: "返修退换货"},
                {option: "我的问答"},
                {option: "降价商品"},
                {option: "我的关注"}
            ],
            item2: [
                {option: "我的京豆"},
                {option: "我的优惠券"},
                {option: "我的白条"},
                {option: "我的理财"}
            ]
        }
    }),

    custom_s = new Vue({
        el: "#custom_s",
        data: {
            item1: [
                {option: "帮助中心"},
                {option: "售后服务"},
                {option: "在线客服"},
                {option: "意见建议"},
                {option: "电话客服"},
                {option: "客服邮箱"},
                {option: "金融咨询"},
                {option: "售全球客服"}

            ],
            item2: [
                {option: "合作招商"},
                {option: "学习中心"},
                {option: "商家后台"},
                {option: "京麦工作台"},
                {option: "商家帮助"},
                {option: "规则平台"}
            ]
        }
    }),

    page_nav = new Vue({
        el: "#page_nav",
        data: {
            item1: [
                {option: "京东试用"},
                {option: "京东金融"},
                {option: "全球售"},
                {option: "国际站"},
                {option: "京东会员"},
                {option: "京东预售"},
                {option: "买什么"},
                {option: "俄语站"},
                {option: "装机大师"},
                {option: "0元评测"},
                {option: "定期送"},
                {option: "港澳售"},
                {option: "优惠券"},
                {option: "秒杀"},
                {option: "闪购"},
                {option: "印尼站"},
                {option: "京东金融科技"},
                {option: "In货推荐"},
                {option: "陪伴计划"},
                {option: "出海招商"}
            ],
            item2: [
                {option: "手机"},
                {option: "智能数码"},
                {option: "玩3C"},
                {option: "电脑办公"},
                {option: "家用电器"},
                {option: "京东智能"},
                {option: "服装城"},
                {option: "京东生鲜"},
                {option: "家装城"},
                {option: "母婴"},
                {option: "食品"},
                {option: "农资频道"},
                {option: "整车"},
                {option: "图书"},
                {option: "京东元器件"}
            ],
            item3: [
                {option: "京东众筹"},
                {option: "白条"},
                {option: "京东金融App"},
                {option: "京东小金库"},
                {option: "理财"},
                {option: "智能家电"},
                {option: "话费"},
                {option: "水电煤"},
                {option: "彩票"},
                {option: "旅行"},
                {option: "机票酒店"},
                {option: "电影票"},
                {option: "京东到家"},
                {option: "京东众测"},
                {option: "游戏"}
            ],
            item4: [
                {option: "合作招商"},
                {option: "京东通信"},
                {option: "京东E卡"},
                {option: "企业采购"},
                {option: "服务市场"},
                {option: "办公生活馆"},
                {option: "乡村招募"},
                {option: "校园加盟"},
                {option: "京友邦"},
                {option: "智能社区"},
                {option: "游戏社区"},
                {option: "知识产权维权"}
            ]
        }
    }),
    head = new Vue({
        el: "#v_head",
        data: {
            test:"test",
            headList: [
                {option: "多买多折扣"},
                {option: "手机上新"},
                {option: "12期免息"},
                {option: "万店4免1"},
                {option: "多件多折"},
                {option: "眼镜节"},
                {option: "养殖必备"}
            ]
        }
    });


// 还是用js写第一个下拉表格的效果
// var city = document.getElementById("city").getElementsByClassName("item");
// var red_now;
// console.log(city.length);
// for (let i = 0; i < city.length; i++) {
//     let item = city[i].children[0];
//     item.addEventListener("click", function () {
//         city_now.city_selected = item.innerHTML;
//         item.style.backgroundColor = "#F10215";
//         item.style.color = "#ffffff";
//
//         if (red_now === undefined) {
//             red_now = i;
//             return false;
//         } else {
//             city[red_now].children[0].style.backgroundColor = "";
//             city[red_now].children[0].style.color = "#999999";
//             red_now = i;
//         }
//
//     });
// }



