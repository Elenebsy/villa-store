import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import './Apartments.css';
import { Link } from 'react-router-dom';

const Apartments = () => {
  const [apartmentData, setApartmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/apartments');
        const data = response.data;
        setApartmentData(data);
        setLoading(false);
        console.log('Fetched Property Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // const { addToCart , CartItems } = useContext(HousesContext);
  // const cartItemAmount = CartItems[property._id];
  return (
    <div className="grid-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        apartmentData.map((apartment, index) => (
          <Link to={`/apartment/${apartment.apartments_id}`} key={apartment.apartments_id} className="card-link">
            <div className="card">
              <img src={apartment.image1} alt={`apartment ${index + 1}`} className="card-image" />
              <div className="card-content">
                <h3>{apartment.Out_ttitle}</h3>
                <p>{apartment.description}</p>
                <p>Price: ${apartment.price}</p>
                {/* Add more details as needed */}
              </div>

            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Apartments;
