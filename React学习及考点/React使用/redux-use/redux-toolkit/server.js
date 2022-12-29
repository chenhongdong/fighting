const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use((req, res, next) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            next()
        } else {
            next('接口出错')
        }
    }, 1000)
})

let todos = [{ id: 1, text: '吃饭🍚' }, { id: 2, text: '睡觉😴' }]

app.get('/todos/list', (req, res) => {
    res.json(todos)
})

app.get('/todos/detail/:id', (req, res) => {
    const id = req.params.id
    const todo = todos.find(item => item.id === +id)
    res.json(todo)
})

app.listen(9000, () => {console.log('端口9000已经启动！')})