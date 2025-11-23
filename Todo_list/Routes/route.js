const express = require('express')
const route = express.Router()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
const { addTodo, getTask, edit, update, Delete} = require('../Controllers/TodoController')

route.post('/add',addTodo)
route.get('/getTodo',getTask)
route.get('/edit/:id',edit)
route.put('/update/:id',update)
route.delete('/delete/:id',Delete)

module.exports = route