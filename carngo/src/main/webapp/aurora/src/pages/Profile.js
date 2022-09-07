import React from 'react'
import {Parallax} from "react-parallax";

import '../components/profile/profileContainer.css';
import '../components/profile/carGallery.css';

import imgMustang from "../components/img/swiperImg/mustangSquare.jpg";
import imgExtreme from "../components/img/swiperImg/travis-essingerSquare.jpg";
import imgAudiWater from "../components/img/swiperImg/audiwaterSquare.jpg";
import imgTransport from "../components/img/swiperImg/mostafa-tarekSquare.jpg";
import imgBeast from "../components/img/swiperImg/beastSquare.jpg";
import cityRoad from "../components/img/profileImg/cityRoad.jpg";

import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import ProfileContainer from "../components/profile/profileContainer";
import HostReview from "../components/vehicle/HostReview";
import VehicleReviewSlider from "../components/vehicle/VehicleReviewSlider";
import DisplayMap from "../components/mapComponent/DisplayMap";


const Profile = () => {

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
            <div style={{backgroundColor: "#111111"}}>
                <Navbar />
            </div>
            <ProfileContainer />
            <Parallax bgImage={cityRoad} strength={500}>
                <DisplayMap />
            </Parallax>
            <HostReview image={imgMustang} reviews={ hostReviews}/>
            <VehicleReviewSlider reviews={ vehicleReviews}/>
            <Footer />
        </>
    )
}

export default Profile