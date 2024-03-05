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

function App() {
  const [profile,setprofile]=useState(datas);
  const passedDatas={
    profile
  };
  

  return (
    
      <div>
       
        <BrowserRouter>
        <mycontext.Provider value={passedDatas}>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/post' element={<Postimageandvideos/>}  />
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} />
        </Routes>
        </mycontext.Provider>
        </BrowserRouter>
        <ToastContainer />
      </div>
     
  )
}

export default App
