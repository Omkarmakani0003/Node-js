const  express = require('express')
const dotenv = require('dotenv')
const { connection } = require('./config/connection')
const addUser = require('./Controllers/UserController')
const { route } = require('./Routes/userRoutes')
const cookies = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cookies())

dotenv.config()
connection()

app.use('/api/user/',route)


app.listen(process.env.PORT,()=>{
    console.log('server is running',process.env.PORT)
})