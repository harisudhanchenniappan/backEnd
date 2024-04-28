const {mongoose}=require('./db')
const schema=mongoose.Schema

const createUser=new schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
})

const forgotPassword=new schema({
    username:{type:String},
    randomString:{type:String},
    id:{type:String}
})
const createUserSchema=mongoose.model('users',createUser)
const forgotPasswordModel=mongoose.model('forgot_password',forgotPassword)

module.exports={
    createUserSchema,
    forgotPasswordModel,
}