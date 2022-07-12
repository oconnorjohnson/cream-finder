const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');

class Truck extends User {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
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
    dl_num: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    truck_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model:"user",
          key: "id"
        }
        // allowNull: true,
      },
  },
  // {
  //   hooks: {
  //     beforeCreate: async (newUserData) => {
  //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
  //       return newUserData;
  //     },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Truck',
  }
);

module.exports = Truck;
