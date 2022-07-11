const { Review } = require('../models');

const Reviewdata = [
  {
    review: {
        review: 'The driver was a creep!'
    }
  },
];

const seedReview = () =>Review.bulkCreate(Reviewdata);

module.exports = seedReview;