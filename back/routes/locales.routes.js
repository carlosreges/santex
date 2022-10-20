const Express = require('express');

const localesController = require ( '../controllers/locales.controllers');

const app = Express.Router();

app.get("/all",localesController.getLocales);
app.delete("/del/:id",localesController.deleteLocales);
/* app.put("/upd",categoriasController.updateCategorias); */

app.post("/add", localesController.insertLocales);
app.get("/buscar/:titulo", localesController.buscarPorTitulo);


module.exports = app;