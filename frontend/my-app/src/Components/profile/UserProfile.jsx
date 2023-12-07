// ProfilePage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace 'http://your-api-endpoint/user' with your actual API endpoint
    const email='http://localhost:5000/user/';
    axios.get(`http://localhost:5000/users/email/${email}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  

  const handleSettingsClick = () => {
    // Add your logic for handling the "Settings" button click
    console.log('Settings button clicked');
  };

  return (
    <div className="profile-page">
      <img src={userData.image} alt="Profile" className="profile-image" />
      <div className="user-data">
        <h2>{userData.fullName}</h2>
        <p>{userData.email}</p>
        <p>{userData.phone}</p>
      </div>
      <button onClick={handleSettingsClick} className="settings-button">
        Settings
      </button>
    </div>
  );
};

export default ProfilePage;
