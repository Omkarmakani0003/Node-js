const express = require('express')
const { TodoSchema } = require("../Models/TodoSchema")
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

const addTodo = async(req,res)=>{

   const todolist = req.body

   if(!todolist.todo){
       return res.status(401).json({success : false , messages : "field is required"})
   }
  
   const isExist = await TodoSchema.findOne({todo : todolist.todo})
   if(isExist){
       return res.status(401).json({success : false , messages : "this task is already exist"})
   }
   const data = await TodoSchema.create({
      todo : todolist.todo
   })

    return res.status(200).json({success : true , messages : "New todo added successfully",data : data})
}

const getTask = async (req,res)=>{
    const data = await TodoSchema.find()
     if(!data){
       return res.status(401).json({success : false , messages : "No task found"})
    }
    return res.status(201).json({success : true , messages : "all task fetch successfuly",data:data})
}

const edit = async (req,res)=>{
    const id = req.params.id
    const data = await TodoSchema.findById(id)
     if(!data){
       return res.status(401).json({success : false , messages : "No task found"})
    }
    return res.status(201).json({success : true , messages : "all task fetch successfuly",data:data})
}

const update = async(req,res)=>{
   const id = req.params.id
   const todolist = req.body

   if(!todolist.todo){
       return res.status(401).json({success : false , messages : "field is required"})
   }
  
   const data = await TodoSchema.findByIdAndUpdate(id,{
      todo : todolist.todo
   },{
    new : true,
    runValidators : true
   })
  return res.status(200).json({success : true , messages : "task updated successfully",data : data})
}

const Delete = async (req, res)=>{
    const id = req.params.id  
    const isExist = await TodoSchema.findById(id)

    if(!isExist){
       return res.status(401).json({success : false , messages : "Task not found"})
    }
    
    const data = await TodoSchema.findByIdAndDelete(id)

    return res.status(200).json({success : true , messages : "task deleted successfully",data : data})
}

module.exports = { addTodo, getTask, edit, update, Delete}