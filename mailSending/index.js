const express = require('express')
const dotenv = require('dotenv')
const {mailSend} = require('./utils/mailSend') 
dotenv.config();
const app = express()

app.get('/send',async(req,res)=>{
    try{
      await mailSend()
      res.status(200).json({message : 'Mail send successfully'})
    }catch(error){
      res.status(400).json({message : 'somethigs went wrong'})
    }  
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})