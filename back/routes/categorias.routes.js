const getConnection = require('../config/config');


const getCategorias = async(req,res)=>{
   const connection = await getConnection();
   const result=await connection.query("SELECT * FROM categorias");
   console.log(result);
   res.json(result);

/* import { response, Router } from "express"; */
/* import { methods as cateoriasControllers } from "../controllers/categorias.controllers"; */


const app = Express.Router();

app.get("/all",categoriasController.getCategorias);
app.delete("/del",categoriasController.deleteCategorias);
app.put("/upd",categoriasController.updateCategorias);

app.get("/Findall",categoriasController.findAllCategorias);
app.post("/add", categoriasController.insertCategorias);

}

/* export const methods = {
    getCategorias,
    postCategorias
}; */
module.exports = {
  getCategorias,
  postCategorias
};