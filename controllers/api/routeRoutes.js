const router = require('express').Router();
const { Route } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
  const routeData = await Route.findAll({

  });
  res.status(200).json(newRoute);
} catch (err) {
  res.status(400).json(err);
  
  return res.json(routeData);
  }
});

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newRoute = await Route.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newRoute);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const routeData = await Route.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!routeData) {
//       res.status(404).json({ message: 'No route found with this id!' });
//       return;
//     }

//     res.status(200).json(routeData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
