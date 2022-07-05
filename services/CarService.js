const {Car, Run, Driver, Booking} = require('../models');
const {Op, Sequelize} = require('sequelize');

class CarService {
	async findCarsInUseWithLowFuel(){
		const cars = await Car.findAll({
			where: {
				[Op.and]: {
					status: 'In Use',
					fuel_level: {
						[Op.lt]: 25,
					},
				},
			},
		});

		return cars;
	}

	async findReservedCarsWithUnauthorizedDriver(){
		const cars = await Car.findAll({
			where: {
				status: 'Reserved',
			},
			include: [
				{
					model: Run,
					include: [
						{
							model: Driver,
							where: {
								credit_card_id: {
									[Op.is]: null,
								},
							},
						},
					],
				},
			],
		});

		return cars;
	}

	async createNewCar(car){
		const newCar = await Car.create(car);

		return newCar;
	}

	async updateStatus(){
		await Car.update(
			{
				status: 'In Service',
			},
			{
				where: {
					[Op.or]: [
						{
							production_date: {
								[Op.lt]: '2017-01-01',
							},
						},
						{
							mileage: {
								[Op.gt]: 100000,
							},
						},
					],
				},
			}
		);
	}

	async updateCarsLocation(){
		const cars = await Car.findAll({
			include: [
				{
					model: Booking,
					attributes: [],
				},
			],
			attributes: ['vin'],
			group: ['vin'],
			having: Sequelize.literal('count(vin) > 2'),
			where: {
				status: {
					[Op.notIn]: ['In use', 'Reserved'],
				},
			},
		});

		await Car.update(
			{
				geo_latitude: 53.88828,
				geo_longitude: 27.54426,
			},
			{
				where: {
					vin: cars.map((car) => car.vin),
				},
			}
		);
	}

	async destroyCar(vin){
		const car = await Car.destroy({ where: { vin } });

		return car;
	}
}

module.exports = new CarService();
