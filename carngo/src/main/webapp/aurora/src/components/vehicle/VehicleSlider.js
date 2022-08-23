import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import './vehicleDetail.css';
import { Navigation, Thumbs } from 'swiper'

import imgOldTimer from "../img/oldtimerSquare.jpg";
import imgMustang from "../img/mustangSquare.jpg"
import imgBeast from "../img/beastSquare.jpg";
import imgAudiWater from "../img/audiwaterSquare.jpg"
import imgAudiRs from "../img/Audi-RSSquare.jpg";
import imgTransport from "../img/mostafa-tarekSquare.jpg";
import imgExtreme from "../img/travis-essingerSquare.jpg";


const VehicleSlider = (props) => {
    const images = props.images;
    const [activeThumb, setActiveThumb] = useState();

    return (<>
            <div className={"swiper-container"}>

        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className={"product-images-slider"}
        >
            {
                images.map((item, index) => (
                    <SwiperSlide key={index} className={"default-item"}>
                        <img src={item.imgSrc} alt="" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
                    loop={false}
                    spaceBetween={20}
                    slidesPerView={6}
                    modules={[Navigation, Thumbs]}
                    className={"product-images-slider-thumbs"}
                    watchSlidesProgress
                    onSwiper={setActiveThumb}
                >
            {
                images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item.imgSrc} alt="" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
            </div>
        </>
    );
}

export default VehicleSlider;