import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {useCart } from "react-use-cart";
// import CartDetails from "./CartDetails"
import {Link } from 'react-router-dom';



const Cart = () => {
  // const navigate = useNavigate();
  const {
    totalItems,
  } = useCart();

  // console.log(totalItems)
  return (
    <div>
        <div className="icon">
          <Link to="./CartDetails">
            <FontAwesomeIcon icon={faCartShopping} color="black" />
            
          </Link>
          <div className="count">{totalItems}</div>
        </div>


    </div>
  )
}

export default Cart
