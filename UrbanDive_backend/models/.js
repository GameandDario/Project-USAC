'use strict';
module.exports = (sequelize, DataTypes) => {
  const = sequelize.define('', {
    totalNormalTickets: DataTypes.INTEGER,
    totalDeluxeTickets: DataTypes.INTEGER,
    photos: DataTypes.INTEGER,
    meals: DataTypes.INTEGER,
    drinks: DataTypes.INTEGER,
    totalCash: DataTypes.INTEGER
  }, {});.associate = function(models) {
    // associations can be defined here
  };
  return;
};