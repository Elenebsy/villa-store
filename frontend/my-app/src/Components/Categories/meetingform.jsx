import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './meetingform.css';

const MeetingRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        availabilityDate: '',
        availabilityTime: '',
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
        console.log('Form submitted:', formData);
    };

    return (
        <div className="form-container">
          
            <form onSubmit={handleSubmit} className="meeting-form">
            <h2 className='meeting'>Meeting Request Form</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="availabilityDate">Availability Date:</label>
                    <input
                        type="date"
                        id="availabilityDate"
                        name="availabilityDate"
                        value={formData.availabilityDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="availabilityTime">Availability Time:</label>
                    <input
                        type="time"
                        id="availabilityTime"
                        name="availabilityTime"
                        value={formData.availabilityTime}
                        onChange={handleChange}
                        required
                    />
                </div>

                <Link to="/cart" className="request-meeting-button">
                    Request a Meeting
                </Link>
            </form>
        </div>
    );
};

export default MeetingRequestForm;
