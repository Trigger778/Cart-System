import React from 'react';

const CartItem= (props) =>{
    console.log('props',props);

     const{title,price,qty,img}=props.product;
     return (
       <div className='cart-item'>
           <div className='left-block'>
               <img style={styles.image} src={props.product.img}/>
           </div>
           <div className='right-block'>
               <div style={{fontSize:25}}>{title}</div>
               <div style={{fontSize:25}}>Rs {price} </div>
               <div style={{fontSize:25}}>Qty :{qty}</div>
               <div className='cart-item-action'>
                   {/*Button*/}
                   <img 
                    alt="Increase"
                    className='action-icons'
                     src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                     onClick={() => props.increaseQuantity(props.product)}
                     />
                   <img
                    alt="Decrease" 
                    className='action-icons' 
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    onClick={() => props.decreaseQuantity(props.product)}
                    />
                    <img 
                   alt="Delete"
                    className='action-icons' 
                    src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"
                    onClick={() => props.deleteProduct(props.product.id)}
                    />
               </div>
           </div>
            </div>
     );
}
 const styles={
     image:{
         height:130,
         width:130,
         background:'#ccc',
         borderRadius:4
     }
 }

 export default CartItem;
