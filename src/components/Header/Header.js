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
                 <a href="order">Order</a>
                 <a href="inventory-mange">Inventory-mange</a>
                 </div>
                </nav>
           
        </div>
    );
};

export default Header;