const userModel = require('../models').redes_sociales;

async function findOne(data, attributes = null) {
  const user = await userModel.findOne({ where: data, attributes });
  return user;
}

module.exports = {
  findOne,
};
