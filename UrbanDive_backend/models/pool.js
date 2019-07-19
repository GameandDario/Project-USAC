'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pool = sequelize.define('Pool', {
    name: DataTypes.STRING,
    totalUsers: DataTypes.INTEGER,
    normalUsers: DataTypes.INTEGER,
    deluxeUsers: DataTypes.INTEGER
  }, {});
  Pool.associate = function(models) {
    // associations can be defined here
    Pool.hasMany(models.User, {as: 'divers'})
  };
  return Pool;
};
