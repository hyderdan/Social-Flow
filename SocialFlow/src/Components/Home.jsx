import "./styles/Home.css";
import { useContext } from "react";
import { useState } from "react";
import mycontext from "../Context.js/context";
import{FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import{faBars,faChevronDown}from "@fortawesome/free-solid-svg-icons"
import homeBackground from "./image/home-page-centre-removebg-preview.png"
import { useEffect } from "react";







export default function Home() {
    const{profile}=useContext(mycontext);
    

    const [togglenav,Settogglenav]=useState(false);
   const [scrollPosition,setScrollPosition]=useState(0);
   const[navcolorchange,Setnavcolorchange]=useState("Home");
   const[navcolorchange2,Setnavcolorchange2]=useState(true);

    const handletoggle=()=>{
       
            // if(togglenav==false){
                Settogglenav(!togglenav)
            // }
            // else{
            //     Settogglenav(false)
            // }
    }
    console.log(togglenav,"thi")
    const colorchange=(item)=>{
        Setnavcolorchange(item)
    }
    //  useEffect(()=>{
    //     const handlescroll=()=>{
    //         setScrollPosition(window.scrollY);
    //     };
    //     return()=>{
    //         window.removeEventListener('scroll',handlescroll);
    //     };

    //  },[]);
      
    return (
        <div className="homescreen" >
           
            <div className="notch-list rounded-1xl sm:mt-8 sm:rounded-3xl md:mt-8 md:rounded-3xl lg:mt-8 lg:rounded-3xl">
            <div className=" sm:hidden pt-3 pb-3 pl-4 pr-4" >
          <FontAwesomeIcon className="text-lg " onClick={handletoggle} icon={faBars} />
        </div>
            <ul className="hidden sm:flex flex-wrap ">
               <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=='Home'?"list1":""}`} onClick={()=>colorchange('Home')}>Home</li>
                <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=="Explore"?"list1":""}`} onClick={()=>colorchange('Explore')}>Explore</li>
                <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=="profile"?"list1":""}`} onClick={()=>colorchange('profile')}>profile </li>
                <li className={`pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4 list-item ${navcolorchange=="Connect"?"list1":""}`} onClick={()=>colorchange('Connect')}>Connect</li>
                </ul>
           
            {togglenav&& 
                <ul className="  flex flex-wrap sm:hidden md:hidden lg:hidden ">
               <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Home</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">Explore</li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full sm:w-1/4 md:w-1/4">profile </li>
                <li className="pt-2 pb-2 pl-10 pr-10 w-full   sm:w-1/4 md:w-1/4">Connect</li>
                </ul>}
            </div>
            {/* <img src={homeBackground} alt="img" className="animated-image "/> */}
            <div className=" lg:mt-4  md:mt-4 home-page-heading">
               <h2 className="heading-text  text-2xl mb-10 sm:text-4xl sm:mb-0 md:text-5xl md:mb-0  lg:text-7xl lg:mb-0 ">SPREAD YOUR WORDS TO </h2> 
               <h1 className="heading-world">WORLD</h1> 
               <div  className={`rounded-3xl  w-12 h-12 mb-4 explore-here `}>
                <h1 className="text-2xl  text-white"><FontAwesomeIcon icon={faChevronDown} /></h1>
                </div>
            </div>
               
        </div>
        
    )

}