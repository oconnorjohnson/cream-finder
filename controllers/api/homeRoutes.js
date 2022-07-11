const router = require('express').Router();
const { User } = require('../../models/User');
const { Truck } = require('../../models/Truck');

router.get('/', async (req, res) => {
    // Store the bookData in a variable once the promise is resolved.
    const userData = await User.findAll();
  
    // Return the userData promise inside of the JSON response
    return res.json(userData);
  });
  

  module.exports = router;