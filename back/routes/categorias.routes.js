/* import {query} from "promise-mysql"; */
const { config } = require('dotenv');
const Express = require('express');
const { sequelize } = require('../models'); 
const categoriasModels = require('../models/categorias.models');

/* import { response, Router } from "express"; */

/* import { methods as languageController } from "../controllers/language.controller"; */

const app = Express.Router();
/* const router=Router(); */
/* router.get("/",languageController.getLanguages); */


 app.get("",async (req,res)=>{ 
    /* const categorias = await sequelize.query("SELECT * FROM `categorias`", { type: QueryTypes.SELECT }); */
    /* res.send("Ruta OK"); */
/*     const connection = await config();
   const result=await connection.Query("SELECT * FROM santexacademy.categorias");
  
   console.log(result);
   res.json(result);  */



const Categorias = await categoriasModels.findAll({atributes:['Categorias']})
if(Categorias === null){
    console.log('NO TIENE');
} else {
    console.log(Categorias instanceof categoriasModels);
}
/* .then(categoria=>{
    const resultados = JSON.stringify(categoria)
    console.log(resultados);
})
.catch(error=>{
    console.log(error);
}) */

});   





module.exports = app;
/* export default router; */


/*const connection = mysql.createConnection(config);

connection.connect();
connection.query('SELECT * FROM categorias', (err, rows, fields)=>{
    if(err) throw err
    console.log('the solution is: ', rows[0].solution)
})

connection.end(); */