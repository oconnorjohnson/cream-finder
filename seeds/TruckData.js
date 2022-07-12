const { Truck } = require('../models');

const Truckdata = [
  {
    truck_name: 'The Comfy Cone',
    user_id: 1
  },
  {
    truck_name: 'Team Cream',
    user_id: 2
  }
]

// const Truckdata = [
//   {
//     userName: 'comfycone',
//     email: 'mario@gmail.com',
//     password: 'password',
//     backgroundTest: true,
//     firstName: 'Mario',
//     driver: true,
//     dl_num: 'N5529780',
//     truck_name: 'The Comfy Cone'
//   },
//   {
//     userName: 'teamcream',
//     email: 'birdo@gmail.com',
//     password: 'password',
//     backgroundTest: true,
//     firstName: 'Birdo',
//     driver: true,
//     dl_num: 'L2141606',
//     truck_name: 'Team Cream'
//   },
//   {
//     userName: 'jealousgelato',
//     email: 'lakitu@gmail.com',
//     password: 'password',
//     backgroundTest: true,
//     firstName: 'lakitu',
//     driver: true,
//     dl_num: 'E2891159',
//     truck_name: 'Jealous Gelato'
//   },
//   {
//     userName: 'stickyfingers ',
//     email: 'daisy@gmail.com',
//     password: 'password',
//     backgroundTest: true,
//     firstName: 'Daisy',
//     driver: true,
//     dl_num: 'X2106782',
//     truck_name: 'Sticky Fingers'
//   }
// ];

const seedTrucks = () =>Truck.bulkCreate(Truckdata);

module.exports = seedTrucks;