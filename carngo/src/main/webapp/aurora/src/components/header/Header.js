import {Parallax} from "react-parallax";
import AudiBack from "../img/headerImg/Audi Back.jpg";
import AudiFront from "../img/headerImg/Audi Front.jpg";
import AudiWater from "../img/headerImg/audiwater.jpg"
import SteeringWheelAudi from "../img/headerImg/steeringwheelaudi.jpg"

import Navbar from "./Navbar";
import Content from "./Content";
import {useEffect, useState} from "react";

const images = [
    AudiFront,
    AudiBack,
    SteeringWheelAudi,
    AudiWater
];

const Header = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((v) => {
                return v === images.length - 1 ? 0 : v + 1;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Parallax className='image fadeIn' bgImage={images[index]} strength={800}>
                <Navbar />
                <Content />
            </Parallax>
        </>
    );
};

export default Header;