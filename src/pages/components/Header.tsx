import React from "react";
import "../components_styles/header.scss"; // Assuming you will create a CSS file for styling

const Header: React.FC = () => {

const ICON_LOGO: string = '/images/icons/logo_45x2.png'
const ICON_CART: string = '/images/icons/cart_icon.svg'
const ICON_LOGIN: string = '/images/icons/login.svg'
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <a className="links" href="#shop">Shop</a>
          </li>
          <li>
            <a className="links" href="#about_us">About Us</a>
          </li>
          <li>
            <a className="links" href="#contact_us">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="logo_header">
        <h3 className="logo_header_text">Crafted</h3>
        <img src={ICON_LOGO} alt="Shop Logo" />
        <h3 className="logo_header_text">Treasures</h3>
      </div>
      <div className="entrance_mode"> 
      <div className="cart_header">
        <button>
          <img src={ICON_CART} alt="Cart shop" />
          <div className="quantity_cart">
            {
              1
            }
          </div>
        </button>
      </div>
        <button className="login" aria-label="login">
          <img src={ICON_LOGIN} alt="login" />
          Login
        </button>
  
      </div>
    
    </header>
  );
};

export default Header;
