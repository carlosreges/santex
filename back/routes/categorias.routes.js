const Express = require('express');
/* //const Passport = require('passport');
//const userController = require('../controllers/user.controllers');

//require('../middleware/passport.middleware')(Passport);
//const UserValidator = require('../middleware/validations/users/user.validations.middleware');
const Validator = require('../middleware/validation.middleware');
const { ConnectionAcquireTimeoutError } = require('sequelize');
const { Result } = require('express-validator');
 */
const app = Express();

app.get('/categorias',(req,res)=>{

    const sql = 'SELECT * FROM santexacademy.categorias';

    Connection.query(sql,(error,results)=>{
if (error) throw error;
if (results.length >0 ){
    res.json (results);

}else {
    res.send ('no results');
}

    });
});
module.exports = app;