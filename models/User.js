const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');




class User extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

User.init(
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
    // hooks: {
    //   beforeCreate: async (UserData) => {
    //     UserData.password = await bcrypt.hash(UserData.password, 2);
    //     return UserData;
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;
