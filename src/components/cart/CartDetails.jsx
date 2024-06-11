import React from 'react'
import { useCart } from 'react-use-cart';
import "./cartDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Payment from '../Payment/payment';
import { Link } from 'react-router-dom';



const CartDetails = () => {
  const convenienceFee = 99;
  var discount = [];

  // console.log("hello")
  const {
    isEmpty,
    totalUniqueItems,
    items,
    removeItem,
    cartTotal
  } = useCart();
  if (isEmpty) return <p className='empty'>Your cart is empty</p>;
  // console.log(discount)
  return (
    <div className='cart-container'>
      <div className="cart">
        {
          items.map((curEle) => {
            discount.push(curEle.price - curEle.amount)
            return (
              <div className="cart-item">
                <button className="xmark" onClick={() => {
                  window.location.reload()
                  removeItem(curEle.id)
                }}>

                  <FontAwesomeIcon icon={faXmark} color="black" />
                </button>
                <div className="image">
                  <img src={curEle.image} alt="" />
                </div>
                <div className="details">
                  <div className="title">{curEle.name}</div>
                  <div className="amount">&#8377; {curEle.price}</div>
                  <div className="quentity">quantity: {curEle.quantity}</div>
                </div>

              </div>
            )
          })
        }
      </div>
      <div className="bag-container-item">
        <div class="item-count">PRICE DETAILS {totalUniqueItems} items</div>
        <div class="totalMRP">
          Total MRP
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <div class="discountMRP">
          Discount on MRP
          <span>-₹{(discount.reduce((total, num) => total + num, 0)).toFixed(2)}</span>
        </div>
        <div class="convenience-fee">
          Convenience Fee
          <span>₹{convenienceFee}</span>
        </div>
        <hr />
        <div class="total-amount">
          Total Amount
          <span>₹{(cartTotal - (discount.reduce((total, num) => total + num, 0)) + convenienceFee).toFixed(2)}</span>
        </div>
        <Link to="./payment"><button class="place-order" onClick={()=><Payment/>}>PLACE ORDER</button></Link>
      </div>
    </div>
  )
}

export default CartDetails;
