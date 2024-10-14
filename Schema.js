const {mongoose}=require('./db')

const Schema=mongoose.Schema;

const SignupSchema= new Schema({
    username:{type:String},
    password:{type:String},

});

const SignupModel=mongoose.model('Signups1',SignupSchema);

module.exports={
    SignupModel
}