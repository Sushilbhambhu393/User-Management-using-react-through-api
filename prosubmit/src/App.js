import { useEffect, useState } from "react";
import "./App.css";
import api from "./api/contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import EditContacts from "./components/EditContacts";


function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [SearchResuts,setSearchResults]=useState([]); 
  //retreve contacts
  const retreiveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

//updatehandler
  const updatecontacthandler = async (contact) => {
    console.log("updatehandler",contact);
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, language,framework } = response.data;
    console.log("res.data ",response.data)
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };


//addhandler
  const addcontacthandler = async (contact) => {
    console.log(contact);
    const request = {
     
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };


//removehandler
  const removecontacthandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newcontactlist);
  };
//searchhandler
  const searchHandler=(searchTerm)=>{
      setsearchTerm(searchTerm);  
      if(searchTerm !== ""){
        const newcontactlist =contacts.filter((contact)=>{
          return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase()); 
        });
        setSearchResults(newcontactlist);
      }
      else{
        setSearchResults(contacts);
      }
  }

  useEffect(() => {
    // localStorage.setItem( LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const getAllContacts = async () => {
      const allcontacts = await retreiveContacts();
      if (allcontacts) setContacts(allcontacts);
    };
    getAllContacts();
  }, []);

  return (
    <div>
      
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            Component={() => (
              <ContactList
                contacts={searchTerm.length<1 ? contacts : SearchResuts}
                getcontactid={removecontacthandler}
                term={searchTerm}
                searchkeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            exact
            Component={() => (
              <AddContacts addcontacthandler={addcontacthandler} />
            )}
          />
         
          <Route
            path="/edit"
            Component={() => (
              <EditContacts
                contact={contacts}
                updatecontacthandler={updatecontacthandler}
              />
            )}
            />

         {/* <Route
            path="/contact/:id"
           Component={ContactDetail}
            /> */}
            
            </Routes>
      </Router>
    </div>
  );
}

export default App;
