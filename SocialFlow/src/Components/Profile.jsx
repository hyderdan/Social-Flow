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
            <>
            <div className="profile-datail-L lg:block hidden">
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
            <div className="highlight-L lg:block hidden"><h1>+</h1></div>
            </div>

            <div className="profile-datail-md lg:hidden md:block hidden">
            <div className="userprofile-md" >
            <img className='userprofilepic-md'src={`${bURL}/${profiledata[0]}`} alt="img" />
            <h1>{profiledata2.username}</h1>
            <ul>
                <li><button>Edit profile</button></li>
                <li><button>Archive</button></li>
            </ul>
            <div className="userprofile-md-list2">
            <ul>
                <li>Posts</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
            </div> 
            <p>{profiledata2.bio}</p>  
            </div>
            <div className="highlight-md lg:hidden md:block hidden"><h1>+</h1></div>
            </div>

            <div className="profile-datail-sm lg:hidden md:hidden sm:block hidden">
            <div className="userprofile-sm" >
            <img className='userprofilepic-sm'src={`${bURL}/${profiledata[0]}`} alt="img" />
            <h1>{profiledata2.username}</h1>
            <ul>
                <li><button>Edit profile</button></li>
                <li><button>Archive</button></li>
            </ul>
            <div className="userprofile-sm-list2">
            <ul>
                <li>Posts</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
            </div> 
            <p>{profiledata2.bio}</p>  
            </div>
            <div className="highlight-sm lg:hidden md:hidden sm:block hidden"><h1>+</h1></div>
            </div>

            <div className="profile-datail-xsm lg:hidden md:hidden sm:hidden block">
            <div className="userprofile-xsm" >
            <img className='userprofilepic-xsm'src={`${bURL}/${profiledata[0]}`} alt="img" />
            <h1>{profiledata2.username}</h1>
            <div className="userprofile-button-xsm">
                <button>Edit profile</button>
               <button>Archive</button>
            </div>
            <div className="userprofile-xsm-list2">
            <ul>
                <li>Posts</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
            </div> 
            {/* <p>{profiledata2.bio}</p>   */}
            </div>
            {/* <div className="highlight-xsm lg:hidden md:hidden sm:hidden block"><h1>+</h1></div> */}
            </div>
            </>
        </div>
    )
}
export default Profile;