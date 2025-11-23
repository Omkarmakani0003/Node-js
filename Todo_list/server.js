const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require('dotenv');
const { connection } = require('./config/connection');
const todoRoute = require('./Routes/route');

dotenv.config();
connection();

app.use('/api/todo/',todoRoute)

app.listen(process.env.PORT,()=>{
    console.log('Server is running on', process.env.PORT)
})