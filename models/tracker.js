const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Tracker = sequelize.define('tracker' , {
    id: {
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey: true
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull : false
      },
      categry: {
        type : Sequelize.STRING,
        allowNull: false
      }
})

module.exports = Tracker;