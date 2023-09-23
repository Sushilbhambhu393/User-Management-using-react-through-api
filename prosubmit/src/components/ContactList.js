import React, { useEffect, useRef, useState } from "react";
import "./ContactList.css";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  // console.log(props);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const inputEl = useRef("");

  useEffect(() => {
    // Update the filtered contacts whenever the search term changes
    const filtered = props.contacts.filter(
      (contact) =>
        contact.id.toString().includes(searchTerm) ||
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(filtered);
  }, [searchTerm, props.contacts]);

  const deletecontacthandler = (id) => {
    props.getcontactid(id);
  };
  const updatecontacthandle = (id) => {
    props.getcontactid(id);
  };

  const renderContactList = filteredContacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickhandler={deletecontacthandler}
        clickhandle={updatecontacthandle}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2 style={{ marginLeft: "17px" }}>
        UserList
        <Link to="/add">
          <button
            className="ui button blue right"
            style={{ marginLeft: "55px" }}
          >
            {" "}
            Add User
          </button>
        </Link>
      </h2>

      <div className="ui search">
        <center>
          <div className="ui icon input ">
            <input
              ref={inputEl} 
              id="seee"
              type="text"
              placeholder="Search Contacts"
              className="prompt"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
        </center>
      </div>

      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div>
    </div>
  );
}
