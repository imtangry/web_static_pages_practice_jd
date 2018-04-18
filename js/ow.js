// 尝试使用require
require.config({
    baseUrl: './js',
    paths: {
        jq: './jq/jquery-3.3.1.min',
        img: 'jd_imgs'
    },


    shim: {
        img: {
            deps: ['jq']
        }
    }
});
// 引入
require(["jq",'img'], function () {
});