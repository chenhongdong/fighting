const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/index-tree.tsx',
    output: {
        path: path.join(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'     // 把ts进行加载和转译
            },
            {
                enforce: 'pre',  // 方便调试  顺序 pre normal inline post
                test: /\.tsx?$/,
                loader: 'source-map-loader'    // 从源代码中提取sourcemap，目的方便调试
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}