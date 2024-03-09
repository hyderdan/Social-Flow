    import "./styles/Sign-up.css"
    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import signupImage from "./image/sign-up.png";
    import axios from "axios";
    import { toast } from "react-toastify";


    const Signup=()=>{
        const [userName,setUserName]=useState("");
        const [emAil,setemAil]=useState("")
        const [numbEr,setnumbEr]=useState(Number)
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
                handleerror.useremail2="invalid email"
              }
              if(!numbEr){
                handleerror.number="This Field is required"
              }  
              else if(numbEr.length<10){
                handleerror.number2="Invalid Number"
                console.log(handleerror.number2);
              }
              if(!pass){
                handleerror.userpass='This field is Required'
              }else if(pass.length<6){
                handleerror.userpass2='min 6 char'
              }
              if(confirmPass!==pass){
                handleerror.confirmpassword='password does not match'
              } 
              setbug(handleerror)
            if(Object.keys(handleerror).length===0){    
            // If the user data is valid, add the user to the users array 
            try{
             const responce= await axios.post('http://localhost:5000/users',{userName,emAil,numbEr,date,pass,confirmPass},
              );
              // fectdata();  
              if(responce.data.emailexist === "User already exists"){
                toast.success("email already exist",{
                  position: "top-center",
                });
            }
             else if (responce.status === 202) {
              toast.success(responce.data.message,{
                position: "top-center",
              }); 
              Navigate("/") 
          setUserName("");
           setemAil("");
           setnumbEr(null);
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
            <p>username <span style={{color:"red"}}>{!userName &&bug.userid}</span> </p>
            <input className="text-sm" value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" name="username" placeholder="username" required /><br />
            <p>email <span style={{color:"red"}}>{!emAil&& bug.useremail}{!emailcheck.test(emAil)&&bug.useremail2}</span></p>
            <input className="text-sm" value={emAil} onChange={(e)=>setemAil(e.target.value)} type="text" name="email" placeholder="email" required /><br />
            <p>Mobile No. <span style={{color:"red"}}>{!numbEr&&bug.number}{numbEr.length<10&&bug.number2}</span> </p>
            <input className="text-sm" value={numbEr} onChange={(e)=>setnumbEr(e.target.value)} type="number" name="phone"  required/><br />
            <p>Date of Birth</p>
            <input className="text-sm" value={date} onChange={(e)=>setdate(e.target.value)} className="date" type="date"  /><br />
            <p>Password <span style={{color:"red"}}>{!pass&&bug.userpass}{pass.length<6&&bug.userpass2}</span> </p>
            <input className="text-sm" value={pass} onChange={(e)=>setpass(e.target.value)} type="password" placeholder="password"  required/><br />
            <p>Confirm Password <span style={{color:"red"}}> {confirmPass!==pass &&bug.confirmpassword}</span></p>
            <input className="text-sm" value={confirmPass} onChange={(e)=>setconfirmPass(e.target.value)} type="password" placeholder="confirm password"  required/><br />
            <button onClick={()=>handleSubmit()}>Sign-up</button>
            </div>
            </div>
        </div>
    )
}
export default Signup;