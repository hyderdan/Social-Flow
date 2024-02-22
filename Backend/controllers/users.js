const {User}=require("../model/users");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const Addusers = async (req, res) => {
    try {
      const { userName,emAil,numbEr,date,pass,confirmPass} = req.body;
      if (pass !== confirmPass) {
        return res.status(400).json({ error: "Passwords do not match" });
      }
  
      const userExists = await User.findOne({email:emAil});
      console.log(userExists.email);
      if (userExists.email==emAil) {
        return res.status(402).json({ error: "User already exists" });
        
      }
      else{

      
      // const hashedPassword = await bcrypt.hash(password, 10);
      const hashedPassword = await bcrypt.hash(pass, 10);
      const user = new User({username:userName,email:emAil,PhoneNo:numbEr,dateofbirth:date,password: hashedPassword });
      await user.save()
      res.status(202).json({ message: "saved successfully" });
    }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "server error" })
    }
  }
  module.exports={
    Addusers
  }