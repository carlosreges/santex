'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_local: {
        type: Sequelize.NUMBER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locales');
  }
};