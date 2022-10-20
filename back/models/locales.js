'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  locales.init({
    id_local: DataTypes.NUMBER,
    Categoria: DataTypes.STRING,
    Titulo: DataTypes.STRING,
    Direccion: DataTypes.STRING,
    Telefono: DataTypes.STRING,
    Web: DataTypes.STRING,
    Facebook: DataTypes.STRING,
    Instagram: DataTypes.STRING,
    Imagen: DataTypes.STRING,
    Descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'locales',
  });
  return locales;
};