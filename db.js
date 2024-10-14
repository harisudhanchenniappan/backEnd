const mongoose=require('mongoose')
const myprocess=require('dotenv').config()

const mongoDB=myprocess.parsed.MongoDB

const connectDB=async()=>{
 await mongoose.connect(mongoDB)
 console.log(mongoose.connection.readyState,'Connection Case')
}

module.exports={
    mongoose,
    connectDB
}