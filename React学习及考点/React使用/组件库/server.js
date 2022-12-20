const express = require('express')
const app = express()
const path = require('path')
const formidable = require('formidable')
const fs = require('fs')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200)
    }
    next()
})

const uploadDir = path.resolve(__dirname, 'uploads')

app.use(express.static(uploadDir))


app.get('/getChildren', (req, res) => {
    const data = req.query
    setTimeout(() => {
        res.json({
            errno: 0,
            data: [
                {
                    name: '货运',
                    key: `${data.key}-1`,
                    type: 'folder',
                    collapsed: true
                },
                {
                    name: '青桔单车',
                    key: `${data.key}-2`,
                    type: 'folder',
                    collapsed: true
                }
            ]
        })
    }, 1200)
})




/* 
filepath: '/Users/chenhongdong/Desktop/备战高考/React学习及考点/React使用/组件库/uploads/e127101b0cffef42899d73400',
newFilename: 'e127101b0cffef42899d73400',
originalFilename: '2020.png',
mimetype: 'image/png'
*/
app.post('/upload', (req, res, next) => {
    const form = formidable({ uploadDir, multiples: true })

    form.parse(req, (err, fields, files) => {
        console.log('所有字段', fields)  // { filename: 文件名} 这里是通过formData.append('filename', 文件名)
        console.log('请求图片', files, files.newFilename, files.originalFilename)
        if (err) {
            next(err)
            return
        }
        const file = files.file
        const filename = file.newFilename + path.extname(file.originalFilename)
        fs.renameSync(file.filepath, path.join(uploadDir, filename))

        res.json({ url: `http://localhost:9001/${filename}` })
    })
})

app.listen(9001)