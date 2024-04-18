import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import { datas } from './Components/Datas';
import mycontext from './Context.js/context';// import { extendTheme } from "@chakra-ui/react"
import Postimageandvideos from './Components/Postimageandvideos';
import Login from './Components/Login';
import Signup from './Components/SIgn-up';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './Components/Explore';
import GetToken from './Components/storage/user-token';
import Explorepage from './Components/Explorepage';
import Userprofile from './Components/Userprofile';
import Profile from './Components/Profile';

function App() {
  const [profile,setprofile]=useState(datas);
  const[userid,Setuserid]=useState("")
  const passedDatas={
    profile,Setuserid,userid
  };
  const UserToken=GetToken();

  return (
    
      <div>
       
        <BrowserRouter>
        <mycontext.Provider value={passedDatas}>
        <Routes>
          {UserToken&&<Route path='/home' element={<Home/>}/>}
          {UserToken&&<Route path='/post' element={<Postimageandvideos/>}/>}
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} />
          {UserToken&&<Route path='/explore' element={<Explore/>}/>}
          {UserToken&&<Route path='/explorepage' element={<Explorepage/>}/>}
          {UserToken&&<Route path='/userprofile' element={<Userprofile/>}/>}
          {UserToken&&<Route path='/profile' element={<Profile/>}/>}
        </Routes>
        </mycontext.Provider>
        </BrowserRouter>
        <ToastContainer />
      </div>
     
  )
}

export default App
