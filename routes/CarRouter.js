const Router = require('express');
const router = new Router();
const CarController = require('../controllers/CarController');

const {
  getInUseWithLowFuel,
  getUnauthorized,
  createCar,
  updateInService,
  updateLocation,
  deleteCar,
} = CarController;

router.get('/in-use-with-low-fuel', getInUseWithLowFuel);
router.get('/unauthorized', getUnauthorized);
router.post('/', createCar);
router.put('/update-in-service', updateInService);
router.put('/update-location', updateLocation);
router.delete('/:vin', deleteCar);

module.exports = router;
