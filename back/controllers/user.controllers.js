const userProvider = require('../providers/user.providers');
const userModel = require ('../models').user;
const bcrypt = require('bcrypt');
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
async function guardar(req,res,next){
try {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const body = {
    username:req.body.username,
    password:hash,
    email:req.body.email,
  }
  debugger;
 /*  let [result, create] = await userModel.upsert(body); */
  const result = await userModel.create(body);
  res.json(user);
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

async function buscarPorUsuario(req,res){
  const { QueryTypes } = require('sequelize');
  const result = await userModel.findOne({where:{ username: req.params.username }});
 
  console.log(result);
  res.json(result); 
};

async function deleteUsuario(req,res){
  const { QueryTypes } = require('sequelize');
  const result = await userModel.destroy({where: {username: req.params.username}});
  /* const result = await sequelize.query("DELETE FROM `informacion` WHERE `id_informacion` = 3", { type: QueryTypes.DELETE }); */
  console.log(result);
  res.json(result); 
};

module.exports = {
  login,
  userInfo,
  guardar,
  buscarPorUsuario,
  deleteUsuario,
 
  
};
