import "./styles/explorepage.css";
import{FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import{faCompass,faMagnifyingGlass,faUsers,faCirclePlus,faHeart,faEnvelope,faXmark}from "@fortawesome/free-solid-svg-icons";
import icon from "./image/Social_flow-removebg-preview.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import UserId from "./storage/user-id";
import Userprofile from "./Userprofile";
import mycontext from "../Context.js/context";
import { useContext } from "react";
const Explorepage=()=>{
    const{Setuserid}=useContext(mycontext);
    const userid=UserId();
    const[sidebarcolor,Setsidebarcolor]=useState('explore');
    const[searchslide,Setsearchslide]=useState(true);
    const[searcheddat,Setsearcheddata]=useState("");
    const[searchresult,Setsearchresult]=useState([])
    const[searchtrue,Setsearchtrue]=useState(true);
    const[searchclose,Setsearchclose]=useState(true);
    const[recentData,SetrecentData]=useState([]);
    const[toggleProfileuser,SettoggleProfileuser]=useState(true);
    const Togglesidebar=(sidename)=>{
                Setsidebarcolor(sidename);
                Setsearchslide(true);
                SettoggleProfileuser(true);
    }
    const togglesearch=(sidename)=>{
        Setsidebarcolor(sidename);
        Setsearchslide(!searchslide)
    }
    useEffect(()=>{
        fetchrecentdata();

    },[])
    const SearchUser=async(name)=>{
        try{
            const responce= await axios.get(`http://localhost:5000/users/searchdata/${name}`);
            console.log(responce.data.searchdetail);
            Setsearchresult(responce.data.searchdetail);
            Setsearchclose(!searchclose);
            Setsearchtrue(false)
        
        }catch(err){
            console.log(err);
        }
    };
    const closeandaddrecent=async()=>{

            Setsearcheddata("");
            Setsearchtrue(true)
            Setsearchclose(true);
           
    }
    const recentprofileview=async(profile_id)=>{
        
            Setsearchslide(true);
            SettoggleProfileuser(false);
            closeandaddrecent();
            viewprofile(profile_id);
       
        try{
            const responce= await axios.post(`http://localhost:5000/users/recentdata/${userid}`,{profile_id})
                console.log(responce.data);
                fetchrecentdata();
        }
        catch(err){
                console.log(err)
        }
    }
    const fetchrecentdata=async()=>{
            try{
                const responce= await axios.get(`http://localhost:5000/users/fetchrecentdata/${userid}`);
                console.log(responce.data);
                const datas=responce.data
                SetrecentData(datas.userdetails);
            }catch(err){
                console.log(err)
            }
    }
    const viewprofile=(id)=>{
        Setuserid(id);

    }
    const bURL="http://localhost:5000/upload"
    return(
        <div className="main-page ">
            <div className="lg:z-0">
                {toggleProfileuser==false ?
        <Userprofile/>: <div></div>
                }
        </div>
            <>
        <div className="side-bar  hidden  sm:hidden md:hidden lg:block lg:z-10" >
        <Link to={"/home"} ><img  className="side-img"  src={icon} alt="img" /></Link>
            <ul>
                <li className={sidebarcolor=='explore'?"sidecolor":""} onClick={()=>Togglesidebar('explore')}><FontAwesomeIcon icon={faCompass} className="text-2xl " />  Explore</li>
                <li className={sidebarcolor=='search'?"sidecolor":""} onClick={()=>togglesearch('search')}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl " />  Search</li>
                <li className={sidebarcolor=='following'?"sidecolor":""} onClick={()=>Togglesidebar('following')}><FontAwesomeIcon icon={faUsers} className="text-2xl " />  Following</li>
                <li className={sidebarcolor=='notification'?"sidecolor":""} onClick={()=>Togglesidebar('notification')}><FontAwesomeIcon icon={faHeart} className="text-2xl " />  Notification</li>
                <li className={sidebarcolor=='message'?"sidecolor":""} onClick={()=>Togglesidebar('message')}><FontAwesomeIcon icon={faEnvelope} className="text-2xl " />  Message</li>
                <li className={sidebarcolor=='create'?"sidecolor":""} onClick={()=>Togglesidebar('create')}><FontAwesomeIcon icon={faCirclePlus} className="text-2xl " />  Create</li>
            </ul> 
        </div>
        <div className="side-bar  hidden  sm:hidden md:z-10  md:block lg:hidden" >
         <Link to={"/home"}><img  className="side-img2"  src={icon} alt="img" /></Link>
            <ul  >
                <li className={sidebarcolor=='explore'?"sidecolor":""} onClick={()=>Togglesidebar('explore')}><FontAwesomeIcon icon={faCompass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='search'?"sidecolor":""} onClick={()=>togglesearch('search')}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='following'?"sidecolor":""} onClick={()=>Togglesidebar('following')}><FontAwesomeIcon icon={faUsers} className="text-2xl " /></li>
                <li className={sidebarcolor=='notification'?"sidecolor":""} onClick={()=>Togglesidebar('notification')}><FontAwesomeIcon icon={faHeart} className="text-2xl " /></li>
                <li className={sidebarcolor=='message'?"sidecolor":""} onClick={()=>Togglesidebar('message')}><FontAwesomeIcon icon={faEnvelope} className="text-2xl " /></li>
                <li className={sidebarcolor=='create'?"sidecolor":""} onClick={()=>Togglesidebar('create')}><FontAwesomeIcon icon={faCirclePlus} className="text-2xl " /></li>
            </ul>
            
        </div>
        <div className="side-bar3top block z-10 sm:z-10 sm:block  md:hidden lg:hidden" >
        <Link to={"/home"}><img  className="side-img3"  src={icon} alt="img" /></Link>
            <ul  >
                <li className={sidebarcolor=='notification'?"sidecolor":""} onClick={()=>Togglesidebar('notification')}><FontAwesomeIcon icon={faHeart} className="text-2xl " /></li>
                <li className={sidebarcolor=='message'?"sidecolor":""} onClick={()=>Togglesidebar('message')}><FontAwesomeIcon icon={faEnvelope} className="text-2xl " /></li>
            </ul>
            
        </div>
        <div className="side-bar3 block z-10 sm:z-10 sm:block  md:hidden lg:hidden" >
           {/* <img  className="side-img2"  src={icon} alt="img" /> */}
            <ul  >
            <li className={sidebarcolor=='explore'?"sidecolor2":""} onClick={()=>Togglesidebar('explore')}><FontAwesomeIcon icon={faCompass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='search'?"sidecolor2":""} onClick={()=>togglesearch('search')}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl " />  </li>
                <li className={sidebarcolor=='following'?"sidecolor2":""} onClick={()=>Togglesidebar('following')}><FontAwesomeIcon icon={faUsers} className="text-2xl " /></li>
                <li className={sidebarcolor=='create'?"sidecolor2":""} onClick={()=>Togglesidebar('create')}><FontAwesomeIcon icon={faCirclePlus} className="text-2xl " /></li>
            </ul>
            
        </div>
        </>
        <>
        <div className={`flex ${searchslide ? '-translate-x-full  ' : 'translate-x-0'} hidden md:hidden lg:block w-3/6 h-full
         ml-40 border-r border-gray-300 flex-col rounded-r-3xl transition-transform duration-400 bg-white`}>
            <div className="search-sub">
            <h1>Search</h1>
            <input value={searcheddat} onChange={(e)=>Setsearcheddata(e.target.value)} type="text" placeholder="search"  /> <button className="searchbutton lg:z-10" >{!searchclose?<FontAwesomeIcon onClick={()=>closeandaddrecent()} icon={faXmark} />:<FontAwesomeIcon onClick={()=> SearchUser(searcheddat)} icon={faMagnifyingGlass} />}</button>
            </div>
           
                 {searchtrue==false?<div className="search-sub2">
                  {searchresult.map((data)=>(
                //   <Link className="Hlink" to={`/userprofile/${data._id}`}>
                  <div onClick={()=>recentprofileview(data._id)} className="result-profile">
                    <img src={`${bURL}/${data.profile[0]}`} alt="" /><h3>{data.username}</h3>
                    <span>{data.bio}</span>
                    </div>
                    // </Link>
                     ))}
                 </div>:<div className="search-sub2">
                <h2>Recent</h2>
                {recentData.map((data)=>(
                  <div  onClick={()=>recentprofileview(data._id)} className="result-profile">
                    <img src={`${bURL}/${data.profile[0]}`} alt="" /><h3>{data.username}</h3>
                    <span>{data.bio}</span>
                    </div>
                     ))}
            </div>}      
        </div>
        <div className={`flex ${searchslide ? '-translate-x-full  ' : 'translate-x-0'} hidden sm:hidden md:block lg:hidden w-4/6 h-full
         ml-16 border-r border-gray-300 flex-col rounded-r-3xl transition-transform duration-400 bg-white`}>
            <div className="search-sub">
            <h1>Search</h1>
            <input value={searcheddat} onChange={(e)=>Setsearcheddata(e.target.value)} type="text" placeholder="search"  /> <button className="searchbutton lg:z-10" >{!searchclose?<FontAwesomeIcon onClick={()=>closeandaddrecent()} icon={faXmark} />:<FontAwesomeIcon onClick={()=> SearchUser(searcheddat)} icon={faMagnifyingGlass} />}</button>
            </div>
            {searchtrue==false?<div className="search-sub2">
            {searchresult.map((data)=>(
                //   <Link className="Hlink" to={`/userprofile/${data._id}`}>
                  <div onClick={()=>recentprofileview(data._id)} className="result-profile">
                    <img src={`${bURL}/${data.profile[0]}`} alt="" /><h3>{data.username}</h3>
                    <span>{data.bio}</span>
                    </div>
                    // </Link>
                     ))}
                 </div>:<div className="search-sub2">
                <h2>Recent</h2>
                {recentData.map((data)=>(
                  <div  onClick={()=>recentprofileview(data._id)} className="result-profile">
                    <img src={`${bURL}/${data.profile[0]}`} alt="" /><h3>{data.username}</h3>
                    <span>{data.bio}</span>
                    </div>
                     ))}
            </div>}
        </div>
        <div className={`flex ${searchslide ? '-translate-x-full  ' : 'translate-x-0'} w-full sm:block md:hidden lg:hidden sm:w-full h-full
         ml-0 border-r border-gray-300 flex-col  transition-transform duration-400 bg-white`}>
            <div className="search-sub3">
            <h1>Search</h1>
            <input value={searcheddat} onChange={(e)=>Setsearcheddata(e.target.value)} type="text" placeholder="search"  /> <button className="searchbutton2 lg:z-10" >{!searchclose?<FontAwesomeIcon onClick={()=>closeandaddrecent()} icon={faXmark} />:<FontAwesomeIcon onClick={()=> SearchUser(searcheddat)} icon={faMagnifyingGlass} />}</button>
            </div>
            {searchtrue==false?<div className="search-sub2">
            {searchresult.map((data)=>(
                //   <Link className="Hlink" to={`/userprofile/${data._id}`}>
                  <div onClick={()=>recentprofileview(data._id)} className="result-profile2">
                    <img src={`${bURL}/${data.profile[0]}`} alt="" /><h3>{data.username}</h3>
                    <span id="result-span" >{data.bio}</span>
                    </div>
                    // </Link>
                     ))}
                 </div>:<div className="search-sub3">
                <h2>Recent</h2>
                {recentData.map((data)=>(
                  <div  onClick={()=>recentprofileview(data._id)} className="result-profile2">
                    <img src={`${bURL}/${data.profile[0]}`} alt="" /><h3>{data.username}</h3>
                    <span id="result-span">{data.bio}</span>
                    </div>
                     ))}
            </div>}
        </div>
        </>
        
        </div>
    )
}
export default Explorepage;