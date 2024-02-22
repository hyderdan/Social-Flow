    import "./styles/Sign-up.css"
    import { useNavigate } from "react-router-dom";
    import signupImage from "./image/sign-up.png"
    const Signup=()=>{
        const Navigate=useNavigate();
        const Homes=()=>{
            Navigate("/")
        }
    return(
        <div className="signup">
            <div className="signup-form">
                <h3>Create Your Account</h3>
                <img src={signupImage} alt="" />
                <div className="form-sub">
            <p>username</p>
            <input type="text" name="username" placeholder="username" required /><br />
            <p>email</p>
            <input type="text" name="email" placeholder="email" required /><br />
            <p>number</p>
            <input type="number" name="phone"  required/><br />
            <p>Date of Birth</p>
            <input  className="date" type="date"  /><br />
            <p>Password</p>
            <input type="text" placeholder="password"  required/><br />
            <p>Confirm Password</p>
            <input type="text" placeholder="confirm password"  required/><br />
            <button onClick={()=>Homes()}>Sign-up</button>
            </div>
            </div>
        </div>
    )
}
export default Signup;