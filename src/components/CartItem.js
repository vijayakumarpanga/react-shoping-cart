import React ,{Component} from 'react'
import '../css/cart-item.css'
class CartItem extends Component{
    
    render(){
        const {img,title,price,qty}=this.props.product
        return(
            <div className="cart-item">
                <div className="left">
                <img  src={img}  style= {{borderColor : 'green',height :120,width:120,borderRadius:4,borderStyle:'solid'}}>
                </img>
                </div>
                <div className="right">
                <div style={{fontSize: 20,color:'gray'}}>
                    {title}
                </div>
                <div  style={{fontSize: 20,color:'gray'}}>
                     Rs {price}
                </div>
                <div  style={{fontSize: 20,color:'gray'}}>
                     Qty : {qty}
                </div>
                <div className="actions">
                <img onClick={()=>this.props.onIncreaseQuantity(this.props.product)}   style={{height : 43,width:45}} alt="Increase" src="https://t3.ftcdn.net/jpg/02/51/03/82/240_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg"></img>
                <img  onClick={()=>this.props.onDecreaseQuantity(this.props.product)} className = "" style={{height : 43,width:45}} alt="Decrease" src="https://t4.ftcdn.net/jpg/02/78/84/57/240_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg"></img>
                <img onClick={()=>this.props.onDeleteItem(this.props.product)}  className = "cart-item.icons" style={{height : 38,width:35}} alt="Delete" src="https://t4.ftcdn.net/jpg/03/73/50/09/240_F_373500918_7vISJB85YXvvu7SgnpktP752LWRrLzyI.jpg"></img>

                  {//CartItem actions
                  }
                </div>
                </div>
            </div>
        )
    }
}
export default CartItem