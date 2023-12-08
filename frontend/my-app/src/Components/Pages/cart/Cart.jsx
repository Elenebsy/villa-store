import React, { useContext } from 'react'
import Houses from '../../Categories/Houses';
import HouseContext from '../../context/House-context';
import CartItem from '../Pages/cart/Cart-item';

const Cart = () => {
  const {cartItems} = useContext(HousesContext);
  return (
    <div className="cart">
            
            <div> <h1> Your Cart Items</h1> </div>
            
            <div className='cartItems' >
              {Houses.map((Houses) => {
                if (cartItems[Houses.property._id]!== 0) {
                  return <CartItem data = {Houses} />
                }
              })}
            </div>
            
        </div>
  )
}
export default Cart;
