const router = require('express').Router();
const { Review } = require('../../models/');

router.get('/review', async (req, res) => {
    // Store the ReviewData in a variable once the promise is resolved.
    const reviewData = await Review.findAll();
  
    // Return the reviewData promise inside of the JSON response
    return res.json(reviewData);
  }
  
);


  router.get('/reviews', async (req, res) => {
    const bookData = await Book.findAll({
      order: ['title'],
      where: {
        is_paperback: true,
      },
      attributes: {
        exclude: ['is_paperback', 'edition'],
      },
    });
  
    return res.json(bookData);
  });


module.exports = router;