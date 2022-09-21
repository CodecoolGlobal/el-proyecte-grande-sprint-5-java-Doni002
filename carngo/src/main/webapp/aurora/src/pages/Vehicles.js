import React from 'react';
import {Parallax} from "react-parallax";

import CountryRoad from "../components/img/vehicleRouteImg/countryroad.jpg"

import DisplayMap from "../components/mapComponent/DisplayMap";
import Navbar from "../components/header/Navbar";
import CarSlider from "../components/car/CarSlider";
import Footer from "../components/footer/Footer";
import {useEffect, useState} from "react";


const Vehicles = () => {
    const [cars, setCars] = useState(undefined);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/vehicles`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setCars(actualData);
        }
        getData().catch((response)=>{console.log(response);});

    }, []);

    if(cars === undefined){
        return(
        <>
            <Parallax bgImage={CountryRoad} strength={-350}>
                <Navbar />
            </Parallax>
            <CarSlider/>
            <Footer />
        </>
        );
    }
    return (
        <>
            <Parallax bgImage={CountryRoad} strength={-350}>
                <Navbar />
                <DisplayMap cars={cars}/>
            </Parallax>
            <CarSlider/>
            <Footer />
        </>
    );

};

export default Vehicles;
