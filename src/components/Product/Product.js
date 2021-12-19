import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props.product.key);
    const {name,price,category,img,stock,seller,key} = props.product;
    return (
        <div className="product-details">
            <div className="product-image">
            <img src={img} alt="" />
            </div>

            <div className="product-text">
           
            <h3 className="product-name"><Link to={"/"+key}>{name}</Link></h3>
            <p>By: {category}</p>
            <p>Seller: {seller}</p>
            <h3>${price}</h3>
            <p>Only {stock} left in stock -order soon</p>

            { props.showAddToCard === true && <button 
            onClick={() => props.handleAddProduct(props.product)}
             className="main-button btn btn-danger">
            <FontAwesomeIcon icon={faShoppingCart}/> add to card</button>}
            </div>
            
            
        </div>
    );
};

export default Product;