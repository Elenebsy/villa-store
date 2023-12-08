import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProperty = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/property/${propertyId}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };
  
    fetchProperty();
  }, [propertyId]);
  
  

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{property.Out_ttitle}</h2>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SingleProperty;
