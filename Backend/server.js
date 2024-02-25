const express= require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const {connect}=require("./config");
const {userrouter}=require("./routes/userroute")
const app=express();
const PORT=5000;
connect()
app.use(bodyparser.json());
app.use(cors(
    {
        origin:"http://localhost:5173",
        methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials:true,
    }
));
app.listen(PORT, () => {
    console.log("server started at port", PORT)
});

app.use("/users",userrouter)
