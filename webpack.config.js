
const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devServer:{
        // --open --port 3000 --contentBase src --hot
        //这是配置 dev-server 命令参数的第二种
        open:true,//自动打开浏览器
        port:3000, //设置启动时候的运行端口
        contentBase:'src', //指定托管目录
        hot:true //异步更新页面，启动热更新 的第一步
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),  //new 一个人热更新 模块对象，这是启用热更新最后异步
        new htmlWebpackPlugin({ //创建一个 内存中生成的页面的插件
            template:path.join(__dirname,'./src/index.html'),  //指定模板页面，根据页面路径，会生成到内存中去
            filename:'index.html' //指定的生成页面名称
        })
    ],
    module:{//配置第三方loader模块
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.sass$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=1&name=-[hash:8][name].[ext]']},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},//字体设置
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //babel转换高级的ES语法
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{//设置vue被导入包的路径
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
}