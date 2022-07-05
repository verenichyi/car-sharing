const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Booking = sequelize.define(
  'booking',
  {
    booking_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'car',
        key: 'vin',
      },
    },
    run_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'run',
        key: 'run_id',
      },
    },
    finish_fuel_level: {
      type: DataTypes.INTEGER,
    },
    finish_mileage: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);


module.exports = {
  Booking,
};
