import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Search() {
  const [value, setvalue] = useState("");
  const handleInput=(e)=>
  {
    setvalue(e.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8070/user/delete/${value}`)
      .then((res) => alert("successfully deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100"style={{backgroundColor:"#f3f9d2"}}>
      <div className=" p-3 rounded w-35" style={{backgroundColor:"#cbeaa6"}}>
        <h1>
          <center>Delete User Information</center>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName">Enter Id:</label>
            <input
              type="text"
              placeholder="Enter id"
              className="form-control rounded-0"
              id="id"
              onChange={handleInput}
            ></input>
          </div>

          <button
            type="submit"
            className="btn  border w-50 rounded-10 m-10 " style={{backgroundColor:"#78a1bb", color:"white"}}
          >
            Delete
          </button>
          <Link
            to="/"
            type="submit"
            className="btn  border w-50 rounded-10 m-10" style={{backgroundColor:"#78a1bb", color:"white"}}
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
