import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Houses.css';
import { Link } from 'react-router-dom';

const Houses = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/properties');
        const data = response.data;
        setPropertyData(data);
        setLoading(false);
        console.log('Fetched Property Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        propertyData.map((property, index) => (
          <Link to={`/property/${property.property_id}`} key={property.property_id} className="card-link">
            <div className="card">
              <img src={property.image1} alt={`Property ${index + 1}`} className="card-image" />
              <div className="card-content">
                <h3>{property.Out_ttitle}</h3>
                <p>{property.description}</p>
                <p>Price: ${property.price}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Houses;
