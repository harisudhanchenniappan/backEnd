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

const shortUrl=new schema({
    longUrl:{type:String},
    hashValue:{type:String},
    shortUrl:{type:String}
})
const createUserSchema=mongoose.model('users',createUser)
const forgotPasswordModel=mongoose.model('forgot_password',forgotPassword)
const shortUrlModel=mongoose.model('short-url',shortUrl)
module.exports={
    createUserSchema,
    forgotPasswordModel,
    shortUrlModel
}