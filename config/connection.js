const Sequelize = require('sequelize');
const colors = require('colors')
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  console.log('deployed!'.rainbow)
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
  console.log('         Cream FINDER!  '.rainbow)
}
console.log('SERVER CONNECTED!'.green)
module.exports = sequelize;
