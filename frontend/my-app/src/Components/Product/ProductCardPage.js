// ProductCardPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCardPage = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/properties/${match.params.productId}`);
        const data = response.data;
        setProduct(data);
        setLoading(false);
        console.log('Fetched Product Details:', data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [match.params.productId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={product.image1} alt={`Product`} />
          <h3>{product.Out_ttitle}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProductCardPage;
