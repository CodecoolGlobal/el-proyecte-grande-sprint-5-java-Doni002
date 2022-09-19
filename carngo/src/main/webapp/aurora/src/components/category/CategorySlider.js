import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel} from "swiper";
import 'swiper/css';
import CategoryCard from './CategoryCard';

import imgOldTimer from "../img/swiperImg/oldtimerSquare.jpg";
import imgMustang from "../img/swiperImg/mustangSquare.jpg"
import imgBeast from "../img/swiperImg/beastSquare.jpg";
import imgAudiWater from "../img/swiperImg/audiwaterSquare.jpg"
import imgAudiRs from "../img/swiperImg/Audi-RSSquare.jpg";
import imgTransport from "../img/swiperImg/mostafa-tarekSquare.jpg";
import imgExtreme from "../img/swiperImg/travis-essingerSquare.jpg";
import svgElectric from "../svg/battery-charging.svg";
import svgStars from "../svg/stars.svg";
import svgTruck from "../svg/truck.svg";
import svgSnow from "../svg/snow2.svg";
import svgCar from "../svg/car-front.svg";
import svgBeast from "../svg/speedometer.svg";
import svgCarFront from "../svg/car-front-fill.svg"

const CategorySlider = () => {
    const elements = [
        {
            imgSrc: imgOldTimer,
            message: "Old timer",
            svgSrc: svgCarFront,
        },
        {
            imgSrc: imgExtreme,
            message: "Extreme",
            svgSrc: svgSnow,
        },
        {
            imgSrc: imgMustang,
            message: "Feel the road",
            svgSrc: svgCar,
        },
        {
            imgSrc: imgBeast,
            message: "Release the beast",
            svgSrc: svgBeast,
        },
        {
            imgSrc: imgAudiWater,
            message: "Deluxe",
            svgSrc: svgStars,
        },
        {
            imgSrc: imgAudiRs,
            message: "Electric",
            svgSrc: svgElectric,
        },
        {
            imgSrc: imgTransport,
            message: "Transport",
            svgSrc: svgTruck,
        },
    ]

    return (
        <div className="categorySliderContainer">
            <h1 className="categorySliderTitle">Categories</h1>
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
                className="categorySwiper"
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
                {elements.map(item=>{
                    return(
                        <SwiperSlide>
                            <CategoryCard imgSrc={item.imgSrc} message={item.message} messageImgSrc={item.svgSrc} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default CategorySlider;