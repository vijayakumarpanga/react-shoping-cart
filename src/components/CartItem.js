import React ,{Component} from 'react'

class CartItem extends Component{
    constructor(){
        super()
        this.state = {
            id     : 1,
            title : 'Phone',
            price  : 999,
            qty    : 1
        }
    }
    increaseQuantity=()=>{
        this.setState((prevState)=>{
           return  {qty : prevState.qty+1}
        })
    }
    decreaseQuantity=()=>{
        const {qty} = this.state
        if(qty==0){
            return
        }
        this.setState((prevState)=>{
            return  {qty : prevState.qty-1}
         })
    }
    DeleteItem=()=>{
        
    }
    render(){
        const {title,price,qty}=this.state
        return(
            <div className="cart-item">
                <div className="left">
                <img   style= {{borderColor : 'green',height :120,width:120,borderRadius:4,borderStyle:'solid'}}>
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
                <img onClick={this.increaseQuantity}   style={{height : 43,width:45}} alt="Increase" src="https://t3.ftcdn.net/jpg/02/51/03/82/240_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg"></img>
                    <img  onClick={this.decreaseQuantity} className = "" style={{height : 43,width:45}} alt="Decrease" src="https://t4.ftcdn.net/jpg/02/78/84/57/240_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg"></img>
                    <img onClick={this.DeleteItem}  className = "" style={{height : 38,width:35}} alt="Delete" src="https://t4.ftcdn.net/jpg/03/73/50/09/240_F_373500918_7vISJB85YXvvu7SgnpktP752LWRrLzyI.jpg"></img>

                  {//CartItem actions
                  }
                </div>
                </div>
            </div>
        )
    }
}
export default CartItem