const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    profile:[
      
    ],
    bio:String,
    username:String,
    email:String,
    PhoneNo:Number,
    dateofbirth:Date,
    password:String,
    confirmPassword:String,
    status:String,
})
const User= mongoose.model('user',userschema);
module.exports={
    User
}