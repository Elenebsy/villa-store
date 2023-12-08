import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        // Handle form submission (you can send the data to your backend or perform any other actions)
        console.log('Form submitted:', formData);
        // Instead of using history, you can use Link to navigate
        // Redirect to the meeting request page
        // history.push('/meetingreq');
    };

    return (
        <div className="form-container">
            <h2>Meeting Request Form</h2>
            <form onSubmit={handleSubmit}>
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
