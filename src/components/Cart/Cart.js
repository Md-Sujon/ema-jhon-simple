import React from 'react';

const Cart = (props) => {
    const cart = props.card;
    console.log(props.card);

    // const total = cart.reduce((total, product) => total + product.price, 0)

   let total = 0;
   for(let i = total; i< cart.length; i++) {
       const product = cart[i];
       total = total+product.price;
   }


   let shipping = 0;
   if(total > 35){
       shipping = 0;
   }
   else if(total === 0){
    shipping = 0;
   }
   else if(total < 35){
       shipping = 4.99;
   }
   

     const vat = total/10;
     const taxVat = vat.toFixed(2);


    const  AllTotalMoney = total+shipping+vat;
    const AllTotal = AllTotalMoney.toFixed(2);


    return (
        <div>
            <h4>Order Summary</h4>
            <h4>Ordered Item: {cart.length}</h4>
            <small>Tax + vat: {taxVat}</small>
            <p>Shipping Cost: {shipping}</p>
            <p>Total Price: {total.toFixed(2)}</p>
            <h4>All Total Price: {AllTotal}</h4>
        </div>
    );
};

export default Cart;