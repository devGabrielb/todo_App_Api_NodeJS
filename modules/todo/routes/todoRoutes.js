const express = require('express');
const todoController = require('../controllers/todoController');

const todoRoutes = express.Router();



todoRoutes.get('/',todoController.getTodo );
todoRoutes.post('/', todoController.createTodo);

module.exports = todoRoutes;

