import app from '../app'
import chai, { expect } from 'chai'


describe('测试用户的restful接口', () => {
    it('POST /users 添加用户', async () => {
        const res = await chai.request(app)
            .post('/users')    // 以POST方法请求/users路径
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '小白', password: 'xiaobai123', email: 'xiaobai@sina.com.cn' })
        // 期待返回200的状态码
        expect(res).to.have.status(200)
        // 期待响应体里有errno和data的属性被返回
        expect(res.body).to.have.property('errno')
        expect(res.body.errno).to.equal(0)
        expect(res.body).to.have.property('data')
        expect(res.body.data.id).to.equal(1)
    })

    it('GET /users 查看所有用户', async () => {
        await chai.request(app)
            .post('/users')    // 以POST方法请求/users路径
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '小白', password: 'xiaobai123', email: 'xiaobai@sina.com.cn' })

        await chai.request(app)
            .post('/users')    // 以POST方法请求/users路径
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '杨过', password: 'yangguo666', email: 'sunny_yang@163.com' })

        const res = await chai.request(app)
            .get('/users')


        expect(res).to.have.status(200)
        expect(res.body.errno).to.equal(0)
        expect(res.body.data).to.have.lengthOf(2)
    })

    it('PUT /users/:id 更新用户', async () => {
        const res = await chai.request(app)
            .post('/users')    // 以POST方法请求/users路径
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '小白', password: 'xiaobai123', email: 'xiaobai@sina.com.cn' })

        await chai.request(app)
            .put(`/users/${res.body.data.id}`)
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '杨康', password: 'yangkang666', email: 'king_yang@126.com' })

        const res3 = await chai.request(app)
            .get(`/users/${res.body.data.id}`)

        expect(res3).to.have.status(200)
        expect(res3.body.errno).to.equal(0)
        expect(res3.body.data.username).to.equal('杨康')
        expect(res3.body.data.password).to.equal('yangkang666')
        expect(res3.body.data.email).to.equal('king_yang@126.com')
    })

    it('DELETE /users/:id 删除用户', async () => {
        await chai.request(app)
            .post('/users')    // 以POST方法请求/users路径
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '小白', password: 'xiaobai123', email: 'xiaobai@sina.com.cn' })

        await chai.request(app)
            .post('/users')    // 以POST方法请求/users路径
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '杨过', password: 'yangguo666', email: 'sunny_yang@163.com' })

        await chai.request(app)
            .post('/users')    // 以POST方法请求/users路径
            .set('Content-Type', 'application/json')    // 设置请求头的类型
            .send({ username: '王重阳', password: 'chongyanggong', email: 'wangchongyang@sohu.com' })

        await chai.request(app)
            .delete('/users/3')

        
        const res = await chai.request(app)
            .get('/users')


        expect(res).to.have.status(200)
        expect(res.body.errno).to.equal(0)
        expect(res.body.data).to.have.lengthOf(2)
    })
})