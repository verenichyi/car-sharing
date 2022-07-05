const Router = require('express');
const router = new Router();
const CarRouter = require('./CarRouter');

router.use('/car', CarRouter);

module.exports = router;
