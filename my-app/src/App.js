// App.js
import React, { useState } from 'react';
import './App.css';
import UserProfile from './Components/UserProfile';
import EditProfile from './Components/EditProfile';

function App() {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="app-container">
      <h1>User Profile</h1>
      {editMode ? (
        <EditProfile userData={userData} handleInputChange={handleInputChange} />
      ) : (
        <UserProfile userData={userData} />
      )}
      <button onClick={toggleEditMode}>{editMode ? 'Save' : 'Edit'}</button>
    </div>
  );
}

export default App;
