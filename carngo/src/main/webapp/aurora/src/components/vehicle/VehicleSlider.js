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
                    slidesPerView={8}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                    className={"product-images-slider-thumbs border-bottom"}
                    onSwiper={setActiveThumb}
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