import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/loginPage.css";
import { Link } from "react-router-dom";
// login Component 
const LoginPage = ({ loginType }) => {

    //Hooks declaration
    const [rollNo, setRollNo] = useState();
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
 
    // Handle submit................................................................................................... 
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(password)
        console.log(rollNo)
    }
 
    //Number check function....................................................................................... 
    const checkNumberType = (value) => {

        return value.replace(/[^0-9]/g, "");
    };
 
    //Function declaration.................................................................................................
    const handleLogin = () => {
    if(loginType=="Student"){
        navigate("/Dashboard")}
    else{
         navigate("/FacultyDashboard")
    }    
        //fetch path not defined so commented--------------------------------------------------------------------------------
        // fetch("https://" , {
        //     method:"POST",
        //     headers: {"content-type":"application/json"},
        //     body:JSON.stringify({
        //         rollNo:rollNo,
        //         password:password
        //     })
        // })
    }



    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="rollNo" id="rollNoLabel" className="input-label">{loginType} ID</label>
                    <input
                        autoComplete="off"
                        id="rollNo"
                        className="inpexut-box"
                        type="text"
                        value={rollNo}
                        max-length={11}
                        onChange={(e) => setRollNo(checkNumberType(e.target.value))}
                        placeholder="Enter your ID No">
                    </input>

                    <label htmlFor="password" id="password" className="input-label">Password</label>
                    <input
                        autoComplete="off"
                        htmlFor="password"
                        id="password"
                        className="input-box"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>
                    <button type="submit" onClick={handleLogin} className="Login-Button">Login</button>
                    {/* <p>Want to change password ?<Link  to="/signUp">Change Password </Link></p> */}


                </form >
            </div>
        </div>


    );
}
export default LoginPage;