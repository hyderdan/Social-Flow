import { useEffect } from "react"
import { useRef } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const slideref=useRef([]);
    const Navigate=useNavigate();
    useEffect(() => {
        const handleHover = () => {
           
                
        
                slideref.current.forEach((slide) => {
            slide.addEventListener('mouseenter', () => {
              slide.querySelector('.flex-title').style.transform = 'rotate(0deg)';
              slide.querySelector('.flex-title').style.top = '10%';
              slide.querySelector('.flex-about').style.opacity = '1';
            });
            slide.addEventListener('mouseleave', () => {
              slide.querySelector('.flex-title').style.transform = 'rotate(90deg)';
              slide.querySelector('.flex-title').style.top = '15%';
              slide.querySelector('.flex-about').style.opacity = '0';
            });
          });
        };
        handleHover();
    
        // Clean up event listeners on component unmount
        return () => {
            slideref.current.forEach((slide) => {
            slide.removeEventListener('mouseenter', handleHover); // Remove the event handler function
            slide.removeEventListener('mouseleave', handleHover); // Remove the event handler function
          });
        };
      }, []);
      const handlelogin=()=>{
        Navigate("/home")
      }
        return(
            <div className="flex-container">
	<div className="flex-slide home" ref={(el)=>(slideref.current[1]=el)}>
		<div className="flex-title flex-title-home">Home</div>
		<div className="flex-about flex-about-home"><p>Click here to navigate to the home section of the website</p></div>
	</div>
	<div className="flex-slide about" ref={(el)=>(slideref.current[2]=el)}>
		<div className="flex-title">About</div>
		<div className="flex-about"><p>Click here to navigate to the About section of the website</p></div>
	</div>
	<div className="flex-slide work" ref={(el)=>(slideref.current[3]=el)}>
		<div className="flex-title">Work</div>
		<div className="flex-about"><p>Listing relevant snippets of work:</p>
			<ul>
				<li>First piece of work</li>
				<li>Second piece of work</li>
				<li>Third piece of work</li>
			</ul>
		</div>
	</div>
	<div className="flex-slide contact" ref={(el)=>(slideref.current[0]=el)}>
		<div className="flex-title">Login</div>
				<div className="flex-about">
					<p>Login</p>
					<div className="contact-form">
						<p>Email <input type="text" name="email"/></p>
						<p>Comment <textarea type="text" name="comment" row="5"></textarea></p>
						<button onClick={handlelogin}>Login</button>
					</div>

		</div>
	</div>
</div>
        )
}