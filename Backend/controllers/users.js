const {User}=require("../model/users");
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
  module.exports={
    Addusers
  }