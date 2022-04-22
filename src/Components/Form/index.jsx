import React, { useState,useEffect } from "react";
import {  useHistory,useParams,Link } from "react-router-dom";
import { AddContact } from "../../Redux/Action/FormAction";
import { useDispatch,useSelector} from "react-redux";
import { DeleteContact } from '../../Redux/Action/FormAction';
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
     setName("")
   }
   
  const dataselector = useSelector((state) => state.contacts.contacts)
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
     onClick={submitHandler}>Add</button>
    </div>
    <div className="container">
      <div className="row d-flex flex-column">

        <div className="col-md-14 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">MobileNumber</th>
                <th scope="col">DebitCardNumber</th>
                <th scope="col">Gender</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataselector.map(contacts => (
                <tr>
                  <td>{contacts.id}</td>
                  <td>{contacts.Name}</td>
                  <td>{contacts.MobileNumber}</td>
                  <td>{contacts.DebitCardNumber}</td>
                  <td>{contacts.Gender}</td>
                  <td>

                    <button
                      type="button"
                      onClick={() => dispatch(DeleteContact(contacts.id))}
                      className="btn btn-sm btn-danger mx-3"
                    >
                      Delete
                    </button>
                    <Link>
                      <span>edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </>
  );
}


export default Form;