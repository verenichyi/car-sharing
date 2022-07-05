const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { Driver } = require('./Driver');

const CreditCard = sequelize.define(
  'credit_card',
  {
    credit_card_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    card_number: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    card_holder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card_valid_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

CreditCard.hasOne(Driver, {
  foreignKey: 'credit_card_id',
  onDelete: 'cascade',
  hooks: true,
});

Driver.belongsTo(CreditCard, {foreignKey: 'credit_card_id',});

module.exports = {
  CreditCard,
};
