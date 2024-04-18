const {mongoose}=require('./db')

const schema=mongoose.Schema;

const signup=new schema({
    username:{type:String},
    password:{type:String}
});

const details=new schema({
    name:{type:String},
    dob:{type:Number},
    nationality:{type:String}
})


const students=new schema({
    name:{type:String},
    rollno:{type:Number},
    std:{type:String},
    teacher:{type:String}
})

const teachers=new schema({
    name:{type:String},
    id:{type:Number}
})

const teachersModel=mongoose.model("teachers",teachers)
const studentsModel=mongoose.model("students",students);
const detailsModel=mongoose.model("details",details)
const signupModel=mongoose.model("signup",signup)

module.exports={
    teachersModel,
    signupModel,
    detailsModel,
    studentsModel,
}