// EditProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, Avatar, Button, TextField, Input } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '16px',
  textAlign: 'center',
  color: 'black',
});

const StyledAvatar = styled(Avatar)({
  width: '80px',
  height: '80px',
  marginTop: '16px',
});

const StyledButton = styled(Button)({
  marginTop: '16px',
});

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    imageSrc: '',
    // Add a property for the date
    date: '',
  });

  useEffect(() => {
    // Fetch user profile data from the backend when the component mounts
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/email/ali@ali.com');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const handleSaveProfile = async () => {
    try {
      // Make a PUT request to update the user profile data
      const response = await axios.put('http://localhost:5000/users/email/ali@ali.com', profileData);
      console.log('Profile saved:', response.data);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          imageSrc: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMyOrdersClick = () => {
    // Handle "My Orders" button click logic here
    console.log('My Orders button clicked');
  };

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <StyledCard>
          <StyledAvatar alt="Profile Image" src={profileData.imageSrc} />
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button component="span" variant="outlined">
              Upload Image
            </Button>
          </label>
          <TextField
            label="Name"
            value={profileData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={profileData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            value={profileData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            value={profileData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            value={profileData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            fullWidth
            margin="normal"
          />
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleSaveProfile}
          >
            Save Profile
          </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleMyOrdersClick}
          >
            My Orders
          </StyledButton>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default EditProfile;
