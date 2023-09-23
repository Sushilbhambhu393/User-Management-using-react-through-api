import React from 'react'
import user from "../images/user.png"
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function ContactCard(props) {

    //destructuring so that we can directly use the names
    const{id,name,language,framework}=props.contact;
  return (
    <div>
        <div className='item'>
                <div className='content'>
                    <img src={user} alt="user" className='ui avatar image' />
                    <div >{id}</div>
                   {/* <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}} > */}
                    <div className='header'><b>{name}</b></div>
                      {/* </Link> */}
                    <div >{language}</div>
                    <div >{framework}</div>
                    <div className='icons'> 
               

                    <i
                className='trash alternate outline icon' id="ii"
                style={{color:"red", marginTop:"7px", marginLeft:"10px"}}
                onClick={()=> props.clickhandler(id) }
               ></i>
               <Link to={{pathname:`/edit`,state:{contact:props.contacts}}} >
               <i
                className='edit alternate outline icon' id="iii"
                style={{color:"blue", marginTop:"7px", marginLeft:"10px"}}
                  //  onClick={()=> props.clickhandle(id) }
               ></i></Link>

              
              
               </div>
                </div> 
               
            </div><hr />
    </div>
  );
};
