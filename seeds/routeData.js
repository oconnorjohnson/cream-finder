const { Route } = require('../models');

const Routedata = [
  {
    address_1: 'testRoute1',
    eta_1: '11:00AM',
    address_2: 'testRoute2',
    eta_2: '11:10AM',
    address_3: 'testRoute3',
    eta_3: '11:15AM',
    address_4: 'testRoute4',
    eta_4: '11:30AM',
    address_5: 'testRoute5',
    eta_5: '11:45AM',
    Week_days: 'test MWF'
  },
];

const seedRoutes = () =>Route.bulkCreate(Routedata);

module.exports = seedRoutes;