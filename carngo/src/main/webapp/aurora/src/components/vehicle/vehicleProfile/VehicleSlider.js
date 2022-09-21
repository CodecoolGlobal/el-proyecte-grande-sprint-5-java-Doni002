import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import './vehicleDetail.css';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from 'swiper'
import defaultPicture from "../../img/defaultProfile.jpg";
import {useEffect} from "react";
import CarPicture from "../../imageFetch/CarPicture";

const VehicleSlider = (props) => {
    const carData = props.carData;
    const [activeThumb, setActiveThumb] = useState();
    const [data, setData] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/car-images/${carData.id}`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setData(actualData);
        }
        getData().catch((response)=>{console.log(response);});
    }, [carData, props.carData]);
    if(data===undefined){
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

                            <SwiperSlide className={"default-item"}>
                                <img src={defaultPicture} alt="" />
                            </SwiperSlide>

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
                                <SwiperSlide>
                                    <div className="product-images-slider-thumbs-item">
                                        <img src={defaultPicture} alt="" />
                                    </div>
                                </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </>
        );
    }
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
                data.map((item, index) => (
                    <SwiperSlide key={index} className={"default-item"}>
                        <CarPicture img={item.imageSource}/>
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
                data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-item">
                            <CarPicture img={item.imageSource}/>
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
