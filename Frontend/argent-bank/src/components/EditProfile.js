import React, { useState } from 'react';

function EditProfile({ firstName: initialFirstName, lastName: initialLastName, onSave, onCancel }) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleSave = () => {
    onSave(firstName, lastName);
  };

  return (
    <div className="header">
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <button className="save-button" onClick={handleSave}>Save</button>
      <button className="cancel-button" onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditProfile;
