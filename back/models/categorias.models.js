module.exports = (sequelize, DataTypes) => {
   
  const categoria = sequelize.define("categorias", {
    id_Categorias: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Categorias: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
  }, {
    timestamps: false,
    tableName: 'categorias',
  });
/*  (async () => {
    await sequelize.sync({ force: true }); //CREA LAS TABLAS NUEVAMENTE
  })();  */
  return categoria;
};
