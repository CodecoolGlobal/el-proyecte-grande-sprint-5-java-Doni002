import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel} from "swiper";
import 'swiper/css';
import CategoryCard from './CategoryCard';

import imgMustang from "../img/mustangSquare.jpg"
import imgBeast from "../img/beastSquare.jpg";
import imgAudiWater from "../img/audiwaterSquare.jpg"
import imgAudiRs from "../img/Audi-RSSquare.jpg";
import imgTransport from "../img/mostafa-tarekSquare.jpg";
import imgExtreme from "../img/travis-essingerSquare.jpg";
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
                    460: {
                        slidesPerView:2,
                        spaceBetween: 15,
                    },
                    780: {
                        slidesPerView:3,
                        spaceBetween: 15,
                    },
                    990: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1700: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    }
                }}
            >

                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiRs} message="Electric" messageImgSrc={svgElectric} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgAudiWater} message="Deluxe" messageImgSrc={svgStars} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgBeast} message="Release the Beast" messageImgSrc={svgBeast}  />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryCard imgSrc={imgMustang} message="Feel the road" messageImgSrc={svgCar} />
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