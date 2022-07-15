const router = require('express').Router();
const { Route, User, Truck } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/truckprofile');
  //   return;
  // }

  console.log(req.session, 'asdfasdf')

  res.render('login', {
    logged_In: req.session.logged_in,
  });
});


// for future development, will get truck data on homepage, 
// including new routes and trucks
// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const routeData = await Route.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const routes = routeData.map((route) => route.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       routes, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// future development, will get truck/user by id
// router.get('/route/:id', async (req, res) => {
//   try {
//     const routeData = await Route.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const route = routeData.get({ plain: true });

//     res.render('route', {
//       ...route,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/truckprofile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Route }, { model: Truck }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('truckprofile', {
      user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/truckprofile');
    return;
  }
  res.render('loginpage');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/truckprofile');
    return;
  }
  res.render('signup');
});

module.exports = router;
