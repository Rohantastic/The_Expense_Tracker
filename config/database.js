const {Sequelize} = require('sequelize');

const sequelize = Sequelize('expenseTracker','root','root',{
    host : "localhost",
    dialect: 'mysql'
});


module.exports = sequelize;