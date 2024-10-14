const mongoose=require('mongoose')

const mongoDB='mongodb+srv://HARISUDHAN1611:HARI2611@cluster0.iqfirm0.mongodb.net/test'

const connectDB=async()=>{
 await mongoose.connect(mongoDB)
 console.log(mongoose.connection.readyState,'Connection Case')
}

module.exports={
    mongoose,
    connectDB
}