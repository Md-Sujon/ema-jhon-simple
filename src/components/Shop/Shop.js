import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';


const Shop = () => {
   console.log(fakeData);

   const firstTenProduct =fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTenProduct)
  
    return (
        <div>
            <h1>This is Shop : {products.length}</h1>
            <ul>
                {
                   products.map((product) =><li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;