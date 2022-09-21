import React from 'react';

import "./carGallery.css";
import CarPicture from "../imageFetch/CarPicture";
import {Link} from "react-router-dom";


const CarGallery = (props) => {
    return (
        <>
            <div className="gallery__item">
                <figure className="gallery__thumb">
                    <Link to={"/vehicles/" + props.carId} className="gallery__link">
                        <CarPicture img={props.img} className={"gallery__image"}/>
                    </Link>
                    <figcaption className="gallery__caption">{props.brand} {props.model}</figcaption>
                </figure>
            </div>
        </>
    );
};

export default CarGallery;