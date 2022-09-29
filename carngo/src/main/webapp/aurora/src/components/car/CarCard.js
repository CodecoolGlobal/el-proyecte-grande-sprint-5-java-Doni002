import React from 'react';
import { Card } from 'react-bootstrap';
import './CarCard.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import defaultImage from "../img/defaultProfile.jpg";


function CarCard(props) {
    const car = props.car;
    const [img, setImg] = useState();
    const fetchImage = async () => {
        const response = await fetch(`http://localhost:8080/api/image/carProfile/${car.imageSource}`);
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
                <Link to={"/vehicles/" + car.id}>
                    <Card.Img className="carCardImg" src={img}/>
                </Link>
            </div>
            <Card.Body className="carCardFooterContainer">
                <h3 style={{gridArea:"header"}}>{car.brand} {car.model}</h3>
                <div className="carCardRatingContainer">
                    Rating: {car.numOfSeats}/5
                </div>
                <div className="carCardPriceContainer">
                    Price: {car.pricePerDay}$ / day
                </div>
            </Card.Body>
        </Card>
    );
}

export default CarCard;
