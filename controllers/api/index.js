const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routeRoutes = require('./routeRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/routes', routeRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
