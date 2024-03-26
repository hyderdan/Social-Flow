import "./styles/explorepage.css";
import{FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import{faCompass,faMagnifyingGlass,faUsers,faCirclePlus}from "@fortawesome/free-solid-svg-icons";
import icon from "./image/Social_flow-removebg-preview.png"
import { useState } from "react";

const Explorepage=()=>{
    const[sidebarcolor,Setsidebarcolor]=useState('explore');
    const[searchslide,Setsearchslide]=useState(true);
    const Togglesidebar=(sidename)=>{
                Setsidebarcolor(sidename);
    }
    const togglesearch=(sidename)=>{
        Setsidebarcolor(sidename);
        Setsearchslide(!searchslide)
    }

    return(
        <div className="main-page ">
            <>
        <div className="side-bar hidden  sm:hidden md:hidden lg:block" >
           <img className="side-img" src={icon} alt="img" />
            <ul>
                <li className={sidebarcolor=='explore'?"sidecolor":""} onClick={()=>Togglesidebar('explore')}><FontAwesomeIcon icon={faCompass} className="text-2xl " />  Explore</li>
                <li className={sidebarcolor=='search'?"sidecolor":""} onClick={()=>togglesearch('search')}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl " />  Search</li>
                <li className={sidebarcolor=='following'?"sidecolor":""} onClick={()=>Togglesidebar('following')}><FontAwesomeIcon icon={faUsers} className="text-2xl " />  Following</li>
                <li className={sidebarcolor=='create'?"sidecolor":""} onClick={()=>Togglesidebar('create')}><FontAwesomeIcon icon={faCirclePlus} className="text-2xl " />  Create</li>
            </ul> 
        </div>
        <div className="side-bar hidden  sm:hidden  md:block lg:hidden" >
           <img  className="side-img2"  src={icon} alt="img" />
            <ul  >
                <li className={sidebarcolor=='explore'?"sidecolor":""} onClick={()=>Togglesidebar('explore')}><FontAwesomeIcon icon={faCompass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='search'?"sidecolor":""} onClick={()=>Togglesidebar('search')}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='following'?"sidecolor":""} onClick={()=>Togglesidebar('following')}><FontAwesomeIcon icon={faUsers} className="text-2xl " /></li>
                <li className={sidebarcolor=='create'?"sidecolor":""} onClick={()=>Togglesidebar('create')}><FontAwesomeIcon icon={faCirclePlus} className="text-2xl " /></li>
            </ul>
            
        </div>
        <div className="side-bar3 block  sm:block  md:hidden lg:hidden" >
           {/* <img  className="side-img2"  src={icon} alt="img" /> */}
            <ul  >
            <li className={sidebarcolor=='explore'?"sidecolor2":""} onClick={()=>Togglesidebar('explore')}><FontAwesomeIcon icon={faCompass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='search'?"sidecolor2":""} onClick={()=>Togglesidebar('search')}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='following'?"sidecolor2":""} onClick={()=>Togglesidebar('following')}><FontAwesomeIcon icon={faUsers} className="text-2xl " /></li>
                <li className={sidebarcolor=='create'?"sidecolor2":""} onClick={()=>Togglesidebar('create')}><FontAwesomeIcon icon={faCirclePlus} className="text-2xl " /></li>
            </ul>
            
        </div>
        </>
        <div className={`explore-search${!searchslide?"explore-search2":""}`}>
            <div className="search-sub">
            <h1>Search</h1>
            <input type="text" placeholder="search"  />
            </div>
            <div className="search-sub2">
                <h2>Recent</h2>
            </div>
           
        </div>

        </div>
    )
}
export default Explorepage;