import React from 'react';
import DisplayMap from "../components/mapComponent/DisplayMap";
import Navbar from "../components/header/Navbar";
import {Parallax} from "react-parallax";
import CountryRoad from "../components/img/countryroad.jpg"
import CarSlider from "../components/car/CarSlider";
import CategorySlider from "../components/category/CategorySlider";
import Footer from "../components/footer/Footer";

const Vehicles = () => {
    return (
        <>
            <Parallax bgImage={CountryRoad} strength={-350}>
                <Navbar />
                <DisplayMap/>
            </Parallax>
            <CarSlider/>
            <CategorySlider />
            <Footer />
        </>
    );
};

export default Vehicles;