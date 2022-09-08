import React from 'react';
import {Parallax} from "react-parallax";

import palmRoad from '../img/profileImg/palmRoad.jpg'

import ProfileCard from "./ProfileCard";
import CarGallery from "./CarGallery";
import {useEffect, useState} from "react";


const ProfileContainer = (props) => {
    const userId = props.userId;
    const cars = props.cars;
    const [userData, setUserData] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/users/${userId}`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setUserData(actualData);
        }
        getData().catch(reason => {console.log(reason)});
    }, [props.userId]);
    return (
        <div className="pageContainer">
            <Parallax bgImage={palmRoad} strength={-400}>
            <section className="profileContainer">
                <div className="profileLeftCol">
                    <div className="driverProfileDetails">
                        <div className="driverStats">
                            <ProfileCard userData={userData}/>
                        </div>
                    </div>
                </div>
            </section>
            </Parallax>
            <section className="driverProfileSection">
                <div className="driverVehicles">
                    <div className="gallery">
                        {
                            cars.map(item => {
                                console.log(item.imageSource);
                                return(
                                    <CarGallery img={item.imageSource}/>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileContainer;