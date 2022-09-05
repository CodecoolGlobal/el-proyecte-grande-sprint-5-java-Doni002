import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper'

import './vehicleDetail.css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";


function HostReviewSlider(props) {
    const reviews = props.reviews;
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 4000 }}
                className={"reviewSlider"}
            >
                {
                    reviews.map((item, index) => (
                        <SwiperSlide key={index} className={"reviewDefaultItem"}>
                            <div><strong>{item.name}</strong></div>
                            <div>{item.review}</div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default HostReviewSlider;
