const {
  findCarsInUseWithLowFuel,
  findReservedCarsWithUnauthorizedDriver,
  createNewCar,
  updateStatus,
  updateCarsLocation,
  destroyCar,
} = require('../services/UserService');

class CarController {
  async getInUseWithLowFuel(req, res) {
    try {
      const cars = await findCarsInUseWithLowFuel();

      return res.json(cars);
    } catch (e) {
      console.log(e);
    }
  }

  async getUnauthorized(req, res) {
    try {
      const cars = await findReservedCarsWithUnauthorizedDriver();

      return res.json(cars);
    } catch (e) {
      console.log(e);
    }
  }

  async createCar(req, res) {
    try {
      const body = req.body;

      const car = await createNewCar(body);

      return res.json(car);
    } catch (e) {
      console.log(e);
    }
  }

  async updateInService(req, res) {
    try {
      await updateStatus();

      res.json({
        message: 'Cars successfully have been updated to the database',
      });
    } catch (err) {
      console.log(err);
    }
  }

  async updateLocation(req, res) {
    try {
      await updateCarsLocation();

      res.json({
        message: 'Cars successfully have been updated to the database',
      });
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCar(req, res) {
    try {
      const { vin } = req.params;

      const car = await destroyCar(vin);

      return res.json(car);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CarController();
