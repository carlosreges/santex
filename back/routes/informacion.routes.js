/* import {query} from "promise-mysql"; */
/* const { config } = require('dotenv'); */
const Express = require('express');
/* const { sequelize } = require('../models');  */
const informacionController = require ( '../controllers/informacion.controllers')
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

app.get("/all",informacionController.getInformacion);
app.delete("/del",informacionController.deleteInformacion);
app.put("/upd",informacionController.updateInformacion);

app.get("/Findall",informacionController.findAllInformacion);
app.post("/add", informacionController.insertInformacion);


module.exports = app;