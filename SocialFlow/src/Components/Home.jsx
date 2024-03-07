import "./styles/Home.css";
import { useContext } from "react";
import { useState } from "react";
import mycontext from "../Context.js/context";
import{FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import{faBars}from "@fortawesome/free-solid-svg-icons"





export default function Home() {
    const{profile}=useContext(mycontext);
    const explore=profile.filter((data)=>
    data.description==="explore" 
    );
    const profilephoto=profile.filter((data)=>
    data.description==="profilepicture" 
    );
    const [togglenav,Settogglenav]=useState(false);
    const handletoggle=()=>{
       
            // if(togglenav==false){
                Settogglenav(!togglenav)
            // }
            // else{
            //     Settogglenav(false)
            // }
    }
    console.log(togglenav,"thi")
     
      
    return (
        <div className="homescreen" >
           
            <div className="notch-list rounded-1xl sm:mt-8 sm:rounded-3xl md:mt-8 md:rounded-3xl lg:mt-8 lg:rounded-3xl">
            <ul className="hidden sm:flex flex-wrap ">
               <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Home</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Explore</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">About </li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full   sm:w-1/4 md:w-1/4">Connect</li>
                </ul>
            <div className=" sm:hidden pt-3 pb-3 pl-4 pr-4" >
          <FontAwesomeIcon className="text-lg " onClick={handletoggle} icon={faBars} />
        </div>
            {togglenav&& 
                <ul className="  flex flex-wrap ">
               <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Home</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Explore</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">About </li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full   sm:w-1/4 md:w-1/4">Connect</li>
                </ul>}
            </div>
           
        </div>
        
    )
}