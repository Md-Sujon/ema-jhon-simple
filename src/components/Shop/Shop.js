import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";

const Shop = () => {
  const firstTenProduct = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTenProduct);
  const [card, setCard] = useState([]);

  const handleAddProduct = (product) => {
    const newCard = [...card, product];
    setCard(newCard);
    addToDb(product.key, 1)
  };

  return (
    <div className="shop-container">
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
        <Cart card={card}></Cart>
          
      </div>
   
      {/* <div className="extra-container">
          <h1>this is a Extra container. </h1>
      </div> */}
    </div>
  );
};

export default Shop;
