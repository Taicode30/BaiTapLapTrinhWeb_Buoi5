import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactCard from './components/ContactCard';
import './styles/App.css';

function App() {
  const [contacts, setContacts] = useState([
    { name: 'Alice Johnson', city: 'New York' },
    { name: 'Bob Smith', city: 'Los Angeles' },
    { name: 'Charlie Brown', city: 'Chicago' },
    { name: 'David Williams', city: 'Houston' },
    { name: 'Emma Davis', city: 'Phoenix' },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleFormSubmit = (contact) => {
    if (editingIndex !== null) {
      const updated = [...contacts];
      updated[editingIndex] = contact;
      setContacts(updated);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="container">
      <h1>Contact Book</h1>
      <p>Keep track of where your friends live</p>

      <ContactForm
        onSubmit={handleFormSubmit}
        editingContact={editingIndex !== null ? contacts[editingIndex] : null}
      />

      <div className="grid">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            city={contact.city}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
