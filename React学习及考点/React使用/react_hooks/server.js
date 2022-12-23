const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')

// 处理跨域中间件
app.use(cors())
// 处理日志中间件
app.use(logger('dev'))

// http://localhost:9001/api/users?current=1&pageSize=5
app.get('/api/users', (req, res) => {
    const current = parseInt(req.query.current)
    const pageSize = parseInt(req.query.pageSize)
    const total = 25    // 假设总数是25条
    const list = []
    let offset = (current - 1) * pageSize   // 本页条数的起始索引

    for (let i = offset; i < offset + pageSize; i++) {
        list.push({
            id: i + 1,
            name: 'name ' + (i + 1)
        })
    }


    res.json({
        current,
        pageSize,
        list,
        totalPage: Math.ceil((total / pageSize))
    })
})

app.listen(9001, () => {
    console.log('服务已经在9001端口启动！')
})