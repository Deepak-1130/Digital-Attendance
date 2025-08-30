import React from "react";
import "../StyleSheets/home.css";
import { useState} from "react";
import { Link } from "react-router-dom";
const Home = ({setLoginType}) =>{
   
return(
    <div className="home">
        <h3>Select the login type</h3>
       <Link to="/login"> <button  onClick={()=>setLoginType("Student")}>Student Login</button></Link>
       <Link to="/login"k> <button onClick={()=>setLoginType("Faculty")}>Faculty Login</button></Link>
        </div>
)
}
export default Home ;