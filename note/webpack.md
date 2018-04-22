webpack的使用（本文依据rails365的视频做的笔记）：
一.安装:
npm install -g webpack(全局安装)
1.项目文件夹中使用npm init命令后一路回车,即可生成package.json文件
2.继续使用npm install webpack –-save-dev(可用-D缩写)后会生成node_modules文件夹,
会遇到的问题：安装完成后运行webpack会遇到command not find.
解决方法：echo $(npm config get prefix)/bin
          you will get STRING, which should include to your .bash_profile such way
          export PATH=$PATH:STRING
problem solved!
二.使用:
文件夹下新建src用来写源文件，dist存放编译后的文件。
我们新建一个js文件，如下图：

webpack常见命令：
1.webpack src/app.js dist/app.bundle.js(将源文件打包并发布到dist下)
会遇到的问题：

这时候把命令换成：webpack src/app.js --output dist/app.bundle.js --mode development即可.
2.webpack src/app.js --output dist/app.bundle.js --mode development --watch
这时候就会监听源文件,源文件发生改变,编译后的文件也会发生自动改变
3.webpack src/app.js --output dist/app.bundle.js --mode development -p
会生成压缩后的编译文件？
最后发现一个问题，版本不同好像操作不同，但是大致功能是差不多的。
4.配置webpack.config.js(在根目录下新建这个文件)
这里output不知道为什么不是./dist/app.bundle.js
如果是这会在dist下生成一个dist文件夹
而且还会报没有指定编译模式的warn.并且编译后的文件默认是压缩过的
5.进一步简化命令：
在package.json下加入如下代码：
这样直接运行：npm run dev就相当于2中的命令了,没事就报错说需要安装webpack-cli
6.在dist下新建index.html然后引入dist下的js
但是这样会有点不灵活，我们可以安装一个插件：HTML Webpack Plugin,在github可以找到这个项目,根据github文档,
1.使用npm install html-webpack-plugin –save-dev安装
2.根据文档来操作,如图：
然后删除dist下的index,之后执行npm run dev就会在dist下自动生成一个index.html
同样,这个插件可以根据src下的模板生成编译文件，而且可以生成压缩后的html,具体用法可以参考github的文档

2018/4/18 更新：

看了webpack4.x的视频：
webpack-cli相当于一个命令行提供工具，这个版本的命令和打包功能是分开的。
约定大于配置，这个版本的入口js默认是src下index.js文件。输出是dist下的main.js
可以使用npm i cnpm -g 安装淘宝源。

