/* const categoriasController = require ('../controllers/categorias.controllers');
/* import methods from "../controllers/categorias.controllers"; */
/*const Express = require('express');

const router=Express();

router.get("/",categoriasController.methods.getCategorias);
   


module.exports = app;*/
const Express = require('express');
/* import { methods as categoriasController } from "../controllers/categorias.controllers"; */
const categoriasController = require ( '../controllers/categorias.controllers');

const app=Express();

app.get("/",categoriasController.getCategorias());
   


/* export default router;


const Express = require('express');
const { sequelize } = require('../models');
const app = Express();
app.get("", (req,res)=>{
 res.send("Categorias")
}); */
module.exports = app;