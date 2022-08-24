import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import './vehicleDetail.css';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from 'swiper'

const VehicleSlider = (props) => {
    const images = props.images;
    const [activeThumb, setActiveThumb] = useState();

    return (<>
            <div className={"swiper-slide-container"}>
                <div className={"swiper-slide"}>

        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={false}
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
                    slidesPerView={10}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                    className={"product-images-slider-thumbs border-bottom"}
                    onSwiper={setActiveThumb}
                >
            {
                images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-item">
                            <img src={item.imgSrc} alt="" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
            </div>
        </div>
        </>
    );
}

export default VehicleSlider;