const bodyParser = require('body-parser');
const express=require('express');
const { mongoose,connectdb } = require('./db');
const { createMentorModel, createStudentModel } = require('./schema');
const app=express();
app.use(bodyParser.json())

connectdb();
app.get('/',(req,res)=>{
    console.log(mongoose.connection.readyState)
    res.send('started')
})

app.post('/createMentor',(req,res)=>{
    createMentorModel.create({
        mentorName:req.body.name,
       students:[]
    }).then((dbres)=>res.send(dbres)).catch((err)=>console.error(err))
})

app.post('/createStudent',async(req,res)=>{
    
    createStudentModel.create({
        studentName:req.body.name,
        mentor:'',
        previousMentor:''
        
    }).then((dbres)=>res.send(dbres))
   
})

app.get('/mentors',async(req,res)=>{
    res.send(await createMentorModel.find({}))
})

app.get('/students',async(req,res)=>{
    res.send(await createStudentModel.find({}))
})

app.patch('/addStudents',async(req,res)=>{
   const students=req.body.students;
   const allStudents=await createStudentModel.find({mentor:''})
   let allStudents1=allStudents.map(student=>student.studentName)
   const newStudents=[]
   for(const student of students){
    if(allStudents1.includes(student))
    newStudents.push(student)
   }
   await createMentorModel.findOneAndUpdate({mentorName:req.body.name},{$set:{students:newStudents}},{new:true}).then(()=>res.send('updated successfully'))
})



app.patch('/addMentor',async(req,res)=>{
    const student=await createStudentModel.find({studentName:req.body.name})
    const prevMentor=student[0].mentor
    console.log(prevMentor);
    await createStudentModel.findOneAndUpdate({studentName:req.body.name},{$set:{mentor:req.body.mentor,previousMentor:prevMentor}},{new:true}).then(()=>res.send(`updated successfully`))
    
})

app.get('/studentsOfMentor',async(req,res)=>{
   const mentor=await createMentorModel.find({mentorName:req.body.name})
   res.send(mentor[0].students.join('\n'))
})

app.get('/previousMentor',async(req,res)=>{
    const student=await createStudentModel.find({studentName:req.body.name})
    res.send(student[0].previousMentor)
 })

app.listen(4000,()=>{
    console.log('server started @4000')
})

/*app.get('/bookedCustomer',async(req,res)=>{
    res.send( await bookRoomModel.aggregate([{$group:{_id:'$customerName',
     rooms:{$push:'$roomID'},
     date:{$push:'$date'},
     startTime:{$push:'$startTime'},
     endtTime:{$push:'$endTime'}
     }}]))
 })*/