import React, {useState} from 'react'
import { BrowserRouter, Link, Route, useLocation } from "react-router-dom";
import "./portal.css"


const Portal = (props) =>{
    let data = useLocation();
    return(
        <div className="Portalbox">
            <h2 id="header"> Name: Kensay Sato </h2>
            <h3 id="header"> Date: 11/19/2022</h3>
            <div className="paymentbox">
                <b> Payment Due:<br></br>${props.num}</b>
                <hr></hr>
                <p> 
                Date Due:<br></br> 12/1/2022
                </p>
            </div>
            <div className='paymentButton'>
            <Link to="/payment" className="loginBTN"> Make Payment </Link>
            </div>
        </div>
)
}

export default Portal