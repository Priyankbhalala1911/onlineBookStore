import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Page from "../popularBook/pages/pages"

import "./popularBook.css";

const Popularbook = ({Book}) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='popularBook'>
            <Carousel
                showDots={true}
                responsive={responsive}
                swipeable={false}
                draggable={true}
                autoPlaySpeed={1000}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    Book.map((curElem) => {
                        return (
                            <>
                                <div className="cart" onClick={()=>{<Page/>}}>
                                    <img src={curElem.image} alt="loading" />
                                    <div className="price">₹ {curElem.saleInfo.listPrice.amount}</div>
                                    <p className='title'>{curElem.title}</p>
                                </div>
                            </>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Popularbook
