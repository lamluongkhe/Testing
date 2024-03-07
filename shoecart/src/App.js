// App.js
import { BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Shoe from "./pages/Shoe";
import { Container } from "react-bootstrap";
import { useState } from "react";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    }

    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
    }

    const decreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity -= 1;
        } else {
            // If quantity is 1, remove the item from the cart
            removeFromCart(index);
        }
        setCartItems(newCartItems);
    }

    return (
        <BrowserRouter>
            <Container style={{ position: 'relative', backgroundColor: '#F6C90E', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'white',scrollbarWidth: 'none', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', maxWidth: '20rem', maxHeight: '500px', overflow: 'auto', marginRight: '20px', flex: 1 }}>
                    <Shoe addToCart={addToCart} cartItems={cartItems} />
                </div>
                <div style={{ backgroundColor: 'white',scrollbarWidth: 'none', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', maxWidth: '20rem', maxHeight: '500px', overflow: 'auto', flex: 1 }}>
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
                </div>
            </Container>
        </BrowserRouter>
    );
}

export default App;
