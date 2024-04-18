const mongoose=require('mongoose')

const mongoDB=process.env.NODE_ENV

const connectDB=async()=>{
    await mongoose.connect(mongoDB);
    console.log('connected')
}

module.exports={
    mongoose,
    connectDB
}