const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200)
    }
    next()
})


app.get('/getChildren', (req, res) => {
    const data = req.query
    setTimeout(() => {
        res.json({
            errno: 0,
            data: [
                {
                    name: `${data.name}的儿子1`,
                    key: `${data.key}-1`,
                    type: 'folder',
                    collapsed: true
                },
                {
                    name: `${data.name}的儿子2`,
                    key: `${data.key}-2`,
                    type: 'folder',
                    collapsed: true
                }
            ]
        })
    }, 1200)
})

app.listen(3000)