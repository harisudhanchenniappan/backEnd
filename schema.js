
const {mongoose}=require('./db')
const schema=mongoose.Schema

const createMentor=new schema({
mentorName:{type:String},
students:{type:Array}
})

const createStudent=new schema({
    studentName:{type:String},
    mentor:{type:String},   
    previousMentor:{type:String}
})


const createMentorModel=mongoose.model('mentor',createMentor)
const createStudentModel=mongoose.model('students',createStudent)

module.exports={
    createMentorModel,
    createStudentModel
}