const mongoose = require('mongoose')

const users =  new mongoose.Schema({
       name : {
          type : String,
          required : true
       },
       email : {
          type : String,
          required : true,
       },
        profile : {
          type : String,
       },
       password : {
          type : String,
          required : true
       }
    })

module.exports.users = mongoose.model('users',users)