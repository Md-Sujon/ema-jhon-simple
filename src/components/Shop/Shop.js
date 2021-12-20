import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { Link } from 'react-router-dom';

const Shop = () => {
  const firstTenProduct = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTenProduct);
  const [card, setCard] = useState([]);
       useEffect(()=>{
         const saveCart = getStoredCart();
         const productKey = Object.keys(saveCart);
         const previousCart = productKey.map(pdKey => {
           const product = fakeData.find(pd => pd.key === pdKey);
           product.quantity = saveCart[pdKey]
           return product;
         })
         setCard(previousCart);

       },[])


  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = card.find(pd => pd.key === toBeAddedKey)
    let count = 1;
    let newCard;
    if(sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = card.filter(pd => pd.key !== toBeAddedKey)
      newCard = [...others, sameProduct]
    }
    else{
      product.quantity = 1;
      newCard = [...card, product]
    }
    setCard(newCard);
    addToDb(product.key, count)
  };

  return (
    <div className="twin-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
             showAddToCard={true}
            handleAddProduct={handleAddProduct}
            product={product}
            key={product.key}
          ></Product>
        ))}
      </div>

      <div className="card-container">
        <Cart card={card}>
        <Link to={"/review"}>
        <button className="main-button">Order Review</button>
        </Link>
        </Cart>
          
      </div>
   
      {/* <div className="extra-container">
          <h1>this is a Extra container. </h1>
      </div> */}
    </div>
  );
};

export default Shop;
