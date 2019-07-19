'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    // associations can be defined
    Photo.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  };
  return Photo;
};
