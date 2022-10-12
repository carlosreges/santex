const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const categoriasService = require('../services/categorias.services');
const InvalidPasswordException = require('../exceptions/invalidPassword.exceptions');

async function getOne(data) {
  return categoriasService.findOne(data);
}

module.exports = {
  
  getOne,
};
