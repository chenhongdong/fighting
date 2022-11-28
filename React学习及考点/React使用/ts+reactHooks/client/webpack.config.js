const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// 在ts里用这个插件，按需加载模块，build打包后能节省一半的大小，非常不错
const tsImportPlugin = require('ts-import-plugin')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),  // 静态文件根目录
        historyApiFallback: {   // browserHistory的时候，刷新会报404找不到文件
            index: './index.html'   // 自动重定向到index.html
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'node_modules')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                // babel-plugin-import可以实现antd按需加载，配合babel-loader使用
                // ts-loader要使用ts-import-plugin实现
                options: {
                    transpileOnly: true,    // 只转译，不检查
                    getCustomTransformers: () => ({  // 自定义转换器
                        before: [tsImportPlugin({   
                            'libraryName': 'antd',  // 对哪个模块进行按需加载
                            'librartDirectory': 'es',   // 按需加载的模块
                            'style': 'css'  // 自动引入对应的css
                        })]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.(j|t)sx?$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,    // 一个rem单位是75px
                            remPrecision: 8 // 保留8位小数
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader',
                {
                    loader: 'px2rem-loader',
                    options: {
                        remUnit: 75,    // 一个rem单位是75px
                        remPrecision: 8 // 保留8位小数
                    }
                },'less-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}