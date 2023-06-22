const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    'practice_project_db',
    'azuure',
    'azuure',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = sequelize;