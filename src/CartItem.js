import React from 'react';

class CartItem  extends React.Component {

constructor(){

super();
this.state = {
  price: 222,
  title:'Mobile',
  qty: 1,
  img: ''

}

}

 increaseQuantity = () => {

// this.setState({
//   qty : this.state.qty + 1
// });

 this.setState((prevState) => {

   return {

      qty : prevState.qty + 1

   }

 });
 }
 
 decreaseQuantity = () => {

  const {qty} = this.state;

  if(qty == 0 ){
    return;
  }
  
   this.setState((prevState) => {
  
     return {
  
        qty : prevState.qty - 1
  
     }
  
   });
   }


render(){

  const {price,title,qty} = this.props.product;
  const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = this.props;

return(

<div className="cart-item">
 <div className="left-block">
   <img style = {styles.img}/>
 </div>
 <div className="right-block">
   <div style = {{fontSize:25}}>{title}</div>  
   <div style = {{color:'#777'}}>Rs {price}</div>  
<div style = {{color:'#777'}}>Qty:{qty}</div>  
   <div className="cart-item-actions">
     {/* Buttons */ }
     <img 
     alt="increase" 
     className="action-icons" 
     src="https://image.flaticon.com/icons/svg/992/992651.svg"
     onClick = {() => onIncreaseQuantity(product)}
     />
     <img 
     alt="decrease" 
     className="action-icons" 
     src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
     onClick = {() => onDecreaseQuantity(product)}
     />
     <img 
     alt="delete" 
     className="action-icons" 
     src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
     onClick = {() => onDeleteProduct(product.id)}
     />
    </div>  
 </div>
</div>
);

}

}

const styles = {

  img :{
    height:130,
    width:130,
    borderRadius:4,
    background : '#777'
  }


}

export default CartItem;