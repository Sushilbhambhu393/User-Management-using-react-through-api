import React from 'react'
import user from "../images/user.png"
import { Link } from 'react-router-dom';

export default function ContactDetail(props) {

    console.log(props);
//    const {name,id}=props.location.contact;
  return (
    <div className='main'>
     <div className='ui card centered'>
<div className="image">
    <img src={user} alt="user" />
</div>
    <div className="content">
        {/* <div className="header">{name}</div> */}
        <div className="header">User</div>
        {/* <div className="description">{id}</div> */}
        <div className="description">this is user detail section</div>
    </div>
     </div>
        <div className="center-div">
          <Link to="/">  <button className="ui button blue center"> Back to Contact List</button>
          </Link>
            </div>         
    </div>
  );
};

