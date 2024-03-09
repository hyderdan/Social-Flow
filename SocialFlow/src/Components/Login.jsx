import { useEffect } from "react"
import { useRef } from "react";
import { useState } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
  const slideref = useRef([]);
  const [bug,setbug]=useState([])
  const[emAil,SetemAil]=useState("");
  const[pass,Setpass]=useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    handleHover();
  }, []);

  const handleHover = () => {
    slideref.current.forEach((slide) => {
      slide.addEventListener('mouseenter', () => {
        slide.querySelector('.flex-title').style.transform = 'rotate(0deg)';
        slide.querySelector('.flex-title').style.top = '10%';
        slide.querySelector('.flex-about').style.opacity = '1';
        slide.querySelector('.login-tittle').style.top = '20%'
      });
      slide.addEventListener('mouseleave', () => {
        slide.querySelector('.flex-title').style.transform = 'rotate(90deg)';
        slide.querySelector('.flex-title').style.top = '15%';
        slide.querySelector('.flex-about').style.opacity = '0';
      });

    });
    slideref.current.forEach((slide) => {
      slide.removeEventListener('mouseenter', handleHover); // Remove the event handler function
      slide.removeEventListener('mouseleave', handleHover); // Remove the event handler function
    });
  };
  const handlelogin = async() => {
   const handleerror={}  
    try{
      const responce= await axios.post("http://localhost:5000/users/login",{emAil,pass});
      console.log(responce.data);
      const data=responce.data;
      if(responce.status==200){
        if(data.message=="user doesn't exist"){
          toast.error(data.message,{
            position: "top-center",
            autoClose: 1000,
            theme:"dark"
          }); 
        }
      else  if(data.message==="this acoount is Banned"){
          alert(data.message);
        }
        else if(data.message=="Invalid password"){
            
          toast.error(data.message,{
            position: "top-center",
            autoClose: 2000,
            theme:"dark"
          }); 
        }
       
      else{
        
      console.log("token in frontEnd", data.token);
      console.log("Login successful", data.message);
      sessionStorage.setItem('usertoken', data.token);
      sessionStorage.setItem('userid', data.UserID);
      toast.success("welcome user",{
        position: "top-center",
        autoClose: 2000,
      }); 
     Navigate("/home");
     SetemAil("");
     Setpass("");
    }
    }
    }
    catch(err){
        console.log(err);

    }

  }
  return (
    <div className="flex-container">
      <div className="flex-slide home" ref={(e) => (slideref.current[1] = e)}>
        <div className="flex-title flex-title-home">Home</div>
        <div className="flex-about flex-about-home"><p>Click here to navigate to the home section of the website</p></div>
      </div>
      <div className="flex-slide about" ref={(e) => (slideref.current[2] = e)}>
        <div className="flex-title">About</div>
        <div className="flex-about"><p>Click here to navigate to the About section of the website</p></div>
      </div>
      <div className="flex-slide work" ref={(el) => (slideref.current[3] = el)}>
        <div className="flex-title">Work</div>
        <div className="flex-about"><p>Listing relevant snippets of work:</p>
          <ul>
            <li>First piece of work</li>
            <li>Second piece of work</li>
            <li>Third piece of work</li>
          </ul>
        </div>
      </div>
      <div className="flex-slide contact" ref={(el) => (slideref.current[0] = el)}>
        <div className="flex-title login-tittle">Welcome Back</div>
        <div className="flex-about">

          <div className="contact-form">
            <p>Email</p>
            <input value={emAil} onChange={(e)=>SetemAil(e.target.value)} className="emailinput text-sm text-black" type="text" name="email" />
            <p>password</p>
            <input value={pass} onChange={(e)=>Setpass(e.target.value)} className="passinput text-sm text-black" type="password" name="password" ></input>
            <button className="inputbutton" onClick={() => handlelogin()}>Login</button>

            <h5>Don't have an account?<Link className="link" to={"/signup"}>Sign Up</Link></h5>
          </div>

        </div>
      </div>
    </div>
  )
}