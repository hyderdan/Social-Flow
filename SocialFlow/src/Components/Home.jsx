import "./styles/Home.css";
import "./styles/profile.css"
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import mycontext from "../Context.js/context";
import{FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import{faBars,faChevronDown}from "@fortawesome/free-solid-svg-icons"
import homeBackground from "./image/home-page-centre-removebg-preview.png"
import { useEffect } from "react";
import{Parallax,ParallaxLayer}from "react-parallax"
import Explore from "./Explore";
import {Link,animateScroll as scroll}from "react-scroll"
import UserId from "./storage/user-id";







export default function Home() {
    const{profile}=useContext(mycontext);
    const userid=UserId();
    const [togglenav,Settogglenav]=useState(false);
    const[toggleprofile,SettoggleProfile]=useState(false);
   const [scrollPosition,setScrollPosition]=useState(0);
   const[navcolorchange,Setnavcolorchange]=useState("Home");
   const[navcolorchange2,Setnavcolorchange2]=useState(true);
   const[userdata,SetuserData]=useState([]);

    

   
   useEffect(()=>{
      if(toggleprofile==true){
        Setnavcolorchange("profile")
      }
      else{
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 0 && bottom > 0) {
            Setnavcolorchange(section.id);
          }
        });
      };
       })

    const handletoggle=()=>{
                Settogglenav(!togglenav)
    }
    
    const profiletoggle=(item)=>{
      if(toggleprofile==false){
        Setnavcolorchange(item)
        SettoggleProfile(true)
      }
      else{
        SettoggleProfile(false);
      }
    }
    const colorchange=(item)=>{
        Setnavcolorchange(item);
        SettoggleProfile(false);

    };
    useEffect(()=>{
      SingleUser();
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 0 && bottom > 0) {
            Setnavcolorchange(section.id);
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },[]);

    const SingleUser=async()=>{
      try{
          const responce= await axios.get(`http://localhost:5000/users/singleuser/${userid}`);
          console.log(responce.data.user);
          SetuserData(responce.data.user);
      }
      catch(err){
        console.log(err)
      }

    }

    return (
        <div >
           <div  className={` sm:mt-0 ${toggleprofile==false?"profile-main":"profile-main2"}`}>
              <div  className="cover-photo">
                <div className="profile-photo">
                    helo
                </div>
              </div> 
              <div className={`user-name`}>
              <h1 className="text-4xl mt-6">{userdata.username}</h1> 
              </div>
              
              <div className={`phone`}>
                  <h2>Phone: </h2> <h3>{userdata.PhoneNo}</h3>
                  </div>
               <div  className={`mail`}>
               <h2>Mail:</h2> <h3>{userdata.email}</h3>
                </div>
                <div  className={`Dark-mode`}>
               <h2 className="pt-3 pb-3 ml-6">Dark mode</h2> <h3>></h3>
                </div> 
                <div  className={`profile-details`}>
               <h2 className="pt-3 pb-3 ml-6">Profile details</h2> 
                </div> 
                <div  className={`setting`}>
               <h2 className="pt-3 pb-3 ml-6">Settings</h2> 
                </div> 
                
                <button className="mt-3 mb-3 pt-2 pb-2 bg-blue-400">Log out</button>
               

                  
                
            </div>
        <div className="homescreen" >
            <div className="notch-list rounded-1xl sm:mt-8 sm:rounded-3xl md:mt-8 md:rounded-3xl lg:mt-8 lg:rounded-3xl">
            <div className=" sm:hidden pt-3 pb-3 pl-4 pr-4" >
          <FontAwesomeIcon className="text-lg " onClick={handletoggle} icon={faBars} />
        </div>
            <ul className="hidden sm:flex flex-wrap ">
            <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=='Home'?"list1":""}`} onClick={()=>colorchange('Home')}><Link to="Home" onClick={()=>colorchange('Home')} smooth={true} duration={500}>Home</Link></li>
                <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=="Explore"?"list1":""}`} onClick={()=>colorchange('Explore')}><Link  to="Explore" smooth={true} duration={500}>Explore</Link></li>
                <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=="profile"?"list1":""}`} onClick={()=>profiletoggle('profile')}><Link to="profile" onClick={()=>profiletoggle('profile')} smooth={true} duration={500}>profile</Link> </li>
                <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=="Connect"?"list1":""}`} onClick={()=>colorchange('Connect')}><Link to="Connect" smooth={true} duration={500}>Connect</Link></li>
                </ul>
           
            {togglenav&& 
                <ul className="  flex flex-wrap sm:hidden md:hidden lg:hidden ">
               <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Home</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Explore</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">profile </li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full   sm:w-1/4 md:w-1/4">Connect</li>
                </ul>}
            </div>
           
            <section id="Home" className=" lg:mt-4  md:mt-4 home-page-heading">
               <h2 className="heading-text  text-2xl mb-10 sm:text-4xl sm:mb-0 md:text-5xl md:mb-0  lg:text-7xl lg:mb-0 ">SPREAD YOUR WORDS TO </h2> 
               <h1 className="heading-world">WORLD</h1> 
             <Link to="Explore" smooth={true} duration={500} >  <div onClick={()=>colorchange('Explore')} className={`rounded-3xl  w-12 h-12 mb-4 explore-here `}>
                <h1 className="text-2xl  text-white"><FontAwesomeIcon icon={faChevronDown} /></h1>
                </div></Link>
            </section>
        </div>
        <section id="Explore">
                <Explore/>  
            </section> 
           
        </div>
      
    )

}