import React from "react";
import ContactCard from "./ContactCard"

function ContactList(props) {
  console.log(props);
  const list = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} />
    );
  });
  return <div className="ui celled list">{list}</div>;
}

export default ContactList;
