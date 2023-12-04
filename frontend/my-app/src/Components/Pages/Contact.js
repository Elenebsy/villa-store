import React, { Component } from 'react'
import { useState } from 'react';
import "./Contact.css"

//export default class Contact extends Component {
 // render() {
  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData); // Show The Output
    };
  
    return (
      <div className='container'>
      <div className='main'>Contact Us</div>
      <form className='form' onSubmit={handleSubmit}>
        <label> Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /> </label>
        <br />
        <label> Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /> </label>
        <br />
        <label> Message:
          <textarea name="message" value={formData.message} onChange={handleChange} /> </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button">Use My Info?</button>
      </form>
    </div>
  );
  }
  export default Contact;