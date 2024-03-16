const express=require("express");
const userrouter=express.Router();
const userControllers=require("../controllers/users");
const cookieParser= require("cookie-parser");
const bodyParser= require("body-parser");

userrouter.use(bodyParser.json());
userrouter.use(bodyParser.urlencoded({extended:true}));
userrouter.use(cookieParser());
userrouter.post("/",userControllers.Addusers);
userrouter.post("/login",userControllers.loginuser);
userrouter.get("/singleuser/:userid",userControllers.userdetails);
userrouter.put("/update/:userid",userControllers.updateuser);


module.exports={
    userrouter
}