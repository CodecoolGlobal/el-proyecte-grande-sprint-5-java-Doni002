import "./vehicleDetail.css"

import {GiRoundStar} from 'react-icons/gi';
import HostReviewSlider from "./HostReviewSlider";
import {useEffect, useState} from "react";


function HostReview(props) {
    const carData = props.data;

    const [userData, setUserData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const [img, setImg] = useState(undefined);

    useEffect(() => {
        if(carData===undefined){
            return;
        }

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
                    <div className={"vText"}><GiRoundStar />5 Jimmy</div>
                </div>
                <div className="swiperContainer">
{/*
                     <HostReviewSlider reviews={ reviews}/>
*/}
                </div>
            </div>
        </>
    );
}

export default HostReview;