const { Truck } = require('../models');



const Truckdata = [
  {
    userName: 'test',
    email: 'test@test.com',
    password: 'password',
    backgroundTest: true,
    firstName: 'test',
    driver: true,
    driver_id: 'testdriver',
    truck_name: 'trucktest'
  },
];

const seedTrucks = () =>Truck.bulkCreate(Truckdata);

module.exports = seedTrucks;