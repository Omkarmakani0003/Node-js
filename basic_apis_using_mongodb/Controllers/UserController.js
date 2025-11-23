const  express = require('express')
const { users } = require('../Models/User')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true }))


const addUser = async(req,res)=>{

    const {name,email,password} = req.body

     if(!name && !email && !password){
       return res.status(400).json({success : false , messsage : 'All field are required'})
     }
  
     const isExist = await users.findOne({email})
     if(isExist){
       return res.status(400).json({success : false , messsage : 'This email is already taken'})
     }

    const hashPass = await bcrypt.hash(password,10)
    const data = await users.create({
         name,
         email,
         password : hashPass
     })
     
    res.status(200).json({message : "User registration successfully", data : data})
}

const login = async (req,res)=>{
   const {email , password} = req.body

   if(!email || !password){
    return  res.status(400).json({success : false , messsage : 'Email and passsword are required'})
   }

   const isExist = await users.findOne({email})
   if(!isExist){
      return res.status(400).json({success : false , messsage : 'The user not found'})
   }

   const checkPass = await bcrypt.compare(password,isExist.password)

   if(!checkPass){
     return res.status(400).json({success : false , message: 'email and password incorrect'})
   }

   res.status(200).json({success : true , message: 'login successfully' , user : isExist})
   
}

const getAllUsers = async(req,res)=>{
    const GetUsers = await users.find()
    
    if(!GetUsers){
       res.status(400).json({success : false , message: 'User not found'}) 
    }

    res.status(200).json({success : true , message: 'Users getting successfully', data : GetUsers})
}

const findUser = async(req,res)=>{
    const id = req.params.id
    const GetUsers = await users.findById(id)
    
    if(!GetUsers){
      return res.status(400).json({success : false , message: 'User not found'}) 
    }

    res.status(200).json({success : true , message: 'Users getting successfully', data : GetUsers})
}

const editUser = async(req,res)=>{
    const id = req.params.id
    const {name,email} = req.body

    if(!name && !email){
      return res.status(400).json({success : false , messsage : 'All field are required'})
    }

    const data = await users.findByIdAndUpdate(id,{
         name,
         email,
     },{new: true,runValidators : true})
    res.status(200).json({success : true , message: 'User update successfully', data : data})
}

const deleteUSer = async(req,res)=>{
    const id = req.params.id 
    const data = await users.findByIdAndDelete(id)
     if(!data){
      return res.status(400).json({success : false , messsage : 'User not found'})
    }
    res.status(200).json({success : true , message: 'User deleted successfully', data : data})
}

module.exports = {addUser , login , getAllUsers, findUser, editUser, deleteUSer}