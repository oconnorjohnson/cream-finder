const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedTruck = require('./TruckData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  //await seedTruck();

  process.exit(0);
};

seedAll();
