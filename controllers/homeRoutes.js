const router = require('express').Router();
// const { User } = require('../models');

router.get('/', async (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  

  // router.get('/login', (req, res) => {
  //   // If the user is already logged in, redirect the request to another route
  //   if (req.session.logged_in) {
  //     res.redirect('/profile');
  //     return;
  //   }
  
  //   res.render('login');
  // });
  module.exports = router;
