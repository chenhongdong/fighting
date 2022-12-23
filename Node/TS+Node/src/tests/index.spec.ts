import app from '../app'
import chai, { expect } from 'chai'


describe('测试主页的restful接口', async () => {
    it('GET / 主页', async () => {
        const res = await chai.request(app)
            .get('/')

        expect(res).to.have.status(200)
        expect(res.body.data).to.equal('home')
    })
})