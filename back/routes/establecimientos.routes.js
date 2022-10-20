const Express = require('express');

const establecimientoController = require ( '../controllers/establecimientos.controllers');

const app = Express.Router();

app.get("/all",establecimientoController.getEstablecimientos);
app.delete("/del/:id",establecimientoController.deleteEstablecimeintos);
/* app.put("/upd",categoriasController.updateCategorias); */

app.post("/add", establecimientoController.insertEstablecimientos);
app.get("/buscar/:titulo", establecimientoController.buscarPorTitulo);


module.exports = app;