const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Expense = sequelize.define('expenseTracker',{
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
},{
    timestamps:false
});


Expense.sync({alter:true});


module.exports = Expense;
