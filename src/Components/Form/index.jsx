import React, { useState,useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { AddContact } from "../../Redux/Action/FormAction";
import { useDispatch} from "react-redux";

import shortid from "shortid";

function Form() {
    let history = useHistory();
    
  const dispatch = useDispatch()
    const [Name, setName] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [DebitCardNumber, setDebitCardNumber] = useState("");
    const [Gender, setGender] = useState("");

    const submitHandler = (e) => {
      e.preventDefault()
 
     const formdata = {
       id: shortid.generate(),
       Name:Name,
       MobileNumber:MobileNumber,
       DebitCardNumber:DebitCardNumber,
       Gender:Gender
     }
     console.log("formdata" + JSON.stringify(formdata));
       dispatch(AddContact(formdata));
      
   }
  
  return (
    <>
    <div className="container">
    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Name
      </label>
      <input
        type="text"
        id="Name"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setName(e.target.value)}
      />

    </div>
    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Mobile Number
      </label>
      <input
        type="text"
        id="Mobile Number"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setMobileNumber(e.target.value)}
      />

    </div>

    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Debit Card Number
      </label>
      <input  
        type="number"
        id="DebitNumber"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setDebitCardNumber(e.target.value)}
      />

    </div>

    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
       Gender
      </label>
      <input
        type="text"
        id="gender"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setGender(e.target.value)}
      />

    </div>



    <br></br>
    <button className="btn btn-primary" type="submit"
     onClick={submitHandler}>Add Contact</button>
    </div>
  </>
  );
}

export default Form;