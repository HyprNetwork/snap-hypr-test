const path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

// webpack配置
module.exports = {
    mode: 'development',
    entry: {
        'poker_test': path.join(__dirname, './poker_test.ts')
    },
    devtool: 'source-map',
    target: 'web', // 将项目的目标设置为web, 而不是node
    // externals: [nodeExternals()], // 排除Node.js核心模块
    output: {
        path: path.join(__dirname, './'),
        filename: 'poker_test.js',
        library: 'PokerTest'
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: path.join(__dirname, 'poker_test.html'),
            filename: path.join(__dirname, 'index.html'),
            chunks: ['poker_test'],
            inject: 'body'
        })],
    devServer: {
        port: 10001,
        open: true,    //打开浏览器
        hot: true,      //热更新
        historyApiFallback: true,
        host: 'localhost',    //指定地址
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    }
}