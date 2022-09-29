import React from 'react';
import { Card } from 'react-bootstrap';
import './CarCard.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GiCarSeat, GiGasPump, GiResize} from "react-icons/gi";
import DisplayMiniMap from "../mapComponent/DisplayMiniMap";

function CarCardHover(props) {
    const [img, setImg] = useState();
    const car = props.car;
    const fetchImage = async () => {
        const response = await fetch(`http://localhost:8080/api/image/carProfile/${props.car.imageSource}`);
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage().then();
    }, []);

    return (
        <Card className="car-glow-on-hover-zoom">
            <div className="car-zoom-image">
                <Link id="carImageLink" to={"/vehicles/" + car.id}>
                    <Card.Img className="carCardItemOnHover linkAnimation" src={img}/>
                </Link>
            </div>
            <Card.Body className="carCardBody">

                <div className="vTextContainerZoom">
                    <Link to={"/vehicles/" + car.id}>
                        <h1 className="linkAnimation2" style={{color:"white"}}>{car.brand + " " + car.model}</h1><br/>
                    </Link>
                    <div className={"vTextZoom descriptionLimit"}><strong>Description:</strong> {car.description}</div>
                    <div className="vFeaturesZoom borderFeature">
                        <div className={"vTextZoom vFeatureItem"}><GiGasPump /><strong> Fuel:</strong> {car.fuel}</div>
                        <div className={"vTextZoom vFeatureItem"}><GiCarSeat /><strong> Seats: </strong>{car.numOfSeats}</div>
                        <div className={"vTextZoom vFeatureItem"}><GiResize /><strong> Trunk: </strong>{car.trunkCapacity}l</div>
                    </div>
                    <div className=" vTextZoom carInfo">
                        <Link to={"/profile/" + car.host.user.id}>
                            <div className="vTextZoom" style={{fontSize:"large"}}><strong>Host:</strong></div>
                        </Link>
                        <Link to={"/profile/" + car.host.user.id}>
                            <div className="vTextZoom carInfo linkAnimation2" style={{fontSize:"large"}}>{car.host.user.name}</div>
                        </Link>
                    </div>

                </div>
            </Card.Body>
            <div className="miniMapContainer">
                <DisplayMiniMap cars={[car]} />
            </div>
        </Card>
    );
}

export default CarCardHover;
