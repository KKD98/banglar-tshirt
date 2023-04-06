import React from 'react';
import './Cart.css'

const Cart = ({cart , handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
    message = <p>Please add some Products</p>
    }
    else{
        message = <div><h3>Borolox</h3>
        <p><small>Thanks for giving your money.</small></p></div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summery: {cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} 
                <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>3 ta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;

/*
* COMNDITIONAL RENDERING
* 1. Use if else to set a variable that will contain an element , components
* 2. ternary operator: condition ? 'for true' : 'false'
* 3. Logical &&: (if the condition is true then the next thing will be displayed)
* 4. Logical ||: (if the condition is false then the next thing will be displayed)
*/

/**
 * Conditional CSS Class
 * **/ 