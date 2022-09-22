import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Mousewheel} from "swiper";
import 'swiper/css';
import CarCard from './CarCard';

function CarSlider(props) {

    return (
        <div className="carSliderContainer">
            <h1 className="categorySliderTitle">Top Rated Cars</h1>
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
                {props.cars.map(item=>{
                    return(
                        <SwiperSlide key={item.id}>
                            <CarCard imgSrc={item.imageSource} name={(item.brand + " " + item.model)} rate={item.numOfReservations} price={item.pricePerDay} id={item.id} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default CarSlider;