const mongoose=require('mongoose')
const mongoDb='mongodb+srv://HARISUDHAN1611:Hari1611%21@cluster0.iqfirm0.mongodb.net/bookingRoom'

const connectdb=async()=>{
   await mongoose.connect(mongoDb)
   console.log('server connected')
}

module.exports={
    connectdb,
    mongoose
}