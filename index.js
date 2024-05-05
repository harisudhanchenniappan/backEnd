const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
const {connectDb,mongoose}=require('./db')
const {createUserSchema,forgotPasswordModel, shortUrlModel}=require('./schema')

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

const handleLogin=async(req,res)=>{
    console.log(req.query.password)
    const user =await createUserSchema.find({
        username:req.query.username,
        password:req.query.password
        
    })
    res.send(user)
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



app.patch('/changePassword',(req,res)=>{
    changePassword(req,res)
})

app.get('/login',(req,res)=>{
    handleLogin(req,res)
})

app.post('/createShortUrl',(req,res)=>{
    shortUrlModel.create({
        longUrl:req.body.longUrl,
        hashValue:req.body.hashValue,
        shortUrl:`www.urlShortner/${req.body.hashValue}`
    }).then((dbres)=>res.send(dbres))
})
app.get('/urls',async(req,res)=>{
    res.send(await shortUrlModel.find({}))
})

app.listen(4001,()=>{
    console.log('server started @ 4000');
})






