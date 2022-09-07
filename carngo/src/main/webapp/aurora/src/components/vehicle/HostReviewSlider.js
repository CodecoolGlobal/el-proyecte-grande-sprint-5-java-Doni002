import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper'

import './vehicleDetail.css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import {useEffect, useState} from "react";

function HostReviewSlider(props) {
    const host = props.host;
    const [feedbacks, setFeedbacks] = useState(undefined);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/user-feedback/${host.id}`
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

    }, [host]);
    if(feedbacks === undefined){
        return (<h1>Loading...</h1>)
    }
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
                    feedbacks.map((item, index) => (
                        <SwiperSlide key={index} className={"reviewDefaultItem"}>
                            <div><strong>{item.user.name}</strong></div>
                            <div>{item.message}</div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default HostReviewSlider;
