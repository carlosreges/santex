module.exports = (sequelize, DataTypes) => {
   
  const informacion = sequelize.define("informacion", {
    id_infomracion: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
    },
    Direccion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Horario: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Telefono: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: false,
    },
    Logo: {
      type: DataTypes.STRING(45),
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
  return informacion;
};



