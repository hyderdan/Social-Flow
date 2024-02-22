// const {MongoClient, ServerApiVersion}=require("mongodb");
// const uri="mongodb+srv://hyderdanish369:ham1Assi@cluster0.gyqcemy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoose=require("mongoose")
// const URL="mongodb+srv://hyderdanish369:ham1Assi@cluster0.gyqcemy.mongodb.net/socialFlow"
const URL="mongodb+srv://hyderdanish369:ham1Assi@cluster0.gyqcemy.mongodb.net/socialflow?retryWrites=true&w=majority&appName=Cluster0"

// const client= new MongoClient(uri,{
//     serverApi:{
//         version:ServerApiVersion.v1,
//         strict:true,
//         deprecationErrors:true
//     }
// })

const connect = async ()=>{

    try{
        await mongoose.connect(URL);
        console.log("connected");
    }
    catch(err){
        console.log(err);
    }
}

module.exports={
    connect
}