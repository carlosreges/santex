const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const categoriasService = require('../services/categorias.services');
const InvalidPasswordException = require('../exceptions/invalidPassword.exceptions');
const categorias = require('../models/categorias');

function createToken(id) {
  const expirationTime = Number(process.env.JWT_EXPIRATION_TOKEN);
  return jwt.sign(
    { categoriasId: id },
    process.env.JWT_ENCRYPTION_TOKEN,
    { expiresIn: expirationTime },
  );
}
async function login(categoria, id) {
  const categoria = await categoriasService.findOne({ categoria });
  if (categoria) {
    const isCorrect = bcrypt.compareSync(categoria);
    if (isCorrect) {
      const token = createToken(categorias.id);
      delete categoria.dataValues.password;
      return { categoria, token };
    }
  }
  throw new InvalidPasswordException();
}

async function getOne(data) {
  return categoriasService.findOne(data, { exclude: ['categorias'] });
}

module.exports = {
  login,
  getOne,
};
