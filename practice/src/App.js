import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const contactList = [
    {
      id: "1",
      name: "Divya",
      email: "divya@gmail.com",
    },
    {
      id: "2",
      name: "Mom",
      email: "mom@gmail.com",
    },
  ];

  const [contacts, setContacts] = useState([]);
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
