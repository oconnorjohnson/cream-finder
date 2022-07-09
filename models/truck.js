const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');


class Truck extends User {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Truck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    backgroundTest: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    
    },
    driver: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    driver_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        truck_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    hooks: {
      beforeCreate: async (newTruckData) => {
        newTruckData.password = await bcrypt.hash(newTruckData.password, 10);
        return newTruckData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Truck',
  }
);

module.exports = Truck;
