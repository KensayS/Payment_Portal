import React from "react"
import "./login.css"
import {useState} from "react"
import { BrowserRouter, Link, Route } from "react-router-dom";
import portal from './portal'

const Login = () => {


    return(
        <div className="cover">
            <h1> Customer Login </h1>
            <input type="text" placeholder="Customer ID" /> 
            <br></br>
            <input type="password" placeholder="Password" />
            <Link to="/portal" className="loginBTN"> Login </Link>
        </div>
    )
}

export default Login