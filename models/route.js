const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Route extends Model {
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
        eta_1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        stop_1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [30],
            },
        },
        address_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        eta_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        stop_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [30],
            },
        },
        address_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        eta_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        stop_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [30],
            },
        },
        address_4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        eta_4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        stop_4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [30],
            },
        },
        address_5: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        eta_5: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [42],
            },
        },
        stop_5: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [30],
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