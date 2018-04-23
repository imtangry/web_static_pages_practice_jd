// 尝试使用require
require.config({
    baseUrl: './js',
    paths: {
        vue:'./vue/vue',
        jq: './jq/jquery-3.3.1.min',
        img: 'jd_imgs',
        index:'overwrite_index'
    },


    shim: {
        img: {
            deps: ['jq']
        }
    }
});
// 引入
require(["jq",'vue','index','img'], function () {

});