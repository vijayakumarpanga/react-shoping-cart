import React ,{Component} from 'react'
import CartItem from './CartItem'

class Cart extends Component{
render(){
return (
    <div>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
    </div>
)
}
}
export default Cart