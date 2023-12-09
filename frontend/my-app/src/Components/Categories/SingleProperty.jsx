import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './single.css';

const SingleProperty = () => {
  const [property, setProperty] = useState({});
  const { propertyId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(propertyId)
        const response = await axios.get(`/property/${propertyId}`);
        const data = response.data;
        setProperty(data);
        console.log('Fetched Single Property Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., set an error state)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="single-property-container">
      {Object.keys(property).length === 0 ? (
        <p>Loading..</p>
      ) : (
        <>
          <img src={property.image1} alt={`Property`} className="single-property-image" />
          <Link to={`/property/2/meeting-request`} className="request-meeting-button">
            Request a Meeting
          </Link>

          <div className="single-property-content">
            <h2>{property.Out_ttitle}</h2>
            <p className="property-description">{property.description}</p>
            <div className="property-details">
              <p>Type: {property.type}</p>
              <p>Sale Type: {property.sale_type}</p>
              <p>Rooms: {property.num_room}</p>
              <p>Bedrooms: {property.num_Bedrooms}</p>
              <p>Bathrooms: {property.num_Bathrooms}</p>
              <p>Floors: {property.num_Floors}</p>
              <p>Individuals: {property.num_individuals}</p>
              <p>Size: {property.size}</p>
              <p>Location: {property.country}, {property.state}, {property.city}</p>
              <p>Address: {property.street}, {property.num_house}, {property.District}</p>
              <p>Status: {property.status}</p>
              <p>Availability Date: {property.availabilityDate}</p>
              <p>Price: ${property.price}</p>
            </div>

          </div>
          <Link to="/houses" className="back-link">Back to Houses</Link>
        </>
      )}
    </div>
  );
};

export default SingleProperty;
