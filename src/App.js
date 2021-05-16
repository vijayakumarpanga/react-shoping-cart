import React,{ Component } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './css/cart-item.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
        products :
        [
        {
            id     : 1,
            title  : 'Phone',
            price  : 999,
            qty    : 1
            },
        {
            id     : 2,
            title : 'Fridge',
            price  : 999,
            qty    : 1
            },
       {
            id     : 3,
            title : 'Watch',
            price  : 999,
            qty    : 1
            }]
         }
}
handleIncreaseQuantity=(product)=>{
    console.log("inside handleIncreaseQuantity")
    const {products}=this.state
    const index= products.indexOf(product);
    products[index].qty += 1
    this.setState({products: products})
}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state
    const index= products.indexOf(product);
    if(products[index].qty==0){
        return
    }
    products[index].qty -= 1
    this.setState({products: products})
   
}
handleDeleteItem=(product)=>{
    console.log("Inside delete product")
    const {products}=this.state
    
    //const index= products.indexOf(product);
 
    //products.slice(index,1)
   // console.log(products)
   const items = products.filter(item=>item.id !== product.id)
   //const items = products.filter(item=>{if(item.id !== product.id)return item})
    this.setState({products: items})
    console.log(products)
}
getProductCount=()=>{
  const {products}=this.state
  let count =0
  products.forEach(product => {
    count += product.qty
  })
  return count;
}
getTotalPrice=()=>{
  const {products}=this.state
  let totalPrice =0
  products.forEach(product => {
    totalPrice += (product.qty*product.price)
  })
  return totalPrice;
}
  render(){
    const {products}=this.state
  return (
    <div className="App">
      <Navbar count={this.getProductCount()}></Navbar>
      
     <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteItem={this.handleDeleteItem}>
      </Cart>
      <div style={{fontSize:'20px',padding:'20px'}}>Total : {this.getTotalPrice()}</div>
    
    </div>
  )
  }
}
export default App;
