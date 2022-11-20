import React, {useState} from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./payment.css"


export default function Form(props) {

    return (
        <div className='payment'>
          <h1>Current Amount Owed:</h1>
          <h3> $600.00 </h3>
          <h1>Credit Card Info:</h1>
          <input id='name' placeholder='Cardholder Name' />
          <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />
          <input name="credit-expires" class="cc-expires" type="tel" pattern="\d*" maxlength="7" placeholder="MM / YY" />
          <input name="credit-cvc" class="cc-cvc" type="tel" pattern="\d*" maxlength="3" placeholder="CVC" />
          <h1>Amount:</h1>
          <input id='amount' placeholder='$xxx.xx' />
          <div></div> 
          <Link to='/portal/i' className="loginBTN"> Pay Now </Link>
        </div>
    );
  }