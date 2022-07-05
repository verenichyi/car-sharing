const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const {Run} = require('./Run');

const Driver = sequelize.define(
	'driver',
	{
		driver_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		license_number: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    credit_card_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model: 'credit_card',
        key: 'credit_card_id'
      }
    }
	},
	{
		timestamps: false,
		freezeTableName: true,
	}
);

Driver.hasMany(Run, {
	foreignKey: 'driver_id',
	onDelete: 'cascade',
	hooks: true,
});
Run.belongsTo(Driver, {foreignKey: 'driver_id',});

module.exports = {
	Driver,
};
