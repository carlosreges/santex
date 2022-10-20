module.exports = (sequelize, DataTypes) => {
   
  const establecimiento = sequelize.define("establecimientos", {
    id_establecimientos: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Categoria: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Titulo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Direccion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Telefono: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Web: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Facebook: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Instagram: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Imagen: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
    Descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
  }, {
    timestamps: false,
    tableName: 'informacion',
  });
/*  (async () => {
    await sequelize.sync({ force: true }); //CREA LAS TABLAS NUEVAMENTE
  })();  */
  return establecimiento;
};


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class establecimientos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  establecimientos.init({
    idestablecimientos: DataTypes.INTEGER,
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
    modelName: 'establecimientos',
  });
  return establecimientos;
};