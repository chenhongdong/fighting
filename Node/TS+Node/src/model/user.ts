import { Model, DataTypes } from 'sequelize'
import { seq } from './sequelize'

/* 
    每个数据库表会对应一个模型Model
    Model里面封装了针对数据库的各种操作
 */
class User extends Model {

}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
}, { sequelize: seq, modelName: 'user' })


// sync是同步，把我们定义的模型结构同步到数据库里
/* seq.sync().then(() => {
    return User.create({
        username: '小白',
        password: 'xiaobai123',
        email: 'xiaobai@sina.com.cn'
    })
}).then((res: User) => {
    console.log(res)
    
}) */


export {
    User
}