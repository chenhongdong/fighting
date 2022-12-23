import chai from "chai";
import chaiHttp from 'chai-http'
import { seq, User } from '../model'


chai.use(chaiHttp)

// 会在所有的单元测试之前执行
before(async () => {
    // 先让模型里的定义和数据库里的定义同步一下
    seq.sync()
})
// 会在每个单元测试之前执行
beforeEach(async () => {
    await User.truncate()   // 截断表
})
// 会在每个单元测试之后执行
afterEach(async () => {
    await User.truncate()   // 截断表
})

// 会在所有的单元测试之后执行
after(async () => {

})