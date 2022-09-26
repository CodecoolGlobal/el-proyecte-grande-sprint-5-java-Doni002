import ProgressBar from "./ProgressBar";
import "./statistics.css"

import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";
import {useEffect} from "react";

function ProgressBarContainer() {
    const customerCount = 25;
    const customerColor = `hsl(37, 100%, 50%)`;
    const customerText = "MILLION CUSTOMERS"
    const vehicleCount = 5;
    const vehicleColor = "hsl(18,100%,50%)";
    const vehicleText = "MILLION VEHICLES"
    const countryCount = 15;
    const countryColor = "hsl(0,85%,29%)";
    const countryText = "COUNTRIES"
    const journeyCount = 30;
    const journeyColor = "hsl(18,63%,52%)";
    const journeyText = "MILLION JOURNEY"

    const {ref, inView} = useInView({
        threshold: 0
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start('visible');
        }
        if(!inView){
            animation.start('hidden');
        }
        }, [animation, inView]);

    const animationVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={animationVariants}
        >
            <section className={"statistics-container"}>
                    <ProgressBar
                    count={customerCount}
                    color={customerColor}
                    type = {customerText}
                    />
                    <ProgressBar
                    count={vehicleCount}
                    color={vehicleColor}
                    type = {vehicleText}
                    />
                    <ProgressBar
                    count={countryCount}
                    color={countryColor}
                    type = {countryText}
                    />
                    <ProgressBar
                    count={journeyCount}
                    color={journeyColor}
                    type = {journeyText}
                    />
            </section>
        </motion.div>
    );
}

export default ProgressBarContainer;
