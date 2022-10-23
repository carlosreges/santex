const Express = require('express');

const redessocialesController = require ( '../controllers/redessociales.controllers');

const app = Express.Router();

app.get("/all",redessocialesController.getRedesSociales);
app.delete("/del/:nombre",redessocialesController.deleteRedesSociales);


app.post("/add", redessocialesController.insertRedesSociales);
app.get("/buscar/:nombre", redessocialesController.buscarPorNombre);


module.exports = app;