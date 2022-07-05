const cards = [
  {
    card_holder: 'John Cena',
    card_valid_date: '2024-01-25',
  },
  {
    card_holder: 'Johny Depp',
    card_valid_date: '2028-04-2',
  },
  {
    card_holder: 'Brad Pitt',
    card_valid_date: '2024-07-05',
  },
  {
    card_holder: 'Sasha Gray',
    card_valid_date: '2026-05-05',
  },
  {
    card_holder: 'Tony Stark',
    card_valid_date: '2020-01-25',
  },
];

const drivers = [
  {
    first_name: 'John',
    last_name: 'Cena',
    credit_card_id: 1,
  },
  {
    first_name: 'Johny',
    last_name: 'Depp',
    credit_card_id: 2,
  },
  {
    first_name: 'Brad',
    last_name: 'Pitt',
    credit_card_id: 3,
  },
  {
    first_name: 'Sasha',
    last_name: 'Gray',
    credit_card_id: 4,
  },
  {
    first_name: 'Tony',
    last_name: 'Stark',
    credit_card_id: 5,
  },
  {
    first_name: 'Jimmy',
    last_name: 'Neutron',
  },
  {
    first_name: 'Peter',
    last_name: 'Parker',
  },
];

const runs = [
  {
    start_date: '2022-06-16',
    driver_id: 1,
  },
  {
    start_date: '2022-06-16',
    driver_id: 2,
  },
  {
    start_date: '2022-06-16',
    driver_id: 3,
  },
  {
    start_date: '2022-06-16',
    driver_id: 4,
  },
  {
    start_date: '2022-06-16',
    driver_id: 5,
  },
  {
    start_date: '2022-06-16',
    driver_id: 6,
  },
  {
    start_date: '2022-06-16',
    driver_id: 7,
  },
];

const cars = [
	{
		brand: 'VW',
		model: 'Polo',
		status: 'In use',
		production_date: '2020-01-01',
    mileage: 25000,
    fuel_level: 14,
    current_run_id: 1
	},
  {
    brand: 'VW',
    model: 'Polo',
    status: 'In use',
    production_date: '2020-01-01',
    mileage: 25000,
    fuel_level: 9,
    current_run_id: 2
  },
  {
    brand: 'VW',
    model: 'Polo',
    status: 'Reserved',
    production_date: '2005-01-01',
    mileage: 25000,
    fuel_level: 98,
    current_run_id: 6
  },
  {
    brand: 'VW',
    model: 'Polo',
    status: 'Reserved',
    production_date: '2005-01-01',
    mileage: 25000,
    fuel_level: 57,
    current_run_id: 7
  },
  {
    brand: 'VW',
    model: 'Polo',
    status: 'Reserved',
    production_date: '2005-01-01',
    mileage: 25000,
    fuel_level: 57,
  },
  {
    brand: 'VW',
    model: 'Polo',
    status: 'Reserved',
    production_date: '2005-01-01',
    mileage: 156000,
    fuel_level: 57,
  },
];

const bookings = [
  {
    vin_id: 1,
    run_id: 1
  },
  {
    vin_id: 2,
    run_id: 2
  },
  {
    vin_id: 3,
    run_id: 6
  },
  {
    vin_id: 6,
    run_id: 7
  },
]

module.exports = {
  cards,
  drivers,
  runs,
  cars,
  bookings
};
