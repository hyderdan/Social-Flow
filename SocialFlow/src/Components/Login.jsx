import { useEffect } from "react"
import { useRef } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const slideref = useRef([]);
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
  const handlelogin = () => {
    Navigate("/home")
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
            <input className="emailinput" type="text" name="email" />
            <p>password </p>
            <input className="passinput" type="text" name="password" ></input>
            <button className="inputbutton" onClick={() => handlelogin()}>Login</button>

            <h5>Don't have an account?<Link className="link" to={"/signup"}>Sign Up</Link></h5>
          </div>

        </div>
      </div>
    </div>
  )
}