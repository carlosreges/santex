const Express = require('express');
const Passport = require('passport');
const redes_socialesController = require('../controllers/redes_sociales.controllers');
require('../middleware/passport.middleware')(Passport);
/* const UserValidator = require('../middleware/validations/users/user.validations.middleware');
const Validator = require('../middleware/validation.middleware'); */

const app = Express();

app.get("",(req,res)=>{
  res.send("Funciona Redes Sociales")
 });
 
module.exports = app;
