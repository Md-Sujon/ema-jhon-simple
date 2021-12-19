import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name,quantity} = props.product;
    console.log(props.product);

    
    return (
        <div className="reviewItem">
            <h1 className="product-name"><small>{name}</small></h1>
            <h5>Quantity: {quantity}</h5>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;