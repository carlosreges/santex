const categoriasProvider = require('../providers/categorias.providers');

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function login(req, res, next) {
  try {
    const { categoria, id } = req.body;
    const categorias = await categoriasProvider.login(categoria, id);
    res.json(categorias);
  } catch (error) {
    next(error);
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function categoriaInfo(req, res, next) {
  try {
    const categoriaData = await categoriasProvider.getOne({
      id: req.categorias.id,
    });
    res.json(categoriaData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  categoriaInfo,
};
