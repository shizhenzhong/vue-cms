
const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPugin=require('vue-loader/lib/plugin')
module.exports={
    mode: 'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|bmp|gif|jpeg|png)$/,use:'url-loader?limit=58000&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    // resolve:{
    //     alias:{  //修改vue被导入包时的路径
    //         "vue$":"vue/dist/vue.js"
    //     }
    // }
}