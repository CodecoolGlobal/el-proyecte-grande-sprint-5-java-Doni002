import React, {useEffect, useState} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel} from "swiper";
import 'swiper/css';


const HostSlider = () => {
    const [hosts, setHosts] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/hosts`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setHosts(actualData);
        }
        getData().catch(reason => {console.log(reason)});
    }, [id]);

    if(hosts === undefined){
        return(<div></div>)
    }

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
                {hosts.map(item=>{
                    return(
                        <SwiperSlide key={item.message}>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default CategorySlider;