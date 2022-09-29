import React, {useEffect} from 'react';

import CarCard from './CarCard';
import {useState} from "react";
import CarCardHover from "./CarCardHover";


function CarGrid(props) {
    const cars = props.cars;

    const [hoveredCar, setHoveredCar] = useState(-1);

    const showCarHandler=(i)=>{
        setHoveredCar(i);
    }

    const hideCarHandler=()=>{
        setHoveredCar(-1);
    }

    const renderCarModal= (item) =>{
        return(
            <>

                <CarCardHover  car={item} key={item.id + 3}/>
            </>
        );
    }

    return (
        <>
        <h1 className="categorySliderTitle">Top Rated Cars</h1>
        <div className="carGridContainer">


                {cars.map((item, i)=>{
                    return(
                        <div key={item.id + 1} onMouseLeave={hideCarHandler} onMouseOver={()=>showCarHandler(i)} >
                            <CarCard car={item} key={item.id + 2}/>
                            {hoveredCar === i && renderCarModal(item)}
                        </div>
                    )
                })}
        </div>
        </>
    );
}

export default CarGrid;