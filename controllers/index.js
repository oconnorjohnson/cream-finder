const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//const routeRoutes = require('./routeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router.use('/route', routeRoutes);

module.exports = router;
