const express=require("express");
const userrouter=express.Router();
const userControllers=require("../controllers/users");
const cookieParser= require("cookie-parser");
const bodyParser= require("body-parser");
const multermiddleware=require("../middleware/multer")

userrouter.use(bodyParser.json());
userrouter.use(bodyParser.urlencoded({extended:true}));
userrouter.use(cookieParser());
userrouter.post("/",userControllers.Addusers);
userrouter.get("/",userControllers.getuser);
userrouter.get("/searchdata/:name",userControllers.userdata);
userrouter.post("/recentdata/:userid",userControllers.profileviewed);
userrouter.get("/fetchrecentdata/:userid",userControllers.fetchrecentdata);
userrouter.post("/login",userControllers.loginuser);
userrouter.get("/singleuser/:userid",userControllers.userdetails);
userrouter.get("/getprofile/:userid",userControllers.getprofile);
userrouter.put("/update/:userid",userControllers.updateuser);
userrouter.post("/uploadprofile/:userid",multermiddleware,userControllers.profileupload);


module.exports={
    userrouter
}