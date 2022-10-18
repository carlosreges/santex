const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas
const userRoute = require('./user.routes');
const categoriasRoute = require('./categorias.routes');
const informacionRoute = require('./informacion.routes');


// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/users', userRoute);
app.use('/categorias',categoriasRoute);
app.use('/info',informacionRoute);


app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);



module.exports = app;
