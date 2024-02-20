import "./styles/Home.css";
import "./styles/Hnavbar.css";
import { Grid, GridItem } from '@chakra-ui/react'
import { useContext } from "react";
import { useState } from "react";
import mycontext from "../Context.js/context";
import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { LuPlaySquare } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { BiMessageSquare } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";





export default function Home() {
    const{profile}=useContext(mycontext);
    const explore=profile.filter((data)=>
    data.description==="explore" 
    );
    const profilephoto=profile.filter((data)=>
    data.description==="profilepicture" 
    );

    const [navbarActive, setNavbarActive] = useState(false);
     // State to toggle navbar visibility
     const toggleNavbar = () => {
        setNavbarActive(!navbarActive);
      };

     
      
    return (
        <div className="homescreen" >
            <div className="search">
             <input className="searchinput" type="text" placeholder="search..." />
             <span><h1 className="searchicon"><CiSearch /></h1></span>   
            </div>
            <div className="navbar-wrapper">
            <button className="navbar-toggler" onClick={()=>toggleNavbar()}
            aria-label="Toggle Navigation">&#9776;</button>
            <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
            <ul>
            <li><h1 className="navsub1"><IoMdHome /></h1></li>
            <li><h1 className="navsub2"><LuPlaySquare /></h1></li>
            <li><h1 className="navsub3"><FaStore /></h1></li>
            <li><h1 className="navsub4"><FaUserFriends /></h1></li>
            <li> <h1 className="navsub5"><SiYoutubegaming /></h1>  </li>
            </ul>
            </nav>
            </div>
            <div className="followers">
            <h1>Followers</h1>
            </div>
            <div className="groups">
            <h1>Groups</h1>
            </div>
            <div className="frequest">
            <h5>Friend request</h5>
            </div>
            <button className="showmore">
            <h5 className="SS">Show more</h5>
            </button>
            <div className="setting">
            <h5>settings</h5>
            </div>
           <div className="updates">
            <h3>Update Your Activities</h3>
            <div className="updatediv">
            <p>Photos/videos</p>
            </div>
            <div className="updatediv2">
            <p>Live streaming</p>
            </div>
           </div>
           
        </div>
        
    )
}