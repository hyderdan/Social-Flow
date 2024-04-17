const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    profile:[
      
    ],
    followers:[

    ],
    following:[
        
    ],
    bio:String,
    username:String,
    email:String,
    PhoneNo:Number,
    dateofbirth:Date,
    password:String,
    confirmPassword:String,
    status:String,
    recentprofileviewed:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"user",
        required:false,
    }]
})
const User= mongoose.model('user',userschema);
module.exports={
    User
}