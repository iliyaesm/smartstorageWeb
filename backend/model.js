const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

const StorageUnit = sequelize.define('StorageUnit', {
  line: { type: DataTypes.INTEGER, allowNull: false },
  position: { type: DataTypes.INTEGER, allowNull: false },
  isRented: { type: DataTypes.BOOLEAN, defaultValue: false }
});

const Renter = sequelize.define('Renter', {
  name: DataTypes.STRING,
  company: DataTypes.STRING
});

const Contract = sequelize.define('Contract', {
  startDate: DataTypes.DATEONLY,
  endDate: DataTypes.DATEONLY,
  filePath: DataTypes.STRING
});

const Payment = sequelize.define('Payment', {
  amount: DataTypes.FLOAT,
  date: DataTypes.DATEONLY
});

// Relations
StorageUnit.hasOne(Contract);
Contract.belongsTo(StorageUnit);

Renter.hasMany(Contract);
Contract.belongsTo(Renter);

Contract.hasMany(Payment);
Payment.belongsTo(Contract);

module.exports = { sequelize, StorageUnit, Renter, Contract, Payment };
