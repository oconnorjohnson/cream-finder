const { Truck } = require('../models');

const Truckdata = [
  {
    title: 'Blossoming Apricot',
    artist: 'LedyX',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedTrucks = () =>Truck.bulkCreate(Truckdata);

module.exports = seedTrucks;