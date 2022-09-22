import React from 'react';
import {Parallax} from "react-parallax";

import CountryRoad from "../components/img/vehicleRouteImg/countryroad.jpg"

import DisplayMap from "../components/mapComponent/DisplayMap";
import Navbar from "../components/header/Navbar";
import CarSlider from "../components/car/CarSlider";
import Footer from "../components/footer/Footer";
import {useEffect, useState} from "react";
import HostSlider from "../components/hosts/HostSlider";


const Vehicles = () => {
    const [cars, setCars] = useState(undefined);
    const [hosts, setHosts] = useState(undefined);
    useEffect(() => {
        const getCarData = async () => {
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
        const getHostData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/hosts`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setHosts(actualData);
        }
        getCarData().catch(reason=>{console.log(reason);});
        getHostData().catch(reason=>{console.log(reason);});

    }, [cars, hosts]);

    if(cars === undefined || hosts === undefined){
        return(
        <>
            <Parallax bgImage={CountryRoad} strength={-350}>
                <Navbar />
            </Parallax>
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
            <CarSlider cars={cars}/>
            <HostSlider hosts={hosts}/>
            <Footer />
        </>
    );

};

export default Vehicles;
