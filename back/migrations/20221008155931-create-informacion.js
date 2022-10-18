'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('informacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_infomracion: {
        type: Sequelize.INTEGER
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Horario: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Logo: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('informacion');
  }
};