const {User}=require("../model/users");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const Addusers = async (req, res) => {
    try {
      const { username, email, PhoneNo,dateofbirth, password, confirmPassword} = req.body;
      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
      }
  
      const userExists = await userdata.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: "User already exists" });
      }
      // const hashedPassword = await bcrypt.hash(password, 10);
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new userdata({ username, email,PhoneNo,dateofbirth, password: hashedPassword });
      await user.save()
      res.status(202).json({ message: "saved successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "server error" })
    }
  }
  module.exports={
    Addusers
  }