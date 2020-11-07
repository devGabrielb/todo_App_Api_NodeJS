const {Router} = require('express');
const todoRoutes = require('../modules/todo/routes/todoRoutes');

const routes = Router();



routes.use('/users', todoRoutes);


module.exports = routes;