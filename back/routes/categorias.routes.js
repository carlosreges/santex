const Express = require('express');
const { ConnectionAcquireTimeoutError, Sequelize } = require('sequelize');
const { sequelize } = require('../models');
/*const Passport = require('passport');
const categoriasController = require('../controllers/categorias.controllers');
require('../middleware/passport.middleware')(Passport);
const UserValidator = require('../middleware/validations/users/user.validations.middleware');
const Validator = require('../middleware/validation.middleware');*/

const mysql = require('mysql')
const app = Express();


/* app.post('/login', [
  UserValidator.validate('login'),
  Validator.checkValidationResult,
],
categoriasController.login); */

// users/info/1
/*  app.get('/myInfo', [
  Passport.authenticate('jwt', { session: false }),
],
categoriasController.userInfo); */

app.get("", (req,res)=>{
 res.send("Categorias") 
  /* const sql = 'SELECT * FROM santexacademy.categorias'; */
  /* Connection.query(sql,(error,results)=>{ 
  if (error) throw error;
      if (results.length >0 ){
        res.json (results);
      }else {
        res.send ('no results');
      }
    });*/
});
module.exports = app;