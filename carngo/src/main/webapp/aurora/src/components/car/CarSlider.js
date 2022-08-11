import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel} from "swiper";
import 'swiper/css';
import CarCard from './CarCard';

import imgExtreme from "../img/travis-essingerSquare.jpg";
import imgAudi from "../img/Audi-RS.jpg";




const CategorySlider = () => {
    const elements = [
        {
            imgSrc: imgExtreme,
            name: "Toyota Tacoma 2014",
            rate: "4.7",
            price: "100",
        },
        {
            imgSrc: imgAudi,
            name: "Audi RS 2019",
            rate: "3.2",
            price: "132",
        },
        {
            imgSrc: imgExtreme,
            name: "Toyota Tacoma 2014",
            rate: "4.7",
            price: "100",
        },
        {
            imgSrc: imgAudi,
            name: "Audi RS 2019",
            rate: "3.2",
            price: "132",
        },
    ]

    return (
        <div>
            <Swiper
            slidesPerView={2}
            grabCursor={true}
            loop={true}
            speed={800}
            mousewheel={true}
            modules={[EffectCoverflow, Mousewheel]}
            >
                {elements.map(item=>{
                    return(
                        <SwiperSlide>
                            <CarCard imgSrc={item.imgSrc} name={item.name} rate={item.rate} price={item.price} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default CategorySlider;