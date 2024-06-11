import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./slideImage.css";

import BookImage from "./book-image/book.png";
import BookImage1 from "./book-image/book1.png";
import BookImage2 from "./book-image/book2.png";




const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
  
}
const SlideImages = [
  {
    image: BookImage,
  },
  {
    image: BookImage1,
  },
  {
    image: BookImage2,
  },
];

const SlideImage = () => {  
    return (
      <div className="slide-container1">
        <Slide>
         {SlideImages.map((SlideImage, index)=> (
            <div key={index}>
              <div className="slide-image-cover" style={{...divStyle, 'backgroundImage': `url(${SlideImage.image})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default SlideImage