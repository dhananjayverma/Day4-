// UserProfile.js
import React from 'react';

function UserProfile({ userData }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Bio:</strong> {userData.bio}</p>
    </div>
  );
}

export default UserProfile;
