'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pseudo: {
      type: DataTypes.STRING,
      validate: {
        len: [3,10]
      }
    },
    poolId: DataTypes.INTEGER,
    ticket: DataTypes.BOOLEAN,
    message: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 300]
      }
    },
    vote: {
     type: DataTypes.INTEGER,
     validate: {
       len: [0, 5]
     }
   },
    photo: DataTypes.BOOLEAN,
    nbPhoto: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Pool, {foreignKey: 'poolId', as: 'pool'});
    User.hasMany(models.Photo, {as: 'photos'});

  };
  return User;
};
