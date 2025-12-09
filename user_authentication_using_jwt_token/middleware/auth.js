const { users } = require('../Models/User')
const jwt = require('jsonwebtoken')


exports.isAuthenticated = async(req,res,next) =>{

    try{
        
        const token = req.cookies.token
        if(!token){
           return res.status(401).json({message : "User is not authorize"})
        }
        const check = await jwt.verify(token,'omkar1010')
        const user = await users.findById(check.id)
        if(!user){
          return res.status(401).json({message : "User is not foun"})
        }
        next()

    }catch (e){
       return res.status(401).json({message : e})
    }
}