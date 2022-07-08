const { User } = require('../models');

const Truckdata = [
  {
    userName: 'test',
    email: 'test@test.com',
    password: 'password',
    backgroundTest: true,
    firstName: 'test',
    driver: true
  },
];

const seedUser = () =>Truck.bulkCreate(Truckdata);

module.exports = seedUser;