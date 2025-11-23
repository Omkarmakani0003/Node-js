const express = require('express');
const {addUser , login ,getAllUsers, findUser, editUser, deleteUSer} = require('../Controllers/UserController');

const route = express.Router();

route.post('/add',addUser)
route.post('/login',login)
route.get('/allusers',getAllUsers)
route.get('/users/:id',findUser)
route.put('/edituser/:id',editUser)
route.delete('/delete/:id',deleteUSer)


module.exports.route = route