import {Parallax} from "react-parallax";
import AudiBack from "../img/Audi Back.jpg";
import AudiFront from "../img/Audi Front.jpg";
import AudiWater from "../img/audiwater.jpg"
import SteeringWheelAudi from "../img/steeringwheelaudi.jpg"

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
            <Parallax className='image' bgImage={images[index]} strength={300}>
                <Navbar />
                <Content />
            </Parallax>
        </>
    );
};

export default Header;