import React from 'react';
import '../index.css';

function ProfileHeader({ firstName, lastName, onEdit }) {
  return (
    <div className="header">
      <h1>
        Welcome back<br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button" onClick={onEdit}>Edit Name</button>
    </div>
  );
}

export default ProfileHeader;
