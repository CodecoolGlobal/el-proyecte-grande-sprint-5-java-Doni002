import React from 'react';
import DisplayMap from "../components/mapComponent/DisplayMap";
import Navbar from "../components/header/Navbar";
import {Parallax} from "react-parallax";
import CountryRoad from "../components/img/countryroad.jpg"
import ToggleArticle from "../components/toggleArticle/ToggleArticle";
import CarSlider from "../components/car/CarSlider";

const Vehicles = () => {
    return (
        <>
            <Parallax bgImage={CountryRoad} strength={-350}>
                <Navbar />
                <div>
                    <DisplayMap/>
                    <CarSlider/>
                </div>
            </Parallax>



            <ToggleArticle />
        </>
    );
};

export default Vehicles;