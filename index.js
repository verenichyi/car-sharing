require('dotenv').config();
require('./models/index');
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/index');
const { CreditCard, Driver, Run, Car, Booking} = require('./models');
const { cards, drivers, runs, cars, bookings } = require('./db-mocks');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    await CreditCard.bulkCreate(cards);
    await Driver.bulkCreate(drivers);
    await Run.bulkCreate(runs);
    await Car.bulkCreate(cars);
    await Booking.bulkCreate(bookings);

    app.listen(PORT, () => console.log(`Server has started on port:${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
