import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart , setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            toast('You have already have this tShirt');
        }
        else{
            const newCart = [...cart , tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className="home-container">
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart} ></TShirt>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;