import React, { createContext } from 'react';
import getDefaultCart from './getDefaultCart';
import { useState } from 'react';


export const HousesContext = createContext(null);

getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= 50; i++) {
        cart[i] = 0;
    }
    return cart;  
}


export const HousesContextProvider = (props) => {
    const [CartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const contextValue = {CartItems, addToCart, removeFromCart}
    return (

    <HousesContext.Provider value={contextValue}>{props.children}</HousesContext.Provider>
    )
}
