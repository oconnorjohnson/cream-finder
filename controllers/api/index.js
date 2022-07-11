const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routeRoutes = require('./routeRoutes');

router.use('/users', userRoutes);
router.use('/routes', routeRoutes);

module.exports = router;
