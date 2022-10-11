const Express = require('express');
const Passport = require('passport');
const categoriasController = require('../controllers/categorias.controllers');
require('../middleware/passport.middleware')(Passport);
const UserValidator = require('../middleware/validations/users/user.validations.middleware');
const Validator = require('../middleware/validation.middleware');
const { sequelize } = require('../models');

/* Controllers */

module.exports = (app) => {
   app.get('/', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/categorias/create/categoria/:categoria/status/:status', categoriasController.create);
   app.get('/categorias/list', categoriasController.list);
   app.get('/categorias/find/categoria/:categoria', categoriasController.find)
};