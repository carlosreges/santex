/* import {query} from "promise-mysql"; */
/* const { config } = require('dotenv'); */
const Express = require('express');
/* const { sequelize } = require('../models');  */
const redessocialesController = require ( '../controllers/redessociales.controllers');
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

app.get("/all",redessocialesController.getRedesSociales);
app.delete("/del/:id",redessocialesController.deleteRedesSociales);
/* app.put("/upd",categoriasController.updateCategorias); */

/* app.get("/Findall",redessocialesController.findAllRedesSociales); */
app.post("/add", redessocialesController.insertRedesSociales);
app.get("/buscar/:nombre", redessocialesController.buscarPorNombre);


module.exports = app;