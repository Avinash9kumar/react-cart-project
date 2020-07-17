import React from 'react';
import CardItem from './CartItem'

class Cart  extends React.Component {

    constructor(){

        super();
        this.state = {
            products : [

               {
                   price: 10,
                   title:'Mobile',
                   qty: 1,
                   img: '',
                   id :1
               }, 
               {
                  price: 20,
                  title:'Watch',
                  qty: 2,
                  img: '',
                  id :2
               }, 
               {
                  price: 30,
                  title:'Laptop',
                  qty: 3,
                  img: '',
                  id :3
               },   
            
            
            ]
        
        }
        
        }

render(){

    const {products} = this.state

   return(

    <div className="cart">

     {products.map((product) => {

        return(

            <CardItem 
            product = {product}
            key = {product.id}
            />

        );

     })}
   

    </div>

   );

}


}


export default Cart;