const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../database');
const Department = require('./department');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING(50), 
  },
  lastname: {
    type: DataTypes.STRING(50), 
    allowNull: false
  },
  is_deleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
  },
  email: {
    type: DataTypes.STRING(50), 
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(50), 
    allowNull: false,
    set(value) {
      const hashedPassword = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hashedPassword);
    }
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false
  },
  hobbies: {
    type: DataTypes.STRING(50), 
    allowNull: false,
    defaultValue: '',
    get() {
      return this.getDataValue('hobbies').split(';'); 
    },
    set(value) {
      this.setDataValue('hobbies', value.join(';')); 
    }
  },
  departmentid: {
    type: DataTypes.INTEGER(5),
    allowNull: true,
    references: {
      model: Department,
      key: 'departmentid'
    }
  }
});

sequelize.sync() 
    .then(() => {
        console.log('Models synced successfully.');
    })
    .catch(err => {
        console.error('Unable to sync models:', err);
    });

module.exports = User;
