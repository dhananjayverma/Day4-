// EditProfile.js
import React from 'react';

function EditProfile({ userData, handleInputChange }) {
  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <label>Name: 
        <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
      </label>
      <label>Email: 
        <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
      </label>
      <label>Bio: 
        <textarea name="bio" value={userData.bio} onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default EditProfile;
