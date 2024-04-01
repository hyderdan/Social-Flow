const {User}=require("../model/users");
const cookieParser = require("cookie-parser");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const LOGIN_SECRET="f1u2rr";
const fs=require("fs")

const Addusers = async (req, res) => {
  try {
      const { userName, emAil, numbEr, date, pass, confirmPass } = req.body;

      const userExists = await User.findOne({ email: emAil });

      if (userExists) {
          console.log("Email already exists");
          return res.status(202).json({ emailexist: "User already exists" });
      } else {
          if (pass !== confirmPass) {
              return res.status(400).json({ error: "Passwords do not match" });
          }

          const hashedPassword = await bcrypt.hash(pass, 10);
          const user = new User({
              username: userName,
              email: emAil,
              PhoneNo: numbEr,
              dateofbirth: date,
              password: hashedPassword
          });

          await user.save();
          res.status(202).json({ message: "User saved successfully" });
      }
  } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
  }
}
    const loginuser=async(req,res)=>{
        try{
            const{emAil,pass}=req.body;
            const user = await User.findOne({ email:emAil });
            console.log(user);
            if(!user){
                res.status(200).json({message:"user doesn't exist"})
            }


            if(user.status=="ban"){
                 return res.status(200).json({message:"this acoount is Banned"});
            }
            else if(!await bcrypt.compare(pass,user.password)){
                res.status(200).json({message:"Invalid password"})
            }
            else{

            
            console.log(process.env.LOGIN_SECRET);
            if (user && (await bcrypt.compare(pass, user.password))){
                const token = jwt.sign({ email: user.email }, process.env.LOGIN_SECRET,{
                    expiresIn: "1hr"
                  });
            
                  res.cookie("token", token, { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60, });
                  res.setHeader("Authorization", token);
                  console.log(token, "requested token");
            
            
            
                  res.status(200).json({ message: "welcome user", UserID: user._id, token });
            
                } else {
                  res.status(401).send("Invalid email or password");
                }
            
            }
        }catch(err){
            console.log(err)
        }
    }
    const userdetails=async(req,res)=>{
            try{
                const {userid}=req.params;
            const user= await User.findById(userid);
            if(!user){
                 res.json(404).json({error:"usernot found"});
                    console.log("user not found");
              }
              console.log(user);
              res.status(200).json({user});          


            }catch(err){
                console.log(err)
            }
    }
    const updateuser=async(req,res)=>{
        try{
     const { userid } = req.params
    const {username,Email,Addbio,phoneNo} = req.body
    const user = await User.findByIdAndUpdate(userid, {username:username,email:Email, PhoneNo:phoneNo,bio:Addbio}, { new: true })
    res.json(user)
    console.log(user)
        }catch(err){
                console.log(err);
        }
    }
    const profileupload=async(req,res)=>{
        try{
            const {userid}=req.params;
            const user= await User.findById(userid);
            console.log("pr",req.file);
            if(!user){
               res.json(404).json({error:"usernot found"});
               console.log("user not found");
            }
               user.profile.push(req.file.filename);
               await user.save();
              res.status(200).json({message:"product added to profile"});
        
            
        }catch(err){
                console.log(err);
        }
    }
    const getprofile=async(req,res)=>{
        try{
            const{userid}=req.params;
            const user=await User.findById(userid);
            if(!user){
                console.log("cant't find user")
                res.status(200).json({message:"user not found"})
            }
            else{
                console.log(user.profile);
                res.status(200).json({profile:user.profile})
            }
        }catch(err){
            console.log(err)
        }
    }
    const userdata=async(req,res)=>{
        try{
            const{name}=req.params;
            const data = await User.find({});
            const searchdetail=data.filter((d)=>
            d.username===name
            );
            res.status(200).json({searchdetail});
            console.log(searchdetail);
        }catch(err){
            console.log(err);
        }
    }
    const profileviewed=async(req,res)=>{
        try{
            const{profile_id}=req.body;
            const{userid}=req.params;
            console.log(userid)
            const user=await User.findById(userid);
            if(!user){
                console.log("cant't find user")
                res.status(200).json({message:"user not found"})
            }
            else{
                user.recentprofileviewed.push(profile_id);
                await user.save();
                console.log(user)
                res.status(200).json({message:"recentprofile added"})

            }

        }catch(err){
            console.log(err)
        }
    }
    const fetchrecentdata = async (req, res) => {
        try {
          const user = await User.findById(req.params.userid);
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
      
          // Extract product IDs from the user's cart
          const productIds = user.recentprofileviewed.map(item => item.product);
      
          // Query productdata collection with the product IDs
          const productsWithQuantity = await productdata.find({
            _id: { $in: productIds }
          });
      
          // Combine product information with quantities from the user's cart
          const products = user.cart.map(item => {
            const product = productsWithQuantity.find(p => p._id.equals(item.product));
            return {
              ...item.toObject(),
              product: product,
              quantity: item.quantity
            };
          });
          const totalquantity = user.cart.reduce((total, item) => {
            return total + item.quantity
          }, 0)
      
          // Send response with cart items and quantities
          res.status(200).json({ products, totalquantity });
        } catch (error) {
          console.error("Error fetching cart quantity:", error);
          res.status(500).json({ error: "Server error", error: error.message });
        }
      };

  module.exports={
    Addusers,loginuser,userdetails,updateuser,profileupload,getprofile,userdata,profileviewed
  }