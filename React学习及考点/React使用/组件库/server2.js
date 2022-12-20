const Koa = require('koa')
const koaStatic = require('koa-static')
const koaBody = require('koa-body')
const path = require('path')
const fs = require('fs')
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Accept')
    ctx.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS')
    if (ctx.method === 'OPTIONS') {
        ctx.body = 200
    } else {
        await next()
    }
})


const uploadDir = path.resolve(__dirname, 'uploads')


app.use(koaBody({
    formidable: { uploadDir },
    multipart: true
}))

// 把上传的目录当成静态文件中间件所在目录
app.use(koaStatic(uploadDir))


app.use(async (ctx, next) => {
    console.log('请求体', ctx.body)

    if (ctx.url === '/upload') {
        console.log('Files', ctx.request)
        const file = ctx.request.files.file
        const filename = path.basename(file.path) + path.extname(file.name)
        // 重命名文件
        fs.renameSync(file.path, path.join(path.dirname(file.path)), filename)
        console.log('打印file: ', file)
        ctx.body = {
            url: `http://localhost:9001/${filename}`
        }
    } else {
        await next()
    }
})

app.listen(9001)