const userProvider = require('../providers/user.providers');
const userModel = require ('../models/user.models');
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userProvider.login(username, password);
    res.json(user);
  } catch (error) {
    next(error);
  }
}
/* async function guardar(req,res,next){
try {
  const { username, password,  email } = req.body;
  const result = await userModel.create(req.body);
  res.json(user);
} catch (error) {
  next(error);
} */
/* } */

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function userInfo(req, res, next) {
  try {
    const userData = await userProvider.getOne({
      id: req.user.id,
    });
    res.json(userData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  userInfo,
  guardar,
};
