const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-app', 'root', 'Root@123', {
    dialect: 'mysql', 
    host: 'localhost'})

module.exports = sequelize;