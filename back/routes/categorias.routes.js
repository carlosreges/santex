const Express = require('express');
const Passport = require('passport');
const establecimientosController = require('../controllers/categorias.controllers');
require('../middleware/passport.middleware')(Passport);
/* const UserValidator = require('../middleware/validations/users/user.validations.middleware');
const Validator = require('../middleware/validation.middleware'); */

const app = Express();

/* app.post('/login', [
  UserValidator.validate('login'),
  Validator.checkValidationResult,
],
userController.login);

// users/info/1
app.get('/myInfo', [
  Passport.authenticate('jwt', { session: false }),
],
userController.userInfo); */

app.get("",(req,res)=>{
  res.send("Funciona Establecimientos")
 });

module.exports = app;
