import "../components/vehicle/vehicleDetail.css";
import {Parallax} from "react-parallax";
import {useParams} from "react-router-dom";

import imgOldTimer from "../components/img/swiperImg/oldtimerSquare.jpg";
import imgExtreme from "../components/img/swiperImg/travis-essingerSquare.jpg";
import imgMustang from "../components/img/swiperImg/mustangSquare.jpg";
import imgBeast from "../components/img/swiperImg/beastSquare.jpg";
import imgAudiWater from "../components/img/swiperImg/audiwaterSquare.jpg";
import imgAudiRs from "../components/img/swiperImg/Audi-RSSquare.jpg";
import imgTransport from "../components/img/swiperImg/mostafa-tarekSquare.jpg";
import imgAbstract from "../components/img/otherImg/car-back-lights.jpg"

import VehicleSlider from "../components/vehicle/VehicleSlider";
import VehicleFeatures from "../components/vehicle/VehicleFeatures";
import HostReview from "../components/vehicle/HostReview";
import VehicleReviewSlider from "../components/vehicle/VehicleReviewSlider";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
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

    const images = [
        {
            imgSrc: imgOldTimer,
        },
        {
            imgSrc: imgExtreme,
        },
        {
            imgSrc: imgMustang,
        },
        {
            imgSrc: imgBeast,
        },
        {
            imgSrc: imgAudiWater,
        },
        {
            imgSrc: imgAudiRs,
        },
        {
            imgSrc: imgTransport,
        }
    ]
    const hostReviews = [
        {name: "David",
        review: "Good car and host."},
        {name: "Tracey",
            review: "Precise desciption."},
        {name: "Joey",
            review: "Had fun."},
        {name: "Bud",
            review: "Didn't meet my expectations."}
    ]
    const vehicleReviews = [
        {name: "Claire",
        image: imgExtreme,
        review: "Good car and host.",
        experience: 4,
        condition:5,
        consumption:5},
        {name: "Brandon",
            image: imgAudiWater,
        review: "Precise desciption.",
        experience: 4,
        condition:5,
        consumption:5},
        {name: "Lucy",
            image: imgTransport,
        review: "Had fun.",
        experience: 4,
        condition:5,
        consumption:5},
        {name: "George",
            image: imgBeast,
        review: "Didn't meet my expectations.",
        experience: 4,
        condition:5,
        consumption:5}
    ]
    return (
        <>
            <Parallax bgImage={imgAbstract} strength={100}>
                <Navbar />
            </Parallax>
            <VehicleSlider images={ images}/>
            <div className="vehicleContainer">
                <VehicleFeatures data={data} />
                <CalendarArticle />
            </div>
            <HostReview data={data}/>
            <VehicleReviewSlider reviews={ vehicleReviews}/>
            <Footer />
        </>
    );
};

export default VehicleDetail;