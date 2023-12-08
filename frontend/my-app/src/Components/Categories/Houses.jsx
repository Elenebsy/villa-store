import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Houses.css';
import { HousesContext } from '../../context/Houses-context';
import Cart from '../Pages/cart/Cart';

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
  const { addToCart , CartItems } = useContext(HousesContext);
  const cartItemAmount = CartItems[property._id];
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
          <button className="addToCartBotton" onClick={() => addToCart(property._id)} >
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
      ))}
    </div>
  );
};

export default Houses;









