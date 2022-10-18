/* import {query} from "promise-mysql"; */
const { config } = require('dotenv');
const Express = require('express');
const { sequelize } = require('../models'); 
const categoriasModels = require('../models/categorias.models');

const app = Express.Router();
 app.get("/all",async (req,res)=>{ 
     res.send("Ruta OK"); 
});   

module.exports = app;
