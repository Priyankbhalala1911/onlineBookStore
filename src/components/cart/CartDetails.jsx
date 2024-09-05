import React from 'react'

import "./cartDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Payment from '../Payment/payment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../Store/reducer';



const CartDetails = () => {
  const dispatch = useDispatch();
  const convenienceFee = 99;
  const {addBookCart,totalQunity} = useSelector((state)=>state.Cart);
  var cartTotal = 0;
  var discountPrice = 0;
  
  return (
    <div className='cart-container'>
      <div className="cart">
        {
          addBookCart.map((curEle,index) => {
            cartTotal+=curEle.quantity*curEle.price
            discountPrice+=curEle.quantity*curEle.discount
            return (
              <div className="cart-item" key={index}>
                <button className="xmark" onClick={() => {
                  dispatch(removeBook(curEle.id))
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
        <div class="item-count">PRICE DETAILS {totalQunity} items</div>
        <div class="totalMRP">
          Total MRP
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <div class="discountMRP">
          Discount on MRP
          <span>-₹{discountPrice.toFixed(2)}</span>
        </div>
        <div class="convenience-fee">
          Convenience Fee
          <span>₹{convenienceFee}</span>
        </div>
        <hr />
        <div class="total-amount">
          Total Amount
          <span>₹{(cartTotal - discountPrice + convenienceFee).toFixed(2)}</span>
        </div>
        <Link to="./payment"><button class="place-order" onClick={()=><Payment/>}>PLACE ORDER</button></Link>
      </div>
    </div>
  )
}

export default CartDetails;
