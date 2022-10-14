/* import {getConnection} from "../database/database";  */
const getConnection = require('../database/database');

async function getCategorias(req,res){
   const connection = await getConnection();
   const result=await connection.query("SELECT * FROM categorias ");
   console.log(result);
   res.json(result);

};
module.exports = {
  getCategorias,
};

 


