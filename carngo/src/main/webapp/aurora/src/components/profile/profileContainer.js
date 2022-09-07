import React from 'react';
import {Parallax} from "react-parallax";

import palmRoad from '../img/profileImg/palmRoad.jpg'
import imgOldTimer from "../img/swiperImg/oldtimerSquare.jpg";
import imgExtreme from "../img/swiperImg/travis-essingerSquare.jpg";
import imgMustang from "../img/swiperImg/mustangSquare.jpg";
import imgBeast from "../img/swiperImg/beastSquare.jpg";
import imgAudiWater from "../img/swiperImg/audiwaterSquare.jpg";
import imgAudiRs from "../img/swiperImg/Audi-RSSquare.jpg";
import porscheWhite from "../img/profileImg/thirdcar_porsche_white.jpg";
import bmwRed from "../img/profileImg/secondcar_bmw_red.jpg";
import teslaWhite from "../img/profileImg/firstcar_tesla_white.jpg";

import ProfileCard from "./ProfileCard";
import CarGallery from "./CarGallery";
import {useEffect, useState} from "react";


const ProfileContainer = (props) => {
    const userId = props.userId;
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

    const elements = [
        {
            imgSrc: imgOldTimer,
            alt: "Photo of an Old Timer"
        },
        {
            imgSrc: teslaWhite,
            alt: "Photo of a Tesla"
        },
        {
            imgSrc: imgExtreme,
            alt: "Photo of an Extreme Car"
        },
        {
            imgSrc: porscheWhite,
            alt: "Photo of a Porsche"
        },
        {
            imgSrc: imgBeast,
            alt: "Photo of a Beast Car"
        },
        {
            imgSrc: imgAudiWater,
            alt: "Photo of an Audi Car"
        },
        {
            imgSrc: imgAudiRs,
            alt: "Photo of an Audi Car"
        },
        {
            imgSrc: bmwRed,
            alt: "Photo of an BMW"
        },
        {
            imgSrc: imgBeast,
            alt: "Photo of a Beast Car"
        },
        {
            imgSrc: imgAudiWater,
            alt: "Photo of an Audi Car"
        },
        {
            imgSrc: imgAudiRs,
            alt: "Photo of an Audi Car"
        },
        {
            imgSrc: imgMustang,
            alt: "Photo of an Mustang"
        }
    ]

    let firstThreeElements = elements.slice(0,3);
    let secondThreeElements = elements.slice(3,6);
    let thirdThreeElements = elements.slice(6,9);
    let forthThreeElements = elements.slice(9,12);

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
                        <CarGallery collection={firstThreeElements}/>
                        <CarGallery collection={secondThreeElements}/>
                        <CarGallery collection={thirdThreeElements}/>
                        <CarGallery collection={forthThreeElements}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileContainer;