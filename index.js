const bodyParser = require('body-parser');
const express=require('express');
const { mongoose,connectdb } = require('./db');
const { roomModel, bookRoomModel } = require('./schema');
const app=express();
app.use(bodyParser.json())

connectdb();
app.get('/',(req,res)=>{
    console.log(mongoose.connection.readyState)
    res.send('started')
})

app.post('/createRoom',(req,res)=>{
    roomModel.create({
        numberOfSeats:req.body.numberOfSeats,
        pricePerHour:req.body.pricePerHour,
        amenities:req.body.amenities,
        roomID:req.body.roomID,
        bookedStatus:false
    }).then((dbres)=>res.send(dbres)).catch((err)=>console.error(err))
})

app.post('/bookRoom',async(req,res)=>{
    let id=req.body.roomID
   const availableRoom=await roomModel.findOne({roomID:id})
   console.log(availableRoom);
   if(availableRoom){
    bookRoomModel.create({
        customerName:req.body.customerName,
        date:req.body.date,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        roomID:id
    }).then((dbres)=>res.send(dbres))
   await roomModel.findOneAndUpdate({roomID:id},{$set:{bookedStatus:true}},{new:true})
   }
   else
   res.send('room unavailable')
    
})

app.get('/bookedRooms',async(req,res)=>{
   res.send(await bookRoomModel.find({}))
   
})

app.get('/bookedCustomer',async(req,res)=>{
   res.send( await bookRoomModel.aggregate([{$group:{_id:'$customerName',
    rooms:{$push:'$roomID'},
    date:{$push:'$date'},
    startTime:{$push:'$startTime'},
    endtTime:{$push:'$endTime'}
    }}]))
})

app.get('/numberOfTimesBooked',async(req,res)=>{
    res.send( await bookRoomModel.aggregate([{$group:{_id:'$customerName',
    NumberOfTimesBooked:{$sum:1},
    rooms:{$push:'$roomID'},
    date:{$push:'$date'},
    startTime:{$push:'$startTime'},
    endtTime:{$push:'$endTime'},
    bookingID:{$push:'$_id'} ,   
    
    }}  

]))
})

app.listen(4000,()=>{
    console.log('server started @4000')
})