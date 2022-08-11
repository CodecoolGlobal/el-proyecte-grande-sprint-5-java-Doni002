import React from 'react';
import { Card } from 'react-bootstrap';
import './CarCard.css';

function CarCard(props) {
    const imgSrc = props.imgSrc;
    const name = props.name;
    const rate = props.rate;
    const price = props.price;


    return (
        <Card className="category-glow-on-hover">
            <div>
                <Card.Img className="categoryCardImg" src={imgSrc}/>
            </div>
            <Card.Body className="categoryCardFooterContainer">
                <h1>{name}</h1>
                <div className="categoryCardMessageContainer">
                    {rate}
                    {price}
                </div>
            </Card.Body>
        </Card>
    );
}

export default CarCard;
