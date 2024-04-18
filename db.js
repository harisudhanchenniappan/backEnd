const mongoose=require('mongoose')

const mongoDB='mongodb+srv://HARISUDHAN1611:Hari1611%21@cluster0.iqfirm0.mongodb.net/nodeDay3'

const connectDB=async()=>{
    await mongoose.connect(mongoDB);
    console.log('connected')
}

module.exports={
    mongoose,
    connectDB
}