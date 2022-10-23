const Express = require('express');

const informacionController = require ( '../controllers/informacion.controllers')



const app = Express.Router();

app.get("/all",informacionController.getInformacion);
app.delete("/del",informacionController.deleteInformacion);
app.put("/upd",informacionController.updateInformacion); 

app.post("/add", informacionController.insertInformacion);
app.get("/buscar/:id", informacionController.buscarPorId);

module.exports = app;