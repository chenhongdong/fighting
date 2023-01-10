# webpack的tree-shaking原理
- chatGPT回答：Tree-shaking是一种优化技术，它可以帮助我们减少JS文件的体积，它的原理是：在打包的时候，webpack会分析模块之间的依赖关系，只有被引用的模块才会被打包进去，没有被引用的模块就会被摇树(Tree-shaking)抛弃掉，这样就可以减少打包后文件的体积。