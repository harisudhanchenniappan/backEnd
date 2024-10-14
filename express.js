const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const {connectDB}=require('./db')
const {SignupModel}=require('./Schema')


app.use(bodyParser.json())

connectDB();

app.get('/',(req,res)=>{
    res.send('server running successfully')
})

app.get('/firstApi/:id',(req,res)=>{
let id=req.params.id;
res.send(id)
})

app.get('/secondApi',(req,res)=>{
    let username=req.query.username
    res.send('username: '+username)
})

app.get('/signup',(req,res)=>{
    const username=req.query.username;
    const password=req.query.password;

    SignupModel.create({
        username:username,
        password:password
    }).then((dbres)=>{
        res.send(dbres)
    }).catch((err)=>{
        console.log(err)
    })
})




app.listen(4000,()=>{
    console.log('server started successfully')
})