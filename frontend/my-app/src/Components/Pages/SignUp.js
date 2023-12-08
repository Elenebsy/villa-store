
import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http:://localhost:3000/adduser', userData);
      console.log('User registration successful:', response.data);

      setUserData({
        username: '',
        password: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="bb">
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={userData.username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={userData.password} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Phone:
            <input type="text" name="phone" value={userData.phone} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegisterForm;
