import React from 'react';

const ProfileHeader = ({ firstName, onEdit }) => (
  <div className="header">
    <h1>Welcome back<br />{firstName}!</h1>
    <button className="edit-button" onClick={onEdit}>Edit Name</button>
  </div>
);

export default ProfileHeader;
