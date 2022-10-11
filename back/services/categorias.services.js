const categoriasModel = require('../models').categorias;

async function findOne(data, attributes = null) {
  const categorias = await categoriasModel.findOne({ where: data, attributes });
  return categorias;
}

module.exports = {
  findOne,
};
