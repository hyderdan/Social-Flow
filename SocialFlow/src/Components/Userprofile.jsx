import Explorepage from "./Explorepage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/profiledisplay.css";
import mycontext from "../Context.js/context";
import{FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import{faUser,faEllipsis}from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

const Userprofile=()=>{
    const{userid}=useContext(mycontext)
    const[data,Setdata]=useState([]);
    // const{id}=useParams();
    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata=async()=>{
        try{
            const responce= await axios.get("http://localhost:5000/users");
            console.log(responce.data);
            Setdata(responce.data)
        }catch(err){
            console.log(err);
        }
    }
    const userprofile= data.filter((data)=>
        data._id==userid
    );
    const bURL="http://localhost:5000/upload"

    return(
        <div>
            <>
                <div className="profile-display hidden lg:block lg:w-full lg:ml-52"> 
                <div className="user-profile-main">
                {userprofile.map((data)=>(
                    <>
                    <img src={`${bURL}/${data.profile[0]}`} alt="" />
                    <div className="user-content">
                    <h1>{data.username}</h1>
                    <h2>{data.email}</h2>
                    <span>{data.bio}</span>
                    </div>
                    </>
                    ))}
                    <div className="buttons">
                        <ul>
                          <li><button>following</button></li>
                          <li><button>message</button></li>
                          <li><button><FontAwesomeIcon icon={faUser} /></button></li>
                          <li><FontAwesomeIcon icon={faEllipsis} /></li>  
                        </ul>

                    </div>
                </div>
             
            </div>
            <div className="profile-display  hidden lg:hidden md:block md:w-full md:ml-30"> 
                <div className="user-profile-main2">
                {userprofile.map((data)=>(
                    <>
                    <img src={`${bURL}/${data.profile[0]}`} alt="" />
                    <div className="user-content">
                    <h1>{data.username}</h1>
                    <h2>{data.email}</h2>
                    <span>{data.bio}</span>
                    </div>
                    </>
                    ))}
                    <div className="buttons">
                        <ul>
                          <li><button>following</button></li>
                          <li><button>message</button></li>
                          <li><button><FontAwesomeIcon icon={faUser} /></button></li>
                          <li><FontAwesomeIcon icon={faEllipsis} /></li>  
                        </ul>

                    </div>
                </div>
             
            </div>
            <div className="profile-display hidden  lg:hidden  sm:block sm:w-full md:hidden"> 
                <div className="user-profile-main3">
                {userprofile.map((data)=>(
                    <>
                    <img src={`${bURL}/${data.profile[0]}`} alt="" />
                    <div className="user-content3">
                    <h1>{data.username}</h1>
                    <h2>{data.email}</h2>
                    <span>{data.bio}</span>
                    </div>
                    </>
                    ))}
                    <div className="buttons3">
                        <ul>
                          <li><button>following</button></li>
                          <li><button>message</button></li>
                          <li><button><FontAwesomeIcon icon={faUser} /></button></li>
                          <li><FontAwesomeIcon icon={faEllipsis} /></li>  
                        </ul>

                    </div>
                </div>
             
            </div>
            <div className="profile-display block  lg:hidden  sm:hidden sm:w-full md:hidden"> 
                <div className="user-profile-main-xs">
                {userprofile.map((data)=>(
                    <>
                    <img src={`${bURL}/${data.profile[0]}`} alt="" />
                    <div className="user-content-xs">
                    <h1>{data.username}</h1>
                    <h2>{data.email}</h2>
                    <span>{data.bio}</span>
                    </div>
                    <div className="buttons-main-xs  flex flex-wrap justify-left  ">
                        <button>following</button>
                        <button>message</button>
                        <button id="similaruser"><FontAwesomeIcon icon={faUser} /></button>
                    </div>
                    </>
                    ))}
                   
                </div>
             
            </div>
            </>
            </div>
        
    )
}
export default Userprofile;