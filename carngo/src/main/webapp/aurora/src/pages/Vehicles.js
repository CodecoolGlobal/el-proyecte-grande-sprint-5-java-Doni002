import React from 'react';
import DisplayMap from "../components/mapComponent/DisplayMap";
import Navbar from "../components/header/Navbar";
import {Parallax} from "react-parallax";
import CountryRoad from "../components/img/countryroad.jpg"
import Vehicle from "../components/vehicle/Vehicle";
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
            <Vehicle />
            <Footer />
        </>
    );
};

export default Vehicles;