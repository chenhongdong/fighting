const babel = require('@babel/core')

function loader(source, inputSourceMap, data) {
    const options = {
        presets: ['@babel/preset-env'],
        inputSourceMap: inputSourceMap,
        sourceMaps: true,
        filename: this.request.split('!')[1].split('/').pop()
    }
    let { code, map, ast } = babel.transform(source, options)
    console.log('代码', code)
    return this.callback(null, code, map, ast)
}

module.exports = loader