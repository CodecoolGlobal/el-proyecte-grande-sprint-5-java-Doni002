import "./vehicleDetail.css"
import {GiRoundStar} from 'react-icons/gi';
import HostReviewSlider from "./HostReviewSlider";
import ProfilePicture from "../imageFetch/ProfilePicture";

function HostReview(props) {
    const carData = props.data;
    return (
        <>
            <div className={"host-h3"}>HOSTED BY</div>
            <div className={"hostArticle"}>
                <div className={"hostContainer"}>
                    <ProfilePicture img={carData.host.user.imageSource}/>
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