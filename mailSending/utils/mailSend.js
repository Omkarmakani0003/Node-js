const express = require('express')
const mail = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config();

exports.mailSend = async(req,res) => {
    try{
        
        const transporter = mail.createTransport({
        service : 'gmail',
        auth:{
             user : process.env.EMAIL,
             pass : process.env.PASSWORD,
          } 
        })

    const send = {
        from : process.env.EMAIL,
        to : 'omkartestingemail21@gmail.com',
        subject : 'first node mailsending',
        text : 'this is my firat mail sending using noed js'
    }  

    await transporter.sendMail(send)

    }catch(error){
        res.status(400).json({message : 'somethigs went wrong'+ error})
    }
}
  




