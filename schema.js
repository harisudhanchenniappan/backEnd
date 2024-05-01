
const {mongoose}=require('./db')
const schema=mongoose.Schema

const createRoom=new schema({
numberOfSeats:{type:Number},
pricePerHour:{type:Number},
amenities:{type:Array},
roomID:{type:Number},
bookedStatus:{type:Boolean}
})

const bookRoom=new schema({
    customerName:{type:String},
    date:{type:Date},
    startTime:{type:Number},
    endTime:{type:Number},
    roomID:{type:Number}
})


const roomModel=mongoose.model('rooms',createRoom)
const bookRoomModel=mongoose.model('book-room',bookRoom)

module.exports={
    roomModel,
    bookRoomModel
}