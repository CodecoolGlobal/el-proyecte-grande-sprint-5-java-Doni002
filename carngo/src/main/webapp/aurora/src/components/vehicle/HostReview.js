import "./vehicleDetail.css"

import {GiRoundStar} from 'react-icons/gi';
import HostReviewSlider from "./HostReviewSlider";
import {useEffect, useState} from "react";


function HostReview(props) {
    const carData = props.data;
    const [error, setError] = useState([]);
    const [img, setImg] = useState(undefined);

    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`http://localhost:8080/api/image/userProfile/${carData.host.user.imageSource}`);
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
        };

       fetchImage().then();
    }, [error, carData]);

    if(img === undefined){
        return (<h1>Loading...</h1>)
    }
    return (
        <>
            <div className={"host-h3"}>HOSTED BY</div>
            <div className={"hostArticle"}>
                <div className={"hostContainer"}>
                    <img className={"hostImage"} src={img} alt=""/>
                    <div className={"vText"}><GiRoundStar />{carData.host.user.name}</div>
                </div>
                <div className="swiperContainer">
                     <HostReviewSlider host={ carData.host}/>
                </div>
            </div>
        </>
    );
}

export default HostReview;