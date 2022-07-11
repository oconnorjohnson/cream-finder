const { User } = require('../models');

const Userdata = [
  {
    userName: 'comfycone',
    email: 'mario@gmail.com',
    password: 'password',
    backgroundTest: true,
    firstName: 'Mario',
    driver: true
  },
  {
    userName: 'teamcream',
    email: 'birdo@gmail.com',
    password: 'password',
    backgroundTest: true,
    firstName: 'Birdo',
    driver: true
  },
  {
    userName: 'jealousgelato',
    email: 'lakitu@gmail.com',
    password: 'password',
    backgroundTest: true,
    firstName: 'Lakitu',
    driver: true
  },
  {
    userName: 'stickyfingers',
    email: 'daisy@gmail.com',
    password: 'password',
    backgroundTest: true,
    firstName: 'Daisy',
    driver: true
  }
];


const seedUser = () =>User.bulkCreate(Userdata);

module.exports = seedUser;