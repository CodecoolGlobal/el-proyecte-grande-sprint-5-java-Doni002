import React from 'react';

import "./carGallery.css";


const CarGallery = (props) => {
    return (
        <div className="gallery__column">
            {props.collection.map(item=>{
                return(
                    <div className="gallery__column">
                        <a href="#" className="gallery__link">
                                <figure className="gallery__thumb">
                                        <img src={item.imgSrc} alt={item.alt} className="gallery__image"/>
                                        <figcaption className="gallery__caption">{item.alt}
                                        </figcaption>
                                </figure>
                        </a>
                    </div>
                )
            })}
        </div>
    );
};

export default CarGallery;