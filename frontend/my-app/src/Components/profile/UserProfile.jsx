// UserProfile.js

import React from "react";
import "./userProfile.css";

const UserProfile = () => {
  const profileData = {
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    // Add the actual image source
    imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const handleMyOrderClick = () => {
    // Handle the "My Order" button click event
    console.log("My Order button clicked");
  };

  const handleEditProfileClick = () => {
    // Handle the "Edit Profile" button click event
    console.log("Edit Profile button clicked");
  };

  return (
    <div className="profile-container">
      <img
        src={profileData.imageSrc}
        alt="Profile Image"
        className="profile-image"
      />
      <div className="profile-name">{profileData.name}</div>
      <div className="profile-contact">
        <div>Phone: {profileData.phone}</div>
        <div>Email: {profileData.email}</div>
      </div>
      <button onClick={handleMyOrderClick} className="button">
        My Order
      </button>
      <button onClick={handleEditProfileClick} className="button">
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;
