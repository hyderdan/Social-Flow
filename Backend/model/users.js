const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    profile:[
      
    ],
    username:String,
    email:String,
    PhoneNo:Number,
    dateofbirth:Date,
    password:String,
    confirmPassword:String,
    status:String,
})
const User=userschema.model('user',userschema);
module.exports={
    User
}