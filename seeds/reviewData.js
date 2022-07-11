const { Review } = require("../models");

const Reviewdata = [
  {
    review: "Tasty",
  },
  {
    review: "awful",
  }
];

const seedReview = () => Review.bulkCreate(Reviewdata);

module.exports = seedReview;
