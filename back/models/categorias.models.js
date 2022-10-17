module.exports = (sequelize, DataTypes) => {
  const categoria = sequelize.define('categorias', {
    id_Categorias: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
    },
    Categorias: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
  }, {
    timestamps: true,
    tableName: 'categorias',
  });

  return categoria;
};



/* ********************************** */
/* ********************************** */
/* 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
 */    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
/*     static associate(models) { */
      // define association here
    /* }
  };
  categorias.init({
    id_categorias: DataTypes.INTEGER,
    Categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
}; */