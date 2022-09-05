import React from 'react';
import { Card } from 'react-bootstrap';
import './CarCard.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function CarCard(props) {
    const imgSrc = props.imgSrc;
    const name = props.name;
    const rate = props.rate;
    const price = props.price;
    const id = props.id;

    const [img, setImg] = useState();

    const fetchImage = async () => {
        const response = await fetch(`http://localhost:8080/api/image/carProfile/${imgSrc}`);
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage().then();
    }, []);

    return (
        <Card className="car-glow-on-hover">
            <div>
                <Link to={"/vehicles/" + id}>
                    <Card.Img className="carCardImg" src={img}/>
                </Link>
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
