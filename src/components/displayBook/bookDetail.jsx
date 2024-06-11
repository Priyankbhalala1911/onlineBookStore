import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./bookDetail.css"
import { useCart } from 'react-use-cart';

const BookDetail = () => {
  const { addItem } = useCart();
  const [value, setValue] = useState(0);
  const location = useLocation()
  const item = location.state.id;
  // console.log(location.state)

  var listprice = location.state.id.saleInfo.listPrice.amount;
  var retailprice = location.state.id.saleInfo.retailPrice.amount;

  var discount = (((listprice - retailprice) / listprice) * 100).toFixed(2)


  return (
    <div>
      <div className="container-book">
        <div className="image">
          <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
        </div>
        <div className="details">
          <p className="book-title">
            {item.volumeInfo.title}
          </p>
          <p className="book-subtitle">
            {item.volumeInfo.subtitle}
          </p>
          <p className='book-author'>Published {item.volumeInfo.publishedDate} by {item.volumeInfo.publisher}</p>
          <hr />
          <p className='active'>Paperback</p>
          <div className="book-amount">
            <div className="retailprice">&#8377; {retailprice}</div>
            <del className="listprice">&#8377; {listprice}</del>
            <div className="discount">{discount}% Off</div>

          </div>
          <div className="quntity">
            <button onClick={() => {
              if (value > 0) {
                setValue(value - 1)
              }
            }}>-</button>
            <button className='value'>{value}</button>

            <button onClick={() => setValue(value + 1)}>+</button>
          </div>

          <div className="addtocart">
            <button onClick={(value)=>{
              addItem({ id: item.id, name: item.volumeInfo.title, price: listprice ,image:item.volumeInfo.imageLinks.smallThumbnail ,amount:retailprice, quantity: value})
              window.location.reload()
              }}>ADD TO CART</button>
              
          </div>
        </div>
      </div>

      <div className="name">OverView</div>
      <div className="overview">
        <div className="book-title"><b>Title: </b>{item.volumeInfo.title}</div>
        <div className="description"><b>Description : </b>{item.volumeInfo.description}</div>
        <div className="search-info"><b>Search information : </b>{item.searchInfo.textSnippet}</div>
      </div>

      <div className="product-details">
        <h1>Product Details</h1>
        <table>
          <tr>
            <th>Publisher:</th>
            <td>{item.volumeInfo.publisher}</td>
          </tr>
          <tr>
            <th>Publication date:</th>
            <td>{item.volumeInfo.publishedDate}</td>
          </tr>
          <tr>
            <th>Pages:</th>
            <td>{item.volumeInfo.pageCount}</td>
          </tr>
        </table>
      </div>

    </div >
  )
}

export default BookDetail
