import { Sequelize } from 'sequelize'

// Sequelize参数，数据库名称，用户名，密码，配置
const seq = new Sequelize('api', 'root', 'samsungchd', {
    host: 'localhost',
    dialect: 'mysql',    // 你要使用哪种数据库
    logging: false       // 不用再写SQL语句的日志
})


export {
    seq
}