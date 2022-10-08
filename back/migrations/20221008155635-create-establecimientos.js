'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('establecimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idestablecimientos: {
        type: Sequelize.INTEGER
      },
      Categoria: {
        type: Sequelize.STRING
      },
      Titulo: {
        type: Sequelize.STRING
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.STRING
      },
      Web: {
        type: Sequelize.STRING
      },
      Facebook: {
        type: Sequelize.STRING
      },
      Instagram: {
        type: Sequelize.STRING
      },
      Imagen: {
        type: Sequelize.STRING
      },
      Descripcion: {
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
    await queryInterface.dropTable('establecimientos');
  }
};