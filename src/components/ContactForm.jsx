import React, { useState, useEffect } from 'react';

function ContactForm({ onSubmit, editingContact }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setCity(editingContact.city);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && city) {
      onSubmit({ name, city });
      setName('');
      setCity('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">{editingContact ? 'Update' : 'Add contact'}</button>
    </form>
  );
}

export default ContactForm;
