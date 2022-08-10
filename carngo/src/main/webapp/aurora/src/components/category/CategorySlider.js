import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel} from "swiper";
import 'swiper/css';
import CategoryCard from './CategoryCard';

import imgAudiBack from "../img/Audi Back.jpg";
import imgAudiFront from "../img/Audi Front.jpg";
import imgAudiRs from "../img/Audi-RS.jpg";
import imgMattDuncan from "../img/matt-duncan.jpg";
import imgTransport from "../img/mostafa-tarek.jpg";
import imgExtreme from "../img/travis-essinger.jpg";
import svgElectric from "../svg/battery-charging.svg";
import svgStars from "../svg/stars.svg";
import svgTruck from "../svg/truck.svg";
import svgSnow from "../svg/snow2.svg";
import svgCar from "../svg/car-front.svg";
import svgBeast from "../svg/speedometer.svg";

const CategorySlider = () => {
    return (
        <div className="categorySliderContainer">
            <h1 className="categorySliderTitle">Categories</h1>
            <Swiper
                effect={"coverflow"}
                speed={800}
                mousewheel={true}
                coverflowEffect={{
                    rotate: 35,
                    stretch: 0,
                    depth: 70,
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
                    783: {
                        slidesPerView:2,
                        spaceBetween: 15,
                    },
                    1083: {
                        slidesPerView:3,
                        spaceBetween: 15,
                    },
                    1380: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1698: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1970: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    }
                }}
            >

                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiRs} message="Electric" messageImgSrc={svgElectric} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiBack} message="Deluxe" messageImgSrc={svgStars} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiFront} message="Release the Beast" messageImgSrc={svgBeast}  />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgMattDuncan} message="Feel the road" messageImgSrc={svgCar} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgTransport} message="Transport" messageImgSrc={svgTruck} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgExtreme} message="Extreme" messageImgSrc={svgSnow} />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default CategorySlider;