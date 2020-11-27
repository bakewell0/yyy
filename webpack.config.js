const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module:{   // 第三方模块配置规则
        rules:[
            {
                test:/\.js|jsx$/ , 
                use:{
                    loader:'babel-loader',
                    options: {
                        presets:['@babel/preset-env']}
                    }, 
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.stylus$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre' // 预处理
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html' // 生成的内存中首页的名称
        })
    ]
    // module: {
    //     loaders: [
    //     { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude:     /node_modules/ },
    //     { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    //     { test: /\.css$/, loader: "style!css" },
    //     {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
    //     ]
    // },
    // resolve:{
    //     extensions:['','.js','.json']
    // },
    // plugins: [
    //     new webpack.NoErrorsPlugin()
    // ]
};