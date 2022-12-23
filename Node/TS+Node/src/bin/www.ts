import app from '../app'
import http from 'http'
const port = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(port)

server.on('listening', () => {
    console.log('正在监听端口' + port)
})
server.on('error', (err) => {
    console.error(err)
})