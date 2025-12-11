const express = require('express')
const {home} = require('./Controllers/HomeController')
const path = require('path');
const PORT = 3000

const app = express();

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'View'));

app.use(express.static(__dirname + '/public'));

app.get('/home',home)

app.listen(PORT,()=>{
    console.log('Serve is running on port ' + PORT)
})