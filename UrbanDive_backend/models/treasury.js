'use strict';
module.exports = (sequelize, DataTypes) => {
  const Treasury = sequelize.define('Treasury', {
    totalNormalTickets: DataTypes.INTEGER,
    totalDeluxeTickets: DataTypes.INTEGER,
    photos: DataTypes.INTEGER,
    meals: DataTypes.INTEGER,
    drinks: DataTypes.INTEGER,
    totalCash: DataTypes.INTEGER
  }, {});
  Treasury.associate = function(models) {
    // associations can be defined here
  };
  return Treasury;
};
