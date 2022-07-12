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
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Route",
  }
);

module.exports = Route;
