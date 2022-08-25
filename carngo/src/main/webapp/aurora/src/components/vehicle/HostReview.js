import "./vehicleDetail.css"
import {GiRoundStar} from 'react-icons/gi';
import HostReviewSlider from "./HostReviewSlider";

function HostReview(props) {
    const image = props.image;
    const reviews = props.reviews;
    return (
        <>

            <div className={"hostArticle "}>
                <div className={"hostContainer"}>
                    <div className={"host-h3"}>HOSTED BY</div>
                    <img className={"hostImage"} src={image} alt=""/>
                    <div className={"vText"}><GiRoundStar />5 Jimmy</div>
                </div>
                <div className="swiperContainer">
                     <HostReviewSlider reviews={ reviews}/>
                </div>
            </div>
        </>
    );
}

export default HostReview;