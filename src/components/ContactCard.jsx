import React from 'react';

function ContactCard({ name, city, onEdit }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{city}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default ContactCard;
