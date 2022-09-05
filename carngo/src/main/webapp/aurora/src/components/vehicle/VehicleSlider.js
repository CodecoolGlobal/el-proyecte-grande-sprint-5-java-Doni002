import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import './vehicleDetail.css';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from 'swiper'
import imgOldTimer from "../img/oldtimerSquare.jpg";
import imgExtreme from "../img/travis-essingerSquare.jpg";
import imgMustang from "../img/mustangSquare.jpg";
import imgBeast from "../img/beastSquare.jpg";
import imgAudiWater from "../img/audiwaterSquare.jpg";
import imgAudiRs from "../img/Audi-RSSquare.jpg";
import imgTransport from "../img/mostafa-tarekSquare.jpg";
import {useEffect} from "react";

const VehicleSlider = (props) => {
    const images = [
        {
            imgSrc: imgOldTimer,
        },
        {
            imgSrc: imgExtreme,
        },
        {
            imgSrc: imgMustang,
        },
        {
            imgSrc: imgBeast,
        },
        {
            imgSrc: imgAudiWater,
        },
        {
            imgSrc: imgAudiRs,
        },
        {
            imgSrc: imgTransport,
        }
    ];

    const carData = props.carData;
    const [activeThumb, setActiveThumb] = useState();
    const [img, setImg] = useState([]);

    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`http://localhost:8080/api/image/carProfile/${carData.imageSource}`);
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg([imageObjectURL, imageObjectURL]);
        };

        fetchImage().then();
    }, [carData]);

    if(img === undefined){
        return (<h1>Loading...</h1>)
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