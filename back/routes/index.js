const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const userRoute = require('./user.routes');
const establecimientosRoute = require('./establecimientos.routes');
const redes_socialesRoute = require('./redes_sociales.routes');
const informacionRoute = require('./informacion.routes');

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/users', userRoute);
app.use('/establecimientos',establecimientosRoute);
app.use('/redes_sociales',redes_socialesRoute);
app.use('/informacion',informacionRoute);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
