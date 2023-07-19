import React, { useState } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContactsData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data.results);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={fetchContactsData}>Fetch Contacts</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {contacts.length > 0 && (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>Contact ID:</strong> {contact.id}<br />
              <strong>Created Date:</strong> {contact.createdAt}<br />
              <strong>Last Updated Date:</strong> {contact.updatedAt}<br />
              <strong>Archived:</strong> {contact.archived ? 'Yes' : 'No'}<br />
              <strong>Properties:</strong>
              <ul>
                {Object.entries(contact.properties).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contacts;
