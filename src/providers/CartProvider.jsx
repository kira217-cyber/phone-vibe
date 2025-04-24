import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import { getCarts } from '../utils';
// import { getCart } from '../utils';

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(()=>{
        setCart(getCarts())
    },[])

    return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
};

export default CartProvider;