
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getCreateNoteController, getEditNoteController, getAllNoteController, getDeleteNoteController } = require('../controller/noteCtrl');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Add routes
routes.post('/addnewnotes', authMiddleware, getCreateNoteController);
//get all 
routes.get('/getallnotes', authMiddleware, getAllNoteController);
//edit
routes.post('/:id', authMiddleware, getEditNoteController);
//delete
routes.delete('/:id', authMiddleware, getDeleteNoteController);


module.exports = routes;
