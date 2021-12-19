import React, { useEffect, useState } from 'react';
import {getStoredCart} from '../../src/utilities/fakedb'
import ReviewItem from '../components/ReviewItem/ReviewItem';
import fakeData from '../fakeData';


const Review = () => {
const [carts,setCards] = useState([]);

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
        <div>
           
            {
                carts.map(pd=> <ReviewItem product={pd} key={pd.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;