const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { Booking } = require('./Booking');

const Car = sequelize.define(
  'car',
  {
    vin: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    registration_number: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Free',
    },
    production_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fuel_level: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    geo_latitude: {
      type: DataTypes.DOUBLE
    },
    geo_longitude: {
      type: DataTypes.DOUBLE
    },
    current_run_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'run',
        key: 'run_id',
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Car.hasMany(Booking, { foreignKey: 'vin_id', onDelete: 'cascade', hooks: true });
Booking.belongsTo(Car, { foreignKey: 'vin_id'});

module.exports = {
  Car,
};
