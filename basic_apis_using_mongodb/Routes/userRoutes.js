const express = require('express');
const {addUser , login ,getAllUsers, findUser, editUser, deleteUSer} = require('../Controllers/UserController');
const upload = require('../middleware/cloudinary')

const route = express.Router();

route.post('/add',upload.single('profile'),addUser)
route.post('/login',login)
route.get('/allusers',getAllUsers)
route.get('/users/:id',findUser)
route.put('/edituser/:id',editUser)
route.delete('/delete/:id',deleteUSer)


module.exports.route = route