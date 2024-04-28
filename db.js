const mongoose=require('mongoose');
const mongoDB='mongodb+srv://HARISUDHAN1611:Hari1611%21@cluster0.iqfirm0.mongodb.net/forgotPassword'

const connectDb=async()=>{
    await mongoose.connect(mongoDB)
    console.log('server connected');
}

module.exports={
    connectDb,
    mongoose
}