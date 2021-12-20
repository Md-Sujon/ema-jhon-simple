import React, { useEffect, useState } from 'react';
import {removeFromDb, getStoredCart, clearTheCart} from '../../src/utilities/fakedb'
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import fakeData from '../fakeData';
import happyimage from '../images/thank-you-big-thanks.gif'


const Review = () => {
const [carts,setCards] = useState([]);
const [orderPlace,setOrderPlace] = useState(false);


const handleOrderPlaces = () =>{
    setCards([]);
    setOrderPlace(true);
    clearTheCart();
}

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

let thankYou;
if(orderPlace){
   thankYou = <img style={{ height:'500px', width:'1000px'}} src={happyimage}></img>
}

    return (
        <div className="twin-container">
           <div className="product-container">
          
            {
                carts.map(pd=> <ReviewItem 
                    product={pd}
                     key={pd.key}
                     removeProduct={removeProduct}
                     ></ReviewItem>)
            }
            {
                thankYou
            }
           </div>
           <div className="card-container">
           <Cart card={carts}>
               <button onClick={handleOrderPlaces} className="main-button">Place Order</button>
           </Cart>
           </div>
        </div>
    );
};

export default Review;