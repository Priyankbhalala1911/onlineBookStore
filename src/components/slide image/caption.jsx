import React from 'react'
import "./caption.css";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const slideCaption = () => {
  return (
    <div>
      <div className="caption">
        {/* <p>Premium member get 10% discounts anf earn rewards</p> */}
        <Marquee pauseOnHover>
          <Link to="./quiz">Premium member get 10% discounts and earn rewards</Link>
        </Marquee>
      </div>

    </div>
  )
}

export default slideCaption
