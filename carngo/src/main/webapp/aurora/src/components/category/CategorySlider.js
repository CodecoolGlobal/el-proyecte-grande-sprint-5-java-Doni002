import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import CategoryCard from './CategoryCard';

import imgAudiBack from "../img/Audi Back.jpg";
import imgAudiFront from "../img/Audi Front.jpg";
import imgAudiRs from "../img/Audi-RS.jpg";
import imgMattDuncan from "../img/matt-duncan.jpg";
import imgMostafaTarek from "../img/mostafa-tarek.jpg";
import imgTravisEssinger from "../img/travis-essinger.jpg";
import svgElectric from "../svg/battery-charging.svg";
import svgStars from "../svg/stars.svg";
import svgTruck from "../svg/truck.svg";
import svgSnow from "../svg/snow2.svg";
import svgCar from "../svg/car-front.svg";
import svgBeast from "../svg/speedometer.svg";

const CategorySlider = () => {
    return (
        <div className="container py-4 px-4 justify-content-center">
            <h1>Categories</h1>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="categorySwiper"
                breakpoints={{
                    0: {
                        slidesPerView:1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView:2,
                        spaceBetween: 15,
                    },
                    993: {
                        slidesPerView:3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1378: {
                        slidesPerView: 5,
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
                    <CategoryCard imgSrc={imgMostafaTarek} message="Transport" messageImgSrc={svgTruck} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgTravisEssinger} message="Extreme" messageImgSrc={svgSnow} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiRs} message="Electric" messageImgSrc={svgElectric} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiBack} message="Deluxe" messageImgSrc={svgStars} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiFront} message="Release the Beast" messageImgSrc={svgBeast} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgMattDuncan} message="Feel the road" messageImgSrc={svgCar} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgMostafaTarek} message="Transport" messageImgSrc={svgTruck} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgTravisEssinger} message="Extreme" messageImgSrc={svgSnow} />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default CategorySlider;