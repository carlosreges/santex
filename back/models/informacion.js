'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class informacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  informacion.init({
    id_infomracion: DataTypes.INTEGER,
    Direccion: DataTypes.STRING,
    Horario: DataTypes.STRING,
    Telefono: DataTypes.STRING,
    Email: DataTypes.STRING,
    Logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'informacion',
  });
  return informacion;
};