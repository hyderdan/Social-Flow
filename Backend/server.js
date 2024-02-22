const express= require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const {connect}=require("./config")
const app=express();
const PORT=5000;
connect()
// async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

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
