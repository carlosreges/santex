module.exports = (sequelize, DataTypes) => {
   
  const locales = sequelize.define("locales", {
    id_local: {
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
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },

  }, {
    timestamps: false,
    tableName: 'locales',
  });
/*  (async () => {
    await sequelize.sync({ force: true }); //CREA LAS TABLAS NUEVAMENTE
  })();  */
  return locales;
};

