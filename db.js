const mongoose=require('mongoose')
const myprocess=require('dotenv').config()

const mongoDB=process.env.MONGO_DB

const connectDB=async()=>{
    await mongoose.connect(mongoDB);
    console.log('connected')
}

module.exports={
    mongoose,
    connectDB
}