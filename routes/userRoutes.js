const express = require('express');
const { userRegisterController } = require('../controller/userRegisterController');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router()

// Add routes
routes.post('/register',userRegisterController)
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
