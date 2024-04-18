import axios from "axios";
import UserId from "./storage/user-id";
import { useEffect, useState } from "react";
import Explorepage from "./Explorepage";
import "./styles/userprofile.css"
const Profile=()=>{
    const[profiledata,Setprofiledata]=useState([]);
    const userid=UserId();
    useEffect(()=>{
        fetchuserdata()
    },[])
    const fetchuserdata=async()=>{
        try{
         const responce= await axios.get(`http://localhost:5000/users/singleuser/${userid}`); 
         Setprofiledata(responce.data.user); 
         console.log(profiledata,"he");
        }catch(err){
            console.log(err);
        }
    }
    console.log(profiledata,"he");
    const bURL="http://localhost:5000/upload"
    return(
        <div className="Profile-mainpage w-full flex flex-wrap justify-center bg-red-400">
            <Explorepage/>
            <div className="profile-datail-L">
            <div className="userprofile" >
            {profiledata.map((data)=>(
                <>
            <img src={`${bURL}/${data.profile[0]}`} alt="" />
                </>
            ))}
            </div>
            </div>
        
        </div>
    )
}
export default Profile;