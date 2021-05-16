import React,{ Component } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './css/cart-item.css'
import firebase from 'firebase'
import firestore from 'firebase'
class App extends Component {
  constructor(){
    super()
    this.state = {
        products : [],
        loading : true
         }
}
handleIncreaseQuantity=(product)=>{
    console.log("inside handleIncreaseQuantity")
    //const {products}=this.state
    //const index= products.indexOf(product);
   // products[index].qty += 1
   // this.setState({products: products})
    console.log(product.id)
    const prodRef = firebase.firestore().collection('Products').doc(product.id)
    prodRef.update({
      qty : product.qty+1
    })
    .then(()=>{
        console.lo("updated succesfully")
        
    })
    .catch((error)=>{
      console.log(error)
    })
}
handleDecreaseQuantity=(product)=>{
    // const {products}=this.state
    // const index= products.indexOf(product);
    // if(products[index].qty==0){
    //     return
    // }
    // products[index].qty -= 1
    // this.setState({products: products})
    // console.log(product.id)
    const prodRef = firebase.firestore().collection('Products').doc(product.id)
    prodRef.update({
      qty : product.qty-1
    })
    .then(()=>{
        console.lo("updated succesfully")
        
    })
    .catch((error)=>{
      console.log(error)
    })
}
handleDeleteItem=(product)=>{
  //   console.log("Inside delete product")
  //   const {products}=this.state
    
  //   //const index= products.indexOf(product);
 
  //   //products.slice(index,1)
  //  // console.log(products)
  //  const items = products.filter(item=>item.id !== product.id)
  //  //const items = products.filter(item=>{if(item.id !== product.id)return item})
  //   this.setState({products: items})
  //   console.log(products)
  const prodRef = firebase.firestore().collection('Products').doc(product.id)
    prodRef.delete()
    .then(()=>{
        console.lo("updated succesfully")
        
    })
    .catch((error)=>{
      console.log(error)
    })

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
componentDidMount(){
  firebase
  .firestore()
  .collection('Products')
  .onSnapshot((snapshot)=>{
    console.log(snapshot)
    snapshot.docs.map((doc)=>{
      console.log(doc.data())
    })
    const products= snapshot.docs.map((doc)=>{
      const data = doc.data()
            data.id=doc.id
      return data
    })
    this.setState({
      products,
      loading : false
    });
  })
  
  // firebase
  // .firestore
  // .collection('products')
  // .get
  // .then((snapshot)=>{
  //   console.log(snapshot)
  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data())
  //   })
  //   const products= snapshot.docs.map((doc)=>{
   //       const data = doc.data()
    //      data[id]=doc.id
  //     return data
  //   })
  //   this.setState({
  //     products,
  //     loading : flase
  //   });
  // })
}
addProduct(){
  firebase
  .firestore()
  .collection('products')
  .add(
    {
      img :'',
      price : '999',
      qty : '4',
      title : 'washing machine'
    })
    .then((docref)=>{
      console.log(docref)
    })
    .catch((error)=>
    {
      console.log(error)
    })
}
  render(){
    const {products,loading}=this.state
  return (
    <div className="App">
      <Navbar count={this.getProductCount()}></Navbar>
      
     <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteItem={this.handleDeleteItem}>
      </Cart>
      {loading && <h1>Loading Products</h1>}
      <div style={{fontSize:'20px',padding:'20px'}}>Total : {this.getTotalPrice()}</div>
    
    </div>
  )
  }
}
export default App;
