import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Mousewheel, Pagination} from 'swiper'
import {GiRoundStar} from 'react-icons/gi';

import "./vehicleDetail.css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";


function VehicleReviewSlider(props) {
    const reviews = props.reviews;
    return (
        <>
            <h3 className={"host-h3"}>VEHICLE REVIEWS:</h3>
            <div className="vehicleReview">
                <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={10}
                mousewheel={true}
                modules={[Pagination, Mousewheel, Autoplay]}
                direction={"vertical"}
                autoplay={{ delay: 4000 }}
                className={"sliderVehicleReview"}
                pagination={{
                    clickable: true,
                }}
                >
            {
                reviews.map((item, index) => (
                <SwiperSlide key={index} className={"sliderVehicleReviewItem"}>
                    <div className="sliderVehicleReviewItemImage">
                        <img className={"hostImage"} src={item.image} alt=""/>
                        <div><strong>{item.name}</strong></div>
                    </div>
                    <div className={"sliderVehicleReviewItemFeatures"}>
                        <div>{item.review}</div>
                        <div>{item.experience} <GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></div>
                        <div>{item.condition} <GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></div>
                        <div>{item.consumption} <GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></div>
                    </div>
                </SwiperSlide>
                ))
            }
                </Swiper>
            </div>
            </>
            );
        }
export default VehicleReviewSlider;