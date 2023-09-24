import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export default function Insert() {
  const [value, setvalue] = useState({
    id: "",
    name: "",
    language:"",
    framework: ""
  });
  const{id, name, language, framework} = value;
  //handleinput method is use to handle event and store data what we are typing on insertion form.
  const handleInput = (event) => {
    setvalue(
      {...value,
      [event.target.name]: event.target.value},
    );
  };

  //this method will trigger when we click insert buttoon.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    //axios use to connect frontend with backend and passing also value(it contains data of form) to backend.
    Axios.post("http://localhost:8070/user/", value)
      .then((res) => {
        console.log(res.data);
        if (res.data === "Error") {
          alert("Already Same data is present in the table");
        } else {
          alert("Data inserted successfully");
          setvalue(
            {
              id: "",
              name: "",
              language:"",
              framework: ""
            }
          );
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100" style={{backgroundColor:"#f3f9d2"}}     >
      <div className=" p-3 rounded" style={{backgroundColor:"#cbeaa6"}} >
        <h1>
          <center> Insert User Information</center>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName">UserId</label>
            <input
              type="text"
              placeholder="Enter UserID"
              className="form-control rounded-0"
              name="id"
              onChange={handleInput}
              value={id}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">User Name</label>
            <input
              type="text"
              placeholder="Enter User Name"
              className="form-control rounded-0"
              name="name"
              onChange={handleInput}
              value={name}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">Language</label>
            <input
              type="text"
              placeholder="Enter Language"
              className="form-control rounded-0"
              name="language"
              onChange={handleInput}
              value={language}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">Framework</label>
            <input
              type="text"
              placeholder="Enter framework"
              className="form-control rounded-0"
              name="framework"
              onChange={handleInput}
              value={framework}
              required
            ></input>
          </div>
          <div className="d-flex gap-5">
            <button type="submit" className="btn  w-100" style={{backgroundColor:"#78a1bb", color:"white", borderRadius:"20%"}}>
              Insert User Information
            </button>
            <Link
              to="/getAll"
              type="submit"
              className="btn  border w-100 rounded-10"style={{backgroundColor:"#78a1bb", color:"white", borderRadius:"20%"}}
            >
              Get All Usser
            </Link>
            <Link
              to="/search"
              type="submit"
              className="btn  border w-100 rounded-10" style={{backgroundColor:"#78a1bb", color:"white", borderRadius:"20%"}}
            >
              Search User
            </Link>
            <Link
              to="/delete"
              type="submit"
              className="btn  border w-100 rounded-10"style={{backgroundColor:"#78a1bb", color:"white", borderRadius:"20%"}}
            >
              Delete User
            </Link>
            <Link
              to="/update"
              type="submit"
              className="btn  border w-100 rounded-10" style={{backgroundColor:"#78a1bb", color:"white", borderRadius:"20%"}}
            >
              update User Information
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
