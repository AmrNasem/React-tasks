import React, { useCallback, useEffect, useState } from "react";
import SingleContact from "../components/SingleContact";
import Task from "../components/Task";

const initialContacts = [
  {
    id: "c1",
    name: "Amr",
    phone: "0123456789",
    address: "Egypt Dakahlia",
  },
  {
    id: "c2",
    name: "Omar",
    phone: "0123456789",
    address: "Egypt Dakahlia",
  },
  {
    id: "c3",
    name: "Mohamed",
    phone: "0123456789",
    address: "Egypt Dakahlia",
  },
];

const Contacts = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((c) => c.name.toLowerCase().includes(query))
    );
  }, [query, contacts]);

  const deleteHandler = useCallback((id) => {
    setContacts((prevState) => prevState.filter((c) => c.id !== id));
  }, []);

  const changeHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <Task title="Contacts task">
      <form>
        <input
          className="w-100 outline-none my-2 p-2"
          placeholder="Search contacts"
          onChange={changeHandler}
          type="text"
          name="search"
          id="search"
        />
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((c) => (
            <SingleContact onDelete={deleteHandler} key={c.id} {...c} />
          ))}
        </tbody>
      </table>
      {!filteredContacts.length && (
        <p className="text-center">
          {query ? "Contact not found!" : "No contacts!"}
        </p>
      )}
    </Task>
  );
};

export default Contacts;
