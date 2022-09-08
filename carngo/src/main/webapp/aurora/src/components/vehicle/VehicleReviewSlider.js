import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Mousewheel, Pagination} from 'swiper'
import {GiRoundStar} from 'react-icons/gi';

import "./vehicleDetail.css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import {useEffect, useState} from "react";
import ProfilePicture from "../imageFetch/ProfilePicture";
import {Link} from "react-router-dom";


function VehicleReviewSlider(props) {
    const carData = props.carData;
    const [feedbacks, setFeedbacks] = useState(undefined);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/car-feedbacks/${carData.id}`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setFeedbacks(actualData);
        }
        getData().catch((response)=>{console.log(response);});

    }, [carData]);
    if(feedbacks === undefined){
        return (<h1>Loading...</h1>)
    }
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
                feedbacks.map((item, index) => (
                <SwiperSlide key={index} className={"sliderVehicleReviewItem"}>
                    <Link to={"/profile/" + item.user.id}>
                        <div className="sliderVehicleReviewItemImage">
                            <ProfilePicture img={item.user.imageSource}/>
                            <div><strong>{item.user.name}</strong></div>
                        </div>
                    </Link>
                    <div className={"sliderVehicleReviewItemFeatures"}>
                        <div>{item.message}</div>
                        <div>{item.starRating} <GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></div>
                        <div>{item.starRating} <GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></div>
                        <div>{item.starRating} <GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /><GiRoundStar /></div>
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