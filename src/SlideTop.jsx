import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./slideTop.css"

const slideImages = [
  {
    caption: '50% OFF ARROW VIDEO'
  },
  {
    caption: 'BUY ONE, GET ONE 50% OFF BOOKS FOR ALL AGES'
  },
  {
    caption: 'PREMIUM & REWARDS MEMBERS GET 25% OFF PRE-ORDER BOOKS'
  },
  {
    caption: '50% OFF HUNDREDS OF HARDCOVER BOOKS'
  },
];

const slideTop = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div >
              <span className="decoration">{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default slideTop
