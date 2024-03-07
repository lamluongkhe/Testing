// Cart.js
import { Card, Button, Row, Col } from "react-bootstrap";

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }

    return (
        <div>
            <h2>Cart <span style={{ float: 'right' }}>Total Price: ${getTotalPrice()}</span></h2>
            {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center' }}>Your cart is empty</div>
            ) : (
                cartItems.map((item, index) => (
                    <Card key={index} style={{ width: '100%', marginBottom: '10px' }}>
                        <Card.Body>
                            <Row>
                                <Col xs={3}>
                                    <div style={{ width: '100px', height: '100px', backgroundColor: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                        <Card.Img variant="top" src={item.image} style={{ width: '150%', height: '150%', objectFit: 'cover', transform: 'rotate(-30deg)' }} />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>Price: ${item.price}</Card.Text>
                                </Col>
                                <Col xs={3}>
                                    <div>
                                        <Button variant="primary" onClick={() => decreaseQuantity(index)}>-</Button>
                                        <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                                        <Button variant="primary" onClick={() => increaseQuantity(index)}>+</Button>
                                    </div>
                                    <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    )
}

export default Cart;
