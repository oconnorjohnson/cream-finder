const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedTruck = require('./TruckData');
const seedRoutes = require('./RouteData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedTruck();
  
  await seedRoutes();

  process.exit(0);
};

seedAll();
