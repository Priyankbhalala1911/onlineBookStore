import React from 'react'
// import data from "../Home/data/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import {useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addBook,} from '../../../Store/reducer';

const Card = ({ book }) => {
    const { addItem } = useCart();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>

            {
                // eslint-disable-next-line array-callback-return
                book.map((item,index) => {
                    let image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo && item.volumeInfo.title;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let retailAmount = item.saleInfo.retailPrice && item.saleInfo.retailPrice.amount;
                    let discountPrice = amount - retailAmount;
                    let discount = ((amount - retailAmount) / amount) * 100
                    discount = discount.toFixed(2)
                    if (image !== undefined && amount !== undefined && title !== undefined || (amount !== undefined && amount !== 0)) {
                        return (
                            <div className="card-container" key={index}>
                                <div className="card" onClick={() => navigate("./bookdetails", { state: { id: item } })}>
                                    <img src={image} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{title}</h3>
                                        <p className="amount">
                                            &#8377;{retailAmount}
                                            <del>&#8377;{amount}</del>
                                            <span>{discount}% Off</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="btn">
                                    <button onClick={() =>{
                                        // addItem({ id:item.id, name: title, price: amount, image: image, amount: retailAmount })
                                        // window.location.reload()
                                        dispatch(addBook({ id: item.id, name: title, price: amount, image: image, amount: retailAmount,quantity:1,discount:discountPrice }))
                                        toast.success("Add Book in Cart", {
                                            position: "top-right",
                                            autoClose: 500,
                                            hideProgressBar: true,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            // progress: undefined,
                                            theme:  "colored",
                                            },);
                                            
                                            
                                    } }>Add to cart</button>
                                    <button>share <FontAwesomeIcon icon={faShare} /></button>

                                </div>

                                <div />

                            </div>
                        )
                    }

                })
            }


            <ToastContainer />

        </>
    )


}


export default Card
