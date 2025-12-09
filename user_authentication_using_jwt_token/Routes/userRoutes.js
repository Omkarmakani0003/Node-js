const express = require('express');
const {addUser , login ,getAllUsers, findUser, editUser, deleteUSer} = require('../Controllers/UserController');
const {isAuthenticated} = require('../middleware/auth')

const route = express.Router();

route.post('/add',isAuthenticated,addUser)
route.post('/login',login)
route.get('/allusers' ,isAuthenticated, getAllUsers)
route.get('/users/:id' ,isAuthenticated, findUser)
route.put('/edituser/:id' ,isAuthenticated, editUser)
route.delete('/delete/:id' ,isAuthenticated, deleteUSer)


module.exports.route = route