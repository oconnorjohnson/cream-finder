const User = require("./User");
const Truck = require("./truck");
const Route = require("./route");
const Review = require("./review");

User.hasOne(Truck, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Truck.belongsTo(User, {
  foreignKey: "user_id",
});
Truck.hasMany(Route, {
  foreignKey: "truck_id",
});
Route.belongsTo(Truck, {
  foreignKey: "truck_id",
});

Review.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Truck, Route, Review };
