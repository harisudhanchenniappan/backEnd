const express=require('express');
const bodyParser=require('body-parser');
const nodemailer = require("nodemailer");

//const { connectDb } = require('./db');
const app=express();
app.use(bodyParser.json());
const {connectDb,mongoose}=require('./db')
const {createUserSchema,forgotPasswordModel}=require('./schema')

const cors=require('cors')
app.use(cors());


connectDb();

const findUser=async(req,res)=>{
    res.send(await createUserSchema.find({}))
}

const verifyOtp=async(req,res)=>{
    res.send(await forgotPasswordModel.find({}))
}

const changePassword=async(req,res)=>{
    const user=await createUserSchema.findOneAndUpdate({username:req.body.username},{$set:{password:req.body.password}},{new: true})
   
   res.send(user)
}


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "acharisudhan1611@gmail.com",
      pass: "hari2611!",
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main(req,res) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '<acharisudhan1611@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "otp ✔", // Subject line
      text: req.body.randomString, // plain text body
      
    });
  
    console.log("Message sent: %s", info.messageId);
    
}



app.get('/',(req,res)=>{
    console.log(mongoose.connection.readyState)
    res.send('started')
})



app.post('/createUser',(req,res)=>{
    
    createUserSchema.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then((dbres)=>{
        res.send(dbres)
    }).catch((err)=>console.error(err))
})

app.get('/users',(req,res)=>{
    findUser(req,res)
})

app.post('/forgotPassword',(req,res)=>{
    forgotPasswordModel.create({
        username:req.body.username,
        randomString:req.body.randomString,
        id:req.body.id
    }).then((dbres)=>res.send(dbres))
})

app.get('/verifyOtp',(req,res)=>{
    verifyOtp(req,res)
})

app.post('/sendMail',(req,res)=>{
    main(req,res).catch(console.error);
})

app.patch('/changePassword',(req,res)=>{
    changePassword(req,res)
})

app.listen(4001,()=>{
    console.log('server started @ 4000');
})






