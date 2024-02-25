    import "./styles/Sign-up.css"
    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import signupImage from "./image/sign-up.png";
    import axios from "axios";

    const Signup=()=>{
        const [userName,setUserName]=useState("");
        const [emAil,setemAil]=useState("")
        const [numbEr,setnumbEr]=useState(0)
        const [pass,setpass]=useState("")
        const [confirmPass,setconfirmPass]=useState("")
        const [date,setdate]=useState(null)
       const [bug,setbug]=useState([])
        console.log(userName);
        console.log(date);
        console.log(pass)
        const emailcheck=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const Navigate=useNavigate();
        const Homes=()=>{
            Navigate("/")
        }
        const handleSubmit =async()=>{ 
            
              const handleerror={}
              if (!userName){
                handleerror.userid='This Field is Required'
              }
              if(!emAil ){
                handleerror.useremail='This Field is Required'
              }
              else if(!emailcheck.test(emAil)){
                handleerror.useremail="invalid email"
              }
              if(!numbEr){
                handleerror.number="This Field is required"
              }  
              else if(numbEr<10){
                handleerror.number="Invalid Number"
              }
              if(!pass){
                handleerror.userpass='This field is Required'
              }else if(pass<6){
                handleerror.userpass='min 6 char'
              }
              if(!confirmPass){
                handleerror.confirmpassword='This Field is Required'
              } 
              setbug(handleerror)
            if(Object.keys(handleerror).length===0){    
            // If the user data is valid, add the user to the users array 
            try{
             const responce= await axios.post('http://localhost:5000/users',{userName,emAil,numbEr,date,pass,confirmPass},
              );
              // fectdata();  
              if(responce.data.emailexist === "User already exists"){
                alert("email already exist")
            }
             else if (responce.status === 202) {
                alert('Registration successful');
                setUserName("");
           setemAil("");
           setnumbEr(0);
           setdate(null)
            setpass("");
            setconfirmPass("");
            }
            
            
           
        } catch (err) {
            console.log(err);
            alert('Registration failed');
        }
           
          }
           }
    return(
        <div className="signup">
            <div className="signup-form">
                <h3>Create Your Account</h3>
                <img src={signupImage} alt="" />
                <div className="form-sub">
            <p>username</p>
            <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" name="username" placeholder="username" required /><br />
            <p>email</p>
            <input value={emAil} onChange={(e)=>setemAil(e.target.value)} type="text" name="email" placeholder="email" required /><br />
            <p>number</p>
            <input value={numbEr} onChange={(e)=>setnumbEr(e.target.value)} type="number" name="phone"  required/><br />
            <p>Date of Birth</p>
            <input value={date} onChange={(e)=>setdate(e.target.value)} className="date" type="date"  /><br />
            <p>Password</p>
            <input value={pass} onChange={(e)=>setpass(e.target.value)} type="text" placeholder="password"  required/><br />
            <p>Confirm Password</p>
            <input value={confirmPass} onChange={(e)=>setconfirmPass(e.target.value)} type="text" placeholder="confirm password"  required/><br />
            <button onClick={()=>handleSubmit()}>Sign-up</button>
            </div>
            </div>
        </div>
    )
}
export default Signup;