import React from "react"
import "./login.css"

const Login = () => {
    return(
        <div className="cover">
            <h1> Login </h1>
            <input type="text" placeholder="Customer ID" /> 
            <br></br>
            <input type="password" placeholder="Password" />
        </div>
    )
}

export default Login