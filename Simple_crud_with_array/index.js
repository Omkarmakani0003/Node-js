const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cors())

const students = []

app.get('/',(req,res)=>{
    res.send(students)
})

app.post('/new',(req,res)=>{
    console.log(students[students.length-1].id)
    const {name,rollno} = req.body
    const newStudent = {
        'id' : students[students.length-1].id,
        'name' : name,
        'rollno' : parseInt(rollno)
    }
    students.push(newStudent)
    res.status(200).json({'message' : 'New student added successfully', 'data' : newStudent})
})

app.put('/update/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const student = students.find((e)=>e.id == id)
    const {name,rollno} = req.body
    student.name = name
    student.rollno = rollno
    res.status(200).json({'message' : 'student updated successfully', 'data' : student})
})

app.delete('/delete/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const student = students.findIndex((e)=>e.id == id)
    students.splice(student,1)
    res.status(200).json({'message' : 'student deleted successfully', 'data' : students})
})


app.listen(3000,()=>{
    console.log("server is running");
})