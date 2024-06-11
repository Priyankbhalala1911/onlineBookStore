import React from 'react'
import Marquee from "react-fast-marquee";
import image1 from "./images/brand1.png"
import image2 from "./images/brand2.png"
import image3 from "./images/brand3.png"
import image4 from "./images/brand4.png"
import image5 from "./images/brand5.png"
// import "./logo-show.css"


const logoShow = () => {

    const style = {
        margin:"100px 0px",
    }
    return (
        <div style={style}>
            <Marquee pauseOnHover>
                <img src={image2} alt="loading" />
                <img src={image3} alt="loading" />
                <img src={image4} alt="loading" />
                <img src={image5} alt="loading" />
                <img src={image1} alt="loading" />
                <img src={image2} alt="loading" />
                <img src={image3} alt="loading" />
                <img src={image4} alt="loading" />  
                <img src={image5} alt="loading" />  
            </Marquee>
        </div>
    )
}

export default logoShow
