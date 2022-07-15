const router = require('express').Router();
const { Review } = require('../../models/');

router.get('/review', async (req, res) => {
    const reviewData = await Review.findAll();
  
    return res.json(reviewData);
  });

//for future development, will get reveiws from customers
// router.get('/reviews', async (req, res) => {
//     const bookData = await Book.findAll({
//       order: ['title'],
//       where: {
//         is_paperback: true,
//       },
//       attributes: {
//         exclude: ['is_paperback', 'edition'],
//       },
//     });
  
//     return res.json(bookData);
//   });


module.exports = router;