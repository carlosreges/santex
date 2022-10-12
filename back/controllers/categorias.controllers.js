const categoriasProvider = require('../providers/categorias.providers');


/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function categoriaInfo(req, res, next) {
  try {
    const { id_categoria, categoria} = req.body;
    const categoriaData = await categoriasProvider.getOne({
      id_categoria: req.categoria.id_categoria,
    });
    res.json(categoriaData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
 
 categoriaInfo,
};
