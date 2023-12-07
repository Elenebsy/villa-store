import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Houses.css';

const Houses = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/properties');
        const data = response.data;
        setPropertyData(data);
        console.log('Fetched Property Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      {propertyData && propertyData.map((property, index) => (
        <div key={property._id} className="card">
          {property.image1 && (
            <img src={property.image1} alt={`Property ${index + 1}`} className="card-image" />
          )}
          <div className="card-content">
            <h3>{property.Out_ttitle}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Houses;









