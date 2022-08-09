import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './CategoryCard';

import imgCity from "../img/City.jpg";
import imgAudiBack from "../img/Audi Back.jpg";
import imgAudiFront from "../img/Audi Front.jpg";

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
                    <CategoryCard imgSrc={imgCity} message="City" messageImgSrc="ahhaha" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiBack} message="Audiback" messageImgSrc="ahhaha" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiFront} message="Audifront" messageImgSrc="ahhaha" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgCity} message="City" messageImgSrc="ahhaha" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiBack} message="Audiback" messageImgSrc="ahhaha" />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiFront} message="Audifront" messageImgSrc="ahhaha" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default CategorySlider;