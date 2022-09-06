import "../components/vehicle/vehicleDetail.css";
import {useParams} from "react-router-dom";
import VehicleSlider from "../components/vehicle/VehicleSlider";
import VehicleFeatures from "../components/vehicle/VehicleFeatures";
import HostReview from "../components/vehicle/HostReview";
import VehicleReviewSlider from "../components/vehicle/VehicleReviewSlider";
import Footer from "../components/footer/Footer";
import {Parallax} from "react-parallax";
import Navbar from "../components/header/Navbar";
import imgAbstract from "../components/img/car-back-lights.jpg"
import CalendarArticle from "../components/vehicle/CalendarArticle"
import {useEffect, useState} from "react";


const VehicleDetail = () => {
    const {id} = useParams();

    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
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
                setError(null);
            } catch(err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData().then();
    }, [error]);

    if(data === undefined){
        return(<div></div>)
    }
    return (
        <>
            <Parallax bgImage={imgAbstract} strength={100}>
                <Navbar />
            </Parallax>
            <VehicleSlider carData={data}/>
            <div className="vehicleContainer">
                <VehicleFeatures data={data} />
                <CalendarArticle />
            </div>
            <HostReview data={data}/>
            <VehicleReviewSlider carData={data}/>
            <Footer />
        </>
    );
};

export default VehicleDetail;