const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Route extends Model {}

Route.init(
  {
    route_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    truck_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "truck",
        key: "id",
      },
<<<<<<< HEAD
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Route",
  }
=======
      // truck_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model:"truck",
      //     key: "id"
      //   }
      // },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model:"user",
          key: "id"
        }
      },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Route',
    }
>>>>>>> 01303b95d2914308ec36414c481b2fdddf6da022
);

module.exports = Route;
