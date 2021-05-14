import React ,{Component} from 'react'

class CartItem extends Component{
    render(){
        return(
            <div className="cart-item">
                <div className="cart-item.left">
                <img style= {{borderColor : 'green',height :200,width:100,borderRadius:20,borderStyle:'solid'}}>
                </img>
                </div>
                <div classNmae="cart-item.right">
                <div>
                    Phone
                </div>
                <div>
                     Rs 10000
                </div>
                <div>
                     Qty : 1 
                </div>
                <div>
                  {//CartItem actions
                  }
                </div>
                </div>
            </div>
        )
    }
}
export default CartItem