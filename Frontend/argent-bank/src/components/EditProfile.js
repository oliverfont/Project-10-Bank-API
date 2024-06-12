import React, { useState } from 'react';
import '../index.css';

function EditProfile({ firstName: initialFirstName, lastName: initialLastName, onSave, onCancel }) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleSave = () => {
    onSave(firstName, lastName);
  };

  return (
    <div className="header text-center">
      <h1>Welcome back</h1>
      <div className="edit-profile-inputs">
        <input
          type="text"
          className="edit-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="edit-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="edit-profile-buttons">
        <button className="btn-primary save-button" onClick={handleSave}>Save</button>
        <button className="btn-secondary cancel-button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default EditProfile;
