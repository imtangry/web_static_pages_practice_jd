// 声明式渲染
Vue.component("todo-item", {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});


var app1 = new Vue({
        el: "#app-1",
        data: {
            message: "这是声明式渲染"
        }
    }),

    app2 = new Vue({
        el: "#app-2",
        data: {
            message: "页面加载于" + new Date().toLocaleString()
        }
    }),

    app3 = new Vue({
        el: "#app-3",
        data: {
            seen: true
        }
    }),

    app4 = new Vue({
        el: "#app-4",
        data: {
            todos: [{text: "这是第1个"}, {text: "这是第2个"}, {text: "这是第3个"}, {text: "这是第4个"}]
        }
    }),

    app5 = new Vue({
        el: "#app-5",
        data: {
            message: "Hello vue，这是Vue的监听器",

        },
        methods: {
            reverse: function () {
               return this.message = this.message.split("").reverse().join("");
            }
        }
    }),

    app6 = new Vue({
        el: "#app-6",
        data: {
            message: "这是一个列表循环组件",
            list: [{id: 1, text: "这是第一个"}, {id: 2, text: "这是第二个"}, {id: 3, text: "这是第三个"}, {id: 4, text: "这是第四个"}]
        }
    }),

    app7 = new Vue({
        el: "#app-7",
        data: {
            message: "Hello Vue!"
        }
    })

