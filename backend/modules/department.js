const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Department = sequelize.define('Department', {
  departmentid: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true
  },
  departmentname: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  }
});

sequelize.sync() 
    .then(() => {
        console.log('Models synced successfully.');
    })
    .catch(err => {
        console.error('Unable to sync models:', err);
    });
module.exports = Department;