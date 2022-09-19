import React from 'react';

import "./carGallery.css";
import CarPicture from "../imageFetch/CarPicture";


const CarGallery = (props) => {
    return (
        <>
            <div className="gallery__item">
                <a href="#" className="gallery__link">
                    <figure className="gallery__thumb">
                        <CarPicture img={props.img} className={"gallery__image"}/>
                        <figcaption className="gallery__caption">{props.brand} {props.model}</figcaption>
                    </figure>
                </a>
            </div>
        </>
    );
};

export default CarGallery;