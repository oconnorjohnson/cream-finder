const User = require('./User');
const Truck = require('./truck')
const Route = require('./route')

User.hasMany(Truck, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
  });

  Truck.belongsTo(User, {
    foreignKey: 'id'
  });

  Route.belongsTo(User, {
    foreignKey: 'id'
  });


module.exports = { User, Truck, Route };