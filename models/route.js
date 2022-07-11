const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Route extends Model {
    // Need to bcrypt checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // }
}

  Route.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        address_1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        address_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        address_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        address_4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        address_5: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        Week_days: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Route',
    }
);

module.exports = Route;