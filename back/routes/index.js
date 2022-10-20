const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const userRoute = require('./user.routes');
<<<<<<< HEAD
const categoriasRoute = require ('./categorias.routes');
=======
const categoriasRoute = require('./categorias.routes');
const informacionRoute = require('./informacion.routes');
const redessocialesRoute = require('./redessociales.routes');
const localesRoute = require('./locales.routes');

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/users', userRoute);
app.use('/categorias',categoriasRoute);
<<<<<<< HEAD
=======
app.use('/info',informacionRoute);
app.use('/redSocial',redessocialesRoute);
app.use('/local',localesRoute);

>>>>>>> b19e6b0d62176ca50677d0ee6bca4a733c60a8f3
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);



module.exports = app;
