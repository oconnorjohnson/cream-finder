const { Review } = require("../models");

const Reviewdata = [
  {
    review_id: 1,
    review: "Tasty",
  },
  {
    review_id: 2,
    review: "awful",
  }
];

const seedReview = () => Review.bulkCreate(Reviewdata);

module.exports = seedReview;
