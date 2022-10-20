module.exports = (sequelize, DataTypes) => {
  const red_social = sequelize.define('redes_sociales', {
    id_redes_sociales: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Red_social: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
    Url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'redes_sociales',
  });

  return red_social;
};


