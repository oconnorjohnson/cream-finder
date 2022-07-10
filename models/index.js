const User = require('./User');
const Truck = require('./truck')

//module.exports = { Truck };

User.hasMany(Truck, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
  });

  Truck.belongsTo(User, {
    foreignKey: 'id'
  });
module.exports = { User, Truck };