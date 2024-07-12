
const express = require('express');
const { RegisterController, LoginController } = require('../controller/userCtrl');



// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Add routes
routes.post('/register', RegisterController);
routes.post('/login', LoginController);


module.exports = routes;
