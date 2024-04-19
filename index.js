const express=require('express');
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.json());
const {mongoose,connectDB}=require('./db')
const{signupModel,teachersModel,studentsModel}=require('./schema')

const myprocess=require('dotenv').config()
const cors=require('cors');
app.use(cors());

connectDB();
console.log(process.env.MONGO_DB)
app.get('/',async (req,res)=>{
    
    console.log(mongoose.connection.readyState)

    res.send('started')
});

app.get('/signup',(req,res)=>{
    signupModel.create({
        username:"hari",
        password:"123444"
    })
    .then((dbres)=>
    {console.log(dbres);
    res.send(dbres)})
    .catch((err)=>console.log(err))
})

app.post('/createStudent',(req,res)=>{
    studentsModel.create({
        name:req.body.name,
        rollno:req.body.rollno,
        std:req.body.std
    })
    .then((dbres)=>res.send(dbres))
    .catch((err)=>console.error(err))
})

app.post('/createTeacher',(req,res)=>{
    teachersModel.create({
        name:req.body.name,
        id:req.body.id
    })
    .then((dbres)=>res.send(dbres))
    .catch((err)=>console.error(err))
});

app.get('/std',(req,res)=>{
    const std1=req.query.std;
    const filter={std:std1}
    studentsModel.find(filter).then((dbres)=>res.send(dbres))
})

app.put('/updateTeacher',(req,res)=>{
    const rollno=req.body.rollno;
    const teacher=req.body.teacher;
    const filter={rollno:rollno};
    const update={teacher:teacher};
    studentsModel.findOneAndUpdate(filter,update).then((dbres)=>res.send('updated successfully'))
})

app.listen(4000,()=>{
    console.log('server started @4000')
});


