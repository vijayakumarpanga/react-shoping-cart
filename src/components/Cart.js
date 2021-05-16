import React ,{Component} from 'react'
import CartItem from './CartItem'

class Cart extends Component{

    
render(){
    const {products}=this.props
    console.log("inside cart"+this.props.products)
return (
    <div className="cart">
        {products.map((product)=>{
        return (
        <CartItem
         product={product}
         key={product.id}
         onIncreaseQuantity={this.props.onIncreaseQuantity}
         onDecreaseQuantity={this.props.onDecreaseQuantity}
         onDeleteItem={this.props.onDeleteItem}
        >

        </CartItem> )
    })
     }
       
    </div>
)
}
}
export default Cart