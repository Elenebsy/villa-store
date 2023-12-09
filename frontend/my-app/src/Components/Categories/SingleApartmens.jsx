import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './single.css';

const Singleapartments = () => {
  const [apartment, setapartments] = useState({});
  const { apartmentId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(apartmentId);
        const response = await axios.get(`/apartment/${apartmentId}`);
        const data = response.data;
        setapartments(data);
        console.log('Fetched Single apartments Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., set an error state)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="single-Apartment-container">
      {Object.keys(apartment).length === 0 ? (
        <p>Loading..</p>
      ) : (
        <>
          <img src={apartment.image1} alt={`apartments`} className="single-apartments-image" />
          <Link to={`/apart/2/meeting-request`} className="request-meeting-button">
            Request a Meeting
          </Link>

          <div className="single-apartments-content">
            <h2>{apartment.Out_ttitle}</h2>
            <p className="apartment-description">{apartment.description}</p>
            <div className="apartment-details">
              <p>Type: {apartment.type}</p>
              <p>Sale Type: {apartment.sale_type}</p>
              <p>Rooms: {apartment.num_room}</p>
              <p>Bedrooms: {apartment.num_Bedrooms}</p>
              <p>Bathrooms: {apartment.num_Bathrooms}</p>
              <p>Floors: {apartment.num_Floors}</p>
              <p>Individuals: {apartment.num_individuals}</p>
              <p>Size: {apartment.size}</p>
              <p>Location: {apartment.country}, {apartment.state}, {apartment.city}</p>
              <p>Address: {apartment.street}, {apartment.num_house}, {apartment.District}</p>
              <p>Status: {apartment.status}</p>
              <p>Availability Date: {apartment.availabilityDate}</p>
              <p>Price: ${apartment.price}</p>
            </div>

          </div>
          <Link to="/Apartments" className="back-link">Back to Houses</Link>
        </>
      )}
    </div>
  );
};

export default Singleapartments;
