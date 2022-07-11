const { Route } = require('../models');

const Routedata = [
  {
    address_1: 'testRoute1',
    address_2: 'testRoute2',
    address_3: 'testRoute3',
    address_4: 'testRoute4',
    address_5: 'testRoute5',
    Week_days: 'test MWF'
  },
];

const seedRoutes = () =>Route.bulkCreate(Routedata);

module.exports = seedRoutes;