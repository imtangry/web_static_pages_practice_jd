var app1=new Vue({
    el:"#app-1",
    data:{
        before:"初始化"
    },
    computed:{
        message:function () {
            return this.before.split("").reverse().join("");
        }
    }
});


