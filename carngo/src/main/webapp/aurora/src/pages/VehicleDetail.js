import "../components/vehicle/vehicleProfile/vehicleDetail.css";
import {useParams} from "react-router-dom";

import VehicleSlider from "../components/vehicle/vehicleProfile/VehicleSlider";
import VehicleFeatures from "../components/vehicle/vehicleProfile/VehicleFeatures";
import HostReview from "../components/vehicle/vehicleProfile/HostReview";
import VehicleReviewSlider from "../components/vehicle/vehicleProfile/VehicleReviewSlider";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import CalendarArticle from "../components/vehicle/vehicleProfile/CalendarArticle"
import {useEffect, useState} from "react";
import React from "react";


const VehicleDetail = () => {
    const {id} = useParams();

    const [data, setData] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/vehicles/${id}`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setData(actualData);
        }
        getData().catch(reason => {console.log(reason)});
    }, [id]);

    if(data === undefined){
        return(<div></div>)
    }
    return (
        <>
            <div style={{backgroundColor: "#111111"}}>
                <Navbar />
            </div>
            <VehicleSlider carData={data}/>
            <div className="vehicleContainer">
                <VehicleFeatures data={data} />
                <CalendarArticle data={data}/>
            </div>
            <HostReview data={data}/>
            <VehicleReviewSlider carData={data}/>
            <Footer />
        </>
    );
};

export default VehicleDetail;
