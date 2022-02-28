import React from "react";
import Cart from "./Cart";
import Navbar from "./NavBar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class  App extends React.Component {

  constructor(){
    super();
    this.state = { products: [] };
}

componentDidMount()
{
  const products=[];
  
    const events =  firebase.firestore().collection('products')
    events.get().then((querySnapshot) => {
       
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() })
        })
     })

     console.log(products);
     
    this.setState({
      products:products,
    });

  
    

}


increaseQuantity =(product)=>{

//console.log("Works Fine")

const{products}= this.state;


const index=products.indexOf(product);

products[index].qty+=1;

this.setState({
    products:products
})
}

decreaseQuantity =(product)=>{

//  console.log("Works Fine")

const{products}= this.state;


const index=products.indexOf(product);

if(products[index].qty!=0)
products[index].qty-=1;

this.setState({
    products :products
})
}
deleteProduct=(id) =>{

const{products} =this.state;

const items=products.filter((item) => item.id!=id);

this.setState({

    products:items,
});
}
getcount =() =>{
   const {products} =this.state;

     let count=0;
     products.forEach((product) =>{
          
         count+=product.qty;

     })
     return count;
}
getTotal =() =>{

  const{products} =this.state;
   
  let total=0;
  products.forEach((item) =>{
    
    // let qty=item.qty;
    // while(qty-->0)
    // {
    //  total+=item.price;
    // }
     
    total+= item.price*item.qty;
  })
  return total;
}
  render(){

    const{products} =this.state;
  return ( 
   <div className="App">
      <Navbar  count={this.getcount()} />
     <Cart
     products={products}
     increaseQuantity={this.increaseQuantity} 
     decreaseQuantity={this.decreaseQuantity}
     deleteProduct={this.deleteProduct}
     />
     <div style={{fontSize: 40, padding:10 ,background: 'yellow'}}>Total Price:{this.getTotal()}</div>
     
    </div>

    
  );
}
}
export default App;
