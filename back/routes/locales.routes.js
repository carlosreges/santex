const Express = require('express');

const localesController = require ( '../controllers/locales.controllers');

const app = Express.Router();

app.get("/all",localesController.getLocales);
app.delete("/del/:id",localesController.deleteLocales);


app.post("/add", localesController.insertLocales);
app.get("/buscar/:titulo", localesController.buscarPorTitulo);
app.get("/search/:id", localesController.buscarPorId);
app.get("/buscar/categoria/:categoria", localesController.buscarPorCategoria);

module.exports = app;