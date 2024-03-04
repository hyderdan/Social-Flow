const {User}=require("../model/users");
const cookieParser = require("cookie-parser");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

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
            // if(user.status=="ban"){
            //      return res.status(200).json({message:"this acoount is Banned"});
            // }
            if (user && (await bcrypt.compare(pass, user.password))){
                const token = jwt.sign({ email: user.email }, process.env.LOGIN_SECRET, {
                    expiresIn: "1hr"
                  });
            
                  res.cookie("token", token, { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60, });
                  res.setHeader("Authorization", token);
                  console.log(token, "requested token");
            
            
            
                  res.status(200).json({ message: "welcome user", UserID: user._id, token });
            
                } else {
                  res.status(401).send("Invalid email or password");
                }
            
        
        }catch(err){
            console.log(err)
        }
    }

  module.exports={
    Addusers,loginuser
  }