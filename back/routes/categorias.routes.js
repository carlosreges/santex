/* import {query} from "promise-mysql"; */
const { config } = require('dotenv');
const Express = require('express'); 

/* import { response, Router } from "express"; */

/* import { methods as languageController } from "../controllers/language.controller"; */

const app = Express.Router();
/* const router=Router(); */
/* router.get("/",languageController.getLanguages); */


 app.get("",async (req,res)=>{ 
    /* const categorias = await sequelize.query("SELECT * FROM `categorias`", { type: QueryTypes.SELECT }); */
    res.send("Ruta OK");
/*     const connection = await config();
   const result=await connection.Query("SELECT * FROM santexacademy.categorias");
  
   console.log(result);
   res.json(result);  */
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