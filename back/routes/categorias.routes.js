/* import {query} from "promise-mysql"; */
/* const { config } = require('dotenv'); */
const Express = require('express');
/* const { sequelize } = require('../models');  */
const categoriasController = require ( '../controllers/categorias.controllers');
/* const categoriasModels = require('../models/categorias.models'); */

/* const app=Express();
app.get("/all",categoriasController.getCategorias()); */
/* app.get("/all",async (req,res)=>{ 
     res.send("Ruta OK"); 
});    */

/* module.exports = app; */

/* import { response, Router } from "express"; */
/* import { methods as cateoriasControllers } from "../controllers/categorias.controllers"; */


const app = Express.Router();

app.get("/all",categoriasController.getCategorias);

/* app.post("/all", function(req, res){categoriasController.postCategorias}); */


module.exports = app;