import {Parallax} from "react-parallax";
import AudiBack from "../img/headerImg/Audi Back-small.jpg";
import AudiFront from "../img/headerImg/Audi Front-small.jpg";
import AudiWater from "../img/headerImg/audiwater-small.jpg"
import SteeringWheelAudi from "../img/headerImg/steeringwheelaudi-small.jpg"

import Navbar from "./Navbar";
import Content from "./Content";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const images = [
    AudiFront,
    AudiBack,
    SteeringWheelAudi,
    AudiWater
];

const Header = () => {
    const [index, setIndex] = useState(0);
    const timeout = 4000;
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((v) => {
                return v === images.length - 1 ? 0 : v + 1;
            });
        }, timeout);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Parallax className='image fadeIn' bgImage={images[index]} strength={300}>
                <Navbar />
                <motion.div
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'spring', duration: 1, bounce: 0.3}}
                >
                    <Content />
                </motion.div>
            </Parallax>
            {/*<div className="image" style={{background: `url(${images[index]})}}>*/}

            {/*</div>*/}
        </>
    );
};

export default Header;
