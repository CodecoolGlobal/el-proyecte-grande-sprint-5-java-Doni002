import React from 'react';
import { Card } from 'react-bootstrap';
import './CarCard.css';

function CarCard(props) {
    const imgSrc = props.imgSrc;
    const name = props.name;
    const rate = props.rate;
    const price = props.price;


    return (
        <Card className="car-glow-on-hover">
            <div>
                <Card.Img className="carCardImg" src={imgSrc}/>
            </div>
            <Card.Body className="carCardFooterContainer">
                <h3 style={{gridArea:"header"}}>{name}</h3>
                <div className="carCardRatingContainer">
                    Rating: {rate}/5
                </div>
                <div className="carCardPriceContainer">
                    Price: {price}$ / day
                </div>
            </Card.Body>
        </Card>
    );
}

export default CarCard;
