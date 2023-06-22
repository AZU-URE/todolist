const { Sequelize, DataTypes } = require("sequelize")

const sequelize = require('../config/db')

const Item = sequelize.define( //model name
    "item", //table name
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
)


sequelize.sync({ alter: true }).then(() => {
    console.log("----table created-------");
})

module.exports = Item

// id,name,checked