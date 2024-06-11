import React, { useState } from "react";
import "./navbar.css";
import Logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom"
import MyAccount from "../authentication/myAccount";
import Cart from "../cart/cart";
import { CartProvider } from "react-use-cart";


const Navbar = () => {

  const [menubar, setMenubar] = useState(false);

  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="menubar" onClick={() => {
            setMenubar(!menubar)
          }}>
            <button><FontAwesomeIcon icon={faBars} color="black" /></button>

          </div>
          <div className="logo">
            <img src={Logo} alt="logo" width={80} />
            <span>Book</span>
          </div>
          <div className="link-nav-item">
            <div className={menubar ? "open" : " "} id="nav-item">

              <button className="xmark" onClick={() => {
                setMenubar(!menubar);
              }}><FontAwesomeIcon icon={faXmark} color="black" /></button>

              <div className="nav-style">
                <li><NavLink to="./home" onClick={()=>setMenubar(!menubar)}>Home</NavLink><span>||</span></li>
                {/* <li><NavLink to="./about" onClick={()=>setMenubar(!menubar)}>About</NavLink><span>|</span></li> */}
                <li><NavLink to="./bookstore" onClick={()=>setMenubar(!menubar)}>Store</NavLink><span>|</span></li>
                {/* <li><NavLink to="./home" onClick={()=>setMenubar(!menubar)}>Pages</NavLink><span>|</span></li> */}
                <li><NavLink to="./Contact" onClick={()=>setMenubar(!menubar)}>Contact</NavLink></li>
                <li className="not-display"><Link to="/" onClick={()=>setMenubar(!menubar)}>Notifications</Link></li>
                <li className="not-display"><Link to="./signup" onClick={()=>setMenubar(!menubar)}>Login/Registration</Link></li>
              </div>


            </div>
          </div>
          <div className="icons">
            <CartProvider>
              <Cart />
            </CartProvider>
            <div className="iconheart icon">
              <FontAwesomeIcon icon={faBell} color="black" />
            </div>
            <MyAccount />
          </div>
        </div>
        <hr />
      </nav>

    </div>
  );
};

export default Navbar;
