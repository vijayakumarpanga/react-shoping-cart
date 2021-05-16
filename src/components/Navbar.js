import React from 'react'
const Navbar=(props)=>{
    return(
        <div style={styles.nav}>
            <div style ={styles.cartIconContainer}>
            <img  style={styles.cartIcon}alt="cart" src="https://t4.ftcdn.net/jpg/00/97/00/05/240_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg"></img>
            <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}
const styles ={
    cartIcon :{
        height : 32,
        marginRight: 20
    },
    nav : {
        height : 110,
        display : 'flex',
        justifyContent :'flex-end',
        background: 'blue',
        alignItems:'Centre'
    },
    cartIconContainer:{
        position : 'relative'
    },
    cartCount :{
            padding : '4px 8px',
            position : 'absolute',
            right : 0,
            top : -9,
            borderRadius : '50%',
            background: 'Yellow'
        }
    }


export default Navbar