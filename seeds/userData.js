const { User } = require('../models');

const Userdata = [
  {
    userName: 'test',
    email: 'test@test.com',
    password: 'password',
    backgroundTest: true,
    firstName: 'test',
    driver: true
  },
];


const seedUser = () =>User.bulkCreate(Userdata);

module.exports = seedUser;