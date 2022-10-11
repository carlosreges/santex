const categoriasProvider = require('../providers/categorias.providers');

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function categoriasInfo(req, res, next) {
  try {
    const categoriasData = await categoriasProvider.getOne({
      id: req.user.id,
    });
    res.json(categoriasData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  categoriasInfo,
};


/* const sequelize = require('sequelize');
const categorias = require('../models/categorias.models');
module.exports = {
 create(req, res) {
    return categorias
        .create ({
             categoria: req.params.categoria,
        })
        .then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     return categorias.findAll({})
        .then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return categorias.findAll({
         where: {
             categoria: req.params.categoria,
         }
     })
     .then(categorias => res.status(200).send(categorias))
     .catch(error => res.status(400).send(error))
  },
}; */