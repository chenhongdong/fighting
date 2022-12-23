const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const bootstrap = path.resolve('node_modules/bootstrap/dist/css/bootstrap.css')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'



module.exports = ({ development, production }) => {
    const isEnvDevelopment = development === 'development'
    const isEnvProduction = production === 'production'
    const getStyleLoaders = (cssOptions) => {
        const loaders = [
            isEnvDevelopment && require.resolve('style-loader'),
            isEnvProduction && MiniCssExtractPlugin.loader,
            {
                loader: require.resolve('css-loader'),
                options: cssOptions
            }
        ].filter(Boolean)

        return loaders
    }

    return {
        mode: isEnvProduction ? 'producion' : isEnvDevelopment ? 'development' : 'development',
        entry: {
            main: './src/index.js'
        },
        cache: {    // webpack5，自己会带缓存
            type: 'memory'  // filesystem和memory
        },
        devtool: isEnvProduction
            ? shouldUseSourceMap
                ? 'source-map'
                : false
            : isEnvDevelopment && 'cheap-module-source-map',
        resolve: {
            modules: [path.resolve('node_modules')],    // 配置模块的查找范围，越小越好
            extensions: ['.js'],    // 扩展名
            alias: {            // 别名
                bootstrap
            },
            fallback: {
                // 加入说你引的一个包里有node核心模块，下面的三个包你都用不到，就可配false
                // 让引入的文件体积更小
                crypto: false,
                buffer: false,
                stream: false
            }
        },
        optimization: {
            minimize: isEnvProduction,  // 生产环境会启动压缩
            minimizer: [
                new TerserPlugin({ parallel: true }),   // 压缩es6语法的js插件
                new CssMinimizerPlugin()    // 压缩css
            ],
            splitChunks: {
                chunks: 'all',      // 支持async和同步
                minSize: 0,         // 最小大小
                minRemainingSize: 0,    // 分割出去剩下的大小
                maxSize: 0,         // 最大大小
                minChunks: 1,       // 最小引用次数
                maxAsyncRequests: 30,           // 异步模块最大并发请求数 import('./video.js')
                maxInitialRequests: 30,         // 同步模块最大并发请求数 import x from 'x'
                enforceSizeThreshold: 50000,    // 如果一个代码块大小超过了50k，强制打包，webpack5新增
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true
                    },
                    default: {
                        minChunks: 2,   // 一个模块被引用2次的话会单独提取
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            },
            runtimeChunk: {    // 运行时代码要单独分割
                name: entrypoint => `runtime-${entrypoint.name}`
            },
            moduleIds: isEnvProduction ? 'deterministic' : 'named',
            chunkIds: isEnvProduction ? 'deterministic' : 'named'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,   // 开启缓存目录
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-class-properties']
                            }
                        }
                    ],
                    include: path.resolve('src'),
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: getStyleLoaders({ importLoaders: 1 })
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        inject: true,
                        template: './public/index.html'
                    },
                    isEnvProduction
                        ? {
                            minify: {
                                removeComments: true,
                                collapseWhitespace: true,
                                removeRedundantAttributes: true,
                                useShortDoctype: true,
                                removeEmptyAttributes: true,
                                removeStyleLinkTypeAttributes: true,
                                keepClosingSlash: true,
                                minifyJs: true,
                                minifyCss: true,
                                minifyURLs: true
                            }
                        }
                        : undefined
                )
            ),
            new HtmlWebpackExternalsPlugin({
                externals: [
                    {
                        module: 'lodash',
                        entry: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.js',
                        global: '_'
                    }
                ]
            })
        ],
        devServer: {

        }
    }
}