import React from 'react';
import './cartdesign.css';

const Cart = () => {
  // Assume you have meeting requests in the cart
  const cartItems = [
    {
      id: 1,
      propertyTitle: 'Sample Property 1',
      meetingDate: '2023-12-15',
      meetingTime: '15:00',
    },
    // Add more items as needed
  ];

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <p>{item.propertyTitle}</p>
              <p>Date: {item.meetingDate}</p>
              <p>Time: {item.meetingTime}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
