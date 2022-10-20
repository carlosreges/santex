const Express = require('express');

const redessocialesController = require ( '../controllers/redessociales.controllers');

const app = Express.Router();

app.get("/all",redessocialesController.getRedesSociales);
app.delete("/del/:id",redessocialesController.deleteRedesSociales);
/* app.put("/upd",categoriasController.updateCategorias); */

app.post("/add", redessocialesController.insertRedesSociales);
app.get("/buscar/:nombre", redessocialesController.buscarPorNombre);


module.exports = app;