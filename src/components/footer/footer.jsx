import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="details">
                    <ul className='footer-ul'>My Account
                        <li><Link to="./login" >SIGN IN</Link></li>
                        <li><Link to="./signup">REGISTRATION</Link></li>
                        <li><Link to="./cartdetails">VIEW CART</Link></li>
                        <li><Link>MY WATSHLIST</Link></li>
                        <li><Link>TRACK MY ORDER</Link></li>
                    </ul>
                </div>
                <div className="details">
                    <ul className='footer-ul'>About Us
                        <li><Link>VISION</Link></li>
                        <li><Link>ARTICLES</Link></li>
                        <li><Link>CAREERS</Link></li>
                        <li><Link>SERVICE TERMS</Link></li>
                        <li><Link>DONATE</Link></li>
                    </ul>
                </div>  
                <div className="details">
                    <ul className='footer-ul'>Discover
                        <li><Link to="./home">HOME</Link></li>
                        <li><Link to="./bookstore">STORE</Link></li>
                        <li><Link>BOOKS</Link></li>
                        <li><Link>SUBJECTS</Link></li>
                        <li><Link>SEARCH</Link></li>
                    </ul>
                </div>
                <div className="details">
                    <ul className='footer-ul'>Helps
                        <li><Link>HELP CENTER</Link></li>
                        <li><Link>REPORT A PROBLEM</Link></li>
                        <li><Link to="./cartdetails">VIEW CART</Link></li>
                        <li><Link>SUGGESTING EDITS</Link></li>
                        <li><Link to="./Contact">CONTACT US</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-end">
                    <p>@{new Date().getFullYear()} Book Store. All right reserved.</p>
            </div>
        </div>
    )
}

export default footer
