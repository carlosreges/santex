const Express = require('express');
const Passport = require('passport');
const userController = require('../controllers/user.controllers');
require('../middleware/passport.middleware')(Passport);
const UserValidator = require('../middleware/validations/users/user.validations.middleware');
const Validator = require('../middleware/validation.middleware');
const { sequelize } = require('../models');

const app = Express();

app.post('/login', [
  UserValidator.validate('login'),
  Validator.checkValidationResult,
],
userController.login);
app.post('/add',userController.guardar);
app.get('/buscar/:username',userController.buscarPorUsuario);
app.delete('/del/:username',userController.deleteUsuario);

// users/info/1
app.get('/myInfo', [
  Passport.authenticate('jwt', { session: false }),
],
userController.userInfo);

app.get("",(req,res)=>{
  res.send("Funciona Usuarios")
 });

module.exports = app;
