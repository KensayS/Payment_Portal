import React, {useState} from 'react'
import "./portal.css"


const Portal = () =>{
    return(
        <div className="Portalbox">
            <h2 id="header"> Name: Kensay Sato </h2>
            <h3 id="header"> Date: 11/19/2022</h3>
            <div className="paymentbox">
                <b> Payment Due:<br></br>$600.00</b>
                <hr></hr>
                <p> 
                Date Due:<br></br> 12/1/2022
                </p>
            </div>
            <div className='paymentButton'>
            <button>
                Make Payment
            </button>
            </div>
        </div>
)
}

export default Portal