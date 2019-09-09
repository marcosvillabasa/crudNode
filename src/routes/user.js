// import express
const express = require('express');

//import controller
var UserController = require('../controllers/user');

//module Router
const app = express.Router()


//routes
app.post('/signin', UserController.postUser);
app.put('/update/:id', UserController.updateUser);
app.get('/getusers', UserController.getUsers);
app.delete('/delete/:id', UserController.deleteUser);

//exports router
module.exports = app;
