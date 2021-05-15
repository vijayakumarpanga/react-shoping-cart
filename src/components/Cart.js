import React ,{Component} from 'react'
import CartItem from './CartItem'

class Cart extends Component{
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
       const items = products.filter(item=>{if(item.id !== product.id)return item})
        this.setState({products: items})
        console.log(products)
    }
    
render(){
    const{products}=this.state
return (
    <div className="cart">
        {products.map((product)=>{
        return (
        <CartItem
         product={product}
         key={product.id}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteItem={this.handleDeleteItem}
        >

        </CartItem> )
    })
     }
       
    </div>
)
}
}
export default Cart