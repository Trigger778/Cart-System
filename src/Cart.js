import Cartitem from './Cartitem';
import React from "react";
import Navbar from "./NavBar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Cart = (props) =>{

        const{products}=props;
    
        return(
            <div className='cart'> 
             {products.map((product) =>{
                 return <Cartitem product={product} 
                  key={product.id}  
                  increaseQuantity={props.increaseQuantity} 
                   decreaseQuantity={props.decreaseQuantity}
                   deleteProduct={props.deleteProduct}
                   />
             })}
            

            </div>
        );
    }


 export default Cart;
