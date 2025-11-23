const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const TodoSchema = new mongoose.Schema({
   todo : {
     type:String,
     require: true
   }
})

module.exports.TodoSchema = mongoose.model("todo",TodoSchema)