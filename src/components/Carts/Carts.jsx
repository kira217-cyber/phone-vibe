import React, { useContext, useEffect, useState } from "react";
import { getCarts, removeCarts } from "../../utils";
import AddToCart from "../AddToCart/AddToCart";
import { Helmet } from "react-helmet";
import EmptySate from "../ui/EmptySate";
import { CartContext } from "../../providers/Contexts";

const Carts = () => {
    
    const {setCart} = useContext(CartContext)

  // Carts gula add korta akta useState use kora holo
  const [displayCarts, setDisplayCarts] = useState([]);

  // useState use korta useEffect use kora holo

  useEffect(() => {
    const savedCarts = getCarts();
    setDisplayCarts(savedCarts);
  }, []);

  // Remove add to cart ar jonno akta function kora holo

  const handleRemoveToCart = (id) => {
    removeCarts(id);
    setDisplayCarts(getCarts());
    setCart(getCarts())
  };
// jodi kono kisu cart a add kora na theke tahole ata dekhabe

  if(displayCarts.length < 1 ) return <EmptySate></EmptySate>

  return (
    <div className="mt-10">
      <Helmet>
        <title>Carts</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* akhamne displayCarts k map kora local storage thake data nawya holo */}
        {displayCarts.map((cart) => (
          <AddToCart
            handleRemoveToCart={handleRemoveToCart}
            key={cart.id}
            deletable={true}
            cart={cart}
          ></AddToCart>
        ))}
      </div>
    </div>
  );
};

export default Carts;
