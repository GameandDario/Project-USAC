'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Treasuries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalNormalTickets: {
        type: Sequelize.INTEGER
      },
      totalDeluxeTickets: {
        type: Sequelize.INTEGER
      },
      photos: {
        type: Sequelize.INTEGER
      },
      meals: {
        type: Sequelize.INTEGER
      },
      drinks: {
        type: Sequelize.INTEGER
      },
      totalCash: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Treasuries');
  }
};