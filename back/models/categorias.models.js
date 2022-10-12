'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
   
    static associate(models) {
      
    }
  };
  categorias.init({
    id_categorias: DataTypes.INTEGER,
    Categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
};