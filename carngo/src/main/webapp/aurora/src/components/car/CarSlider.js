import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Mousewheel} from "swiper";
import 'swiper/css';
import CarCard from './CarCard';
import imgExtreme from "../img/travis-essingerSquare.jpg";
/*import imgAudi from "../img/Audi-RS.jpg";
import imgFerrari from "../img/ferrariSquare.jpg";
import imgMercedes from "../img/mercedesSquare.jpeg";
import imgBugatti from "../img/bugattiSquare.jpeg";
import imgMclaren from "../img/mclarenSquare.jpg";*/
import {useEffect, useState} from "react";

function CarSlider() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/vehicles`
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
    /*const elements = [
        {
            imgSrc: imgExtreme,
            name: "Toyota Tacoma 2014",
            rate: "4.1",
            price: "100",
        },
        {
            imgSrc: imgAudi,
            name: "Audi RS 2019",
            rate: "3.2",
            price: "132",
        },
        {
            imgSrc: imgFerrari,
            name: "Ferrari F40",
            rate: "4.9",
            price: "220",
        },
        {
            imgSrc: imgBugatti,
            name: "Bugatti Chiron",
            rate: "4.3",
            price: "301",
        },
        {
            imgSrc: imgMercedes,
            name: "Mercedes AMG GT",
            rate: "4.4",
            price: "264",
        },
        {
            imgSrc: imgMclaren,
            name: "McLaren 720S",
            rate: "3.7",
            price: "214",
        },
    ]*/

    return (
        <div className="carSliderContainer">
            <Swiper
                effect={"coverflow"}
                speed={800}
                mousewheel={true}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 60,
                    modifier: 1,
                    slideShadows: false,
                }}
                grabCursor={true}
                loop={true}
                modules={[EffectCoverflow, Mousewheel]}
                className="carSlider"
                breakpoints={{
                    0: {
                        slidesPerView:1,
                        spaceBetween: 10,
                    },
                    630: {
                        slidesPerView:2,
                        spaceBetween: 15,
                    },
                    880: {
                        slidesPerView:3,
                        spaceBetween: 15,
                    },
                    1150: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1450: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1730: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    }
                }}
            >
                {data.map(item=>{
                    return(
                        <SwiperSlide>
                            <CarCard imgSrc={imgExtreme} name={(item.brand + " " + item.model)} rate={item.numOfReservations} price={item.pricePerDay} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default CarSlider;