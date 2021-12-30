import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header" >
            <img src={logo} alt="" />
          
           <nav className="nav">
           <div className="navbar1">
                <a href="shop">Shop</a>
                 <a href="review">Order</a>
                 <a href="inventory">Inventory-mange</a>
                 <a href="login">Log In</a>
                 </div>
                </nav>
           
        </div>
    );
};

export default Header;