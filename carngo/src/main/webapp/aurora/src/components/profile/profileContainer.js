import React from 'react';
import {Parallax} from "react-parallax";

import palmRoad from '../img/profileImg/palmRoad.jpg'
import imgOldTimer from "../img/swiperImg/oldtimerSquare.jpg";
import imgExtreme from "../img/swiperImg/travis-essingerSquare.jpg";
import imgMustang from "../img/swiperImg/mustangSquare.jpg";
import imgBeast from "../img/swiperImg/beastSquare.jpg";
import imgAudiWater from "../img/swiperImg/audiwaterSquare.jpg";
import imgAudiRs from "../img/swiperImg/Audi-RSSquare.jpg";
import imgTransport from "../img/swiperImg/mostafa-tarekSquare.jpg";
import porscheWhite from "../img/profileImg/thirdcar_porsche_white.jpg";
import bmwRed from "../img/profileImg/secondcar_bmw_red.jpg";
import teslaWhite from "../img/profileImg/firstcar_tesla_white.jpg";

import ProfileCard from "./ProfileCard";
import CarGallery from "./CarGallery";


const ProfileContainer = (props) => {
    const data = props.data;
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
                                <ProfileCard data={data}/>
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