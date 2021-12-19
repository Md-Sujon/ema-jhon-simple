import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;
    const removeProduct = props.removeProduct;
    console.log(props.product);

    
    return (
        <div className="reviewItem">
            <h1 className="product-name"><small>{name}</small></h1>
            <h5>Quantity: {quantity}</h5>
            <h3>Price: {price}</h3>

            <button 
            onClick={() => removeProduct(key)}
            className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;