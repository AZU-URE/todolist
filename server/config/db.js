// require('dotenv').config()
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    'practice_project_db',
    process.env.USERNAME_MYSQL,
    process.env.PASSWORD_MYSQL,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = sequelize;