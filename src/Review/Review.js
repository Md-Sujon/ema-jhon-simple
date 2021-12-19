import React, { useEffect, useState } from 'react';
import {removeFromDb, getStoredCart} from '../../src/utilities/fakedb'
import Cart from '../components/Cart/Cart';

import ReviewItem from '../components/ReviewItem/ReviewItem';
import fakeData from '../fakeData';


const Review = () => {
const [carts,setCards] = useState([]);

const removeProduct = (productKey) => {
    console.log('Remove Click',productKey);
    const removeItem = carts.filter(pd => pd.key !== productKey);
    setCards(removeItem)
    removeFromDb(productKey)
}

useEffect(() => {
       const saveCart = getStoredCart();
       const productKey = Object.keys(saveCart);

       const cartProducts = productKey.map(key => {
           const product = fakeData.find(data => data.key === key);
           product.quantity = saveCart[key]
           return product;
       })
       setCards(cartProducts);

       console.log(cartProducts);
},[])
    return (
        <div className="twin-container">
           <div className="product-container">
           <h2>{carts.length}</h2>
            {
                carts.map(pd=> <ReviewItem 
                    product={pd}
                     key={pd.key}
                     removeProduct={removeProduct}
                     ></ReviewItem>)
            }
           </div>
           <div className="card-container">
           <Cart card={carts}></Cart>
           </div>
        </div>
    );
};

export default Review;