// UserProfile.js

import React from 'react';
import { Container, Grid, Paper, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'center',
  height: '100vh',
  marginTop: '1vh'
});

const StyledPaper = styled(Paper)({
  padding: '16px',
  textAlign: 'center',
  color: 'black',
});

const StyledAvatar = styled(Avatar)({
  width: '80px',
  height: '80px',
  marginBottom: '16px',
  alignSelf: 'center', // Align the avatar in the middle of the left column
  position: 'relative',
  left: '42%',
  
});

const StyledButton = styled(Button)({
  marginTop: '16px',
});

const UserProfile = () => {
  const profileData = {
    name: 'John Doe',
    phone: '+1234567890',
    email: 'john.doe@example.com',
    imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };

  const handleMyOrderClick = () => {
    console.log('My Order button clicked');
  };

  const handleEditProfileClick = () => {
    console.log('Edit Profile button clicked');
  };

  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StyledPaper>
            <StyledAvatar alt="Profile Image" src={profileData.imageSrc} />
            <StyledButton
              variant="contained"
              color="primary"
              onClick={handleEditProfileClick}
            >
              Edit Profile
            </StyledButton>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledPaper>
            <div className="profile-data">
              <div className="profile-name">{profileData.name}</div>
              <div className="profile-contact">
                <div>Email: {profileData.email}</div>
                <div>Phone: {profileData.phone}</div>
              </div>
            </div>
            <StyledButton
              variant="contained"
              color="success"
              onClick={handleMyOrderClick}
            >
              My Requests
            </StyledButton>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default UserProfile;
