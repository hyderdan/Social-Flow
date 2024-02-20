import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import { datas } from './Components/Datas';
import mycontext from './Context.js/context';// import { extendTheme } from "@chakra-ui/react"
import Postimageandvideos from './Components/Postimageandvideos';
import Login from './Components/Login';


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
        </Routes>
        </mycontext.Provider>
        </BrowserRouter>
        
      </div>
     
  )
}

export default App
