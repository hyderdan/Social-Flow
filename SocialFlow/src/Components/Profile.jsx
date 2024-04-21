import axios from "axios";
import UserId from "./storage/user-id";
import { useEffect } from "react";
import { useState } from "react";
import Explorepage from "./Explorepage";
import "./styles/userprofile.css"
const Profile=()=>{
    const[profiledata,Setprofiledata]=useState([]);
    const[profiledata2,Setprofiledata2]=useState([]);  
    const userid=UserId();
    useEffect(()=>{
        fetchuserdata()
    },[])
    const fetchuserdata=async()=>{
        try{
         const responce= await axios.get(`http://localhost:5000/users/singleuser/${userid}`); 
         console.log(responce.data.user);
         Setprofiledata2(responce.data.user);
         Setprofiledata(responce.data.user.profile); 
         console.log(profiledata,"he");
        }catch(err){
            console.log(err);
        }
    }
    const bURL="http://localhost:5000/upload"
    return(
        <div className="Profile-mainpage w-full flex flex-wrap justify-center bg-red-400">
            <Explorepage/>
            <div className="profile-datail-L">
            <div className="userprofile-L" >
            <img className='userprofilepic-L'src={`${bURL}/${profiledata[0]}`} alt="img" />
            <h1>{profiledata2.username}</h1>
            <ul>
                <li><button>Edit profile</button></li>
                <li><button>Archive</button></li>
            </ul>
            <div className="userprofile-L-list2">
            <ul>
                <li>Posts</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
            </div> 
            <p>{profiledata2.bio}</p>  
            </div>
            <div className="highlight-L">+</div>
            </div>
        
        </div>
    )
}
export default Profile;