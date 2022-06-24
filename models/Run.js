const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { Booking } = require('./Booking');
const { Car } = require('./Car');

const Run = sequelize.define(
  'run',
  {
    run_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_fuel_level: {
      type: DataTypes.DOUBLE,
    },
    start_mileage: {
      type: DataTypes.STRING,
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'driver',
        key: 'driver_id',
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Run.hasOne(Car, {
  foreignKey: 'current_run_id',
  onDelete: 'cascade',
  hooks: true,
});
Car.belongsTo(Run, { foreignKey: 'current_run_id' });

Run.hasOne(Booking, { foreignKey: 'run_id', onDelete: 'cascade', hooks: true });
Booking.belongsTo(Run, { foreignKey: 'run_id' });

module.exports = {
  Run,
};
