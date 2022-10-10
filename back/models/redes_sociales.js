'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class redes_sociales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  redes_sociales.init({
    id_redes_sociales: DataTypes.STRING,
    Red_social: DataTypes.STRING,
    Url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'redes_sociales',
  });
  return redes_sociales;
};