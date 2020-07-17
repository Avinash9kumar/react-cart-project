import React from 'react';
import CardItem from './CartItem'

class Cart  extends React.Component {

render(){

   return(

    <div className="cart">

    <CardItem/>
    <CardItem/>
    <CardItem/>

    </div>

   );

}


}


export default Cart;