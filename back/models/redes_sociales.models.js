module.exports = (sequelize, DataTypes) => {
  const red_social = sequelize.define('redes_sociales', {
    id_redes_sociales: {
      type: DataTypes.INTEGER(16),
      allowNull: false,
      primaryKey: true,
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
    timestamps: true,
    tableName: 'users',
  });

  return red_social;
};


