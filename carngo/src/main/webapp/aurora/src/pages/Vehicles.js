import React from 'react';
import {Parallax} from "react-parallax";

import CountryRoad from "../components/img/vehicleRouteImg/countryroad.jpg"

import DisplayMap from "../components/mapComponent/DisplayMap";
import Navbar from "../components/header/Navbar";
import CarSlider from "../components/car/CarSlider";
import Footer from "../components/footer/Footer";


const Vehicles = () => {
    return (
        <>
            <Parallax bgImage={CountryRoad} strength={-350}>
                <Navbar />
                <DisplayMap />
            </Parallax>
            <CarSlider/>
            <Footer />
        </>
    );
};

export default Vehicles;