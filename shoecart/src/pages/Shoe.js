// Shoe.js
import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";

const Shoe = ({ addToCart, cartItems }) => {
    const [shoes, setShoes] = useState(null);

    const loadShoes = async () => {
        let res = await fetch("https://demo-production-d5be.up.railway.app/shoe");
        let data = await res.json();
        setShoes(data);
    }

    useEffect(() => {
        loadShoes();
    }, [])

    return (
        <div>
            {shoes === null ? <Spinner animation="grow" /> : (
                <div>
                    {shoes.map((s, index) => (
                        <Row xs={1} md={2} className="g-4" key={index}>
                            <Col>
                                <Card style={{ width: '18rem', height: '100%' }} key={s.id}>
                                    <div style={{ backgroundColor: s.color, backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '250px' }}></div>
                                    <Card.Body>
                                        <Card.Title>{s.name}</Card.Title>
                                        <Card.Text>{s.description}</Card.Text>
                                        <Row>
                                            <Col xs={6}>
                                                <Card.Text>Price: ${s.price}</Card.Text>
                                            </Col>
                                            <Col xs={6} className="text-end">
                                                <Button variant={cartItems.some(item => item.id === s.id) ? "success" : "primary"} onClick={() => addToCart(s)} disabled={cartItems.some(item => item.id === s.id)}>Add to Cart</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Shoe;
