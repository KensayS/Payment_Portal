import React from "react"
import "./login.css"
import {useState} from "react"

const Login = () => {


    return(
        <div className="cover">
            <h1> Customer Login </h1>
            <input type="text" placeholder="Customer ID" /> 
            <br></br>
            <input type="password" placeholder="Password" />

            <div className="loginBTN">Login</div>

        </div>
    )
}

export default Login