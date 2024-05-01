1. To create a room, the end point is   
'/createRoom' 

the schema is:       
numberOfSeats:{type:Number},   
pricePerHour:{type:Number},   
amenities:{type:Array},   
roomID:{type:Number},   
bookedStatus:{type:Boolean}      

2. To book a room, the end point is   
'/bookRoom'    

   the schema is:   
   customerName:{type:String},   
    date:{type:Date},   
    startTime:{type:Number},   
    endTime:{type:Number},   
    roomID:{type:Number}      

3. To list all the booked rooms,the end point is   
'/bookedRooms'   
     
4. To list all the customers who have booked the room,the end point is   
'/bookedCustomer'   
   
5. To check how many times a customer has booked a room,the end point is   
'/numberOfTimesBooked'   

   
