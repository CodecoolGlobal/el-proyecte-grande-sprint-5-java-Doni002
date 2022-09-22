import React from 'react'
import {Parallax} from "react-parallax";

import '../components/profile/profileContainer.css';
import '../components/profile/carGallery.css';

import cityRoad from "../components/img/profileImg/cityRoad-small.jpg";

import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import ProfileContainer from "../components/profile/profileContainer";
import HostReview from "../components/vehicle/vehicleProfile/HostReview";
import DisplayMap from "../components/mapComponent/DisplayMap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import GoToTop from "../utility/GoToTop";


const Profile = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/vehicles/user-id/${id}`
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

    if(data[0] !== undefined){
        return (
            <>
                <div style={{backgroundColor: "#111111"}}>
                    <Navbar />
                </div>
                <ProfileContainer cars={data} userId={id}/>
                <Parallax bgImage={cityRoad} strength={500}>
                    <DisplayMap cars={data}/>
                </Parallax>
                <HostReview data={data[0]}/>
                <Footer />
                <GoToTop/>
            </>
        )
    }
    return(<>
        <div style={{backgroundColor: "#111111"}}>
            <Navbar />
        </div>
        <ProfileContainer cars={data} userId={id}/>
        <Footer />
        <GoToTop/>
    </>)
}

export default Profile
