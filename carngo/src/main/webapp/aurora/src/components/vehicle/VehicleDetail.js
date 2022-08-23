import "../toggleArticle/toggleArticle.css";
import "./vehicleDetail.css";
import {useParams} from "react-router-dom";
import VehicleSlider from "./VehicleSlider";
import VehicleFeatures from "./VehicleFeatures";
import HostReview from "./HostReview";
import VehicleReview from "./VehicleReview";
import imgOldTimer from "../img/oldtimerSquare.jpg";
import imgExtreme from "../img/travis-essingerSquare.jpg";
import imgMustang from "../img/mustangSquare.jpg";
import imgBeast from "../img/beastSquare.jpg";
import imgAudiWater from "../img/audiwaterSquare.jpg";
import imgAudiRs from "../img/Audi-RSSquare.jpg";
import imgTransport from "../img/mostafa-tarekSquare.jpg";

const VehicleDetail = () => {
    const id = useParams();
    const vehicle = {
            name: "Audi RS",
            id: "001",
            description:"Great car in a great condition.",
            carType: "Sport",
            color: "green",
            brandId: "Audi",
            model: "RS",
            fuel:"petrol",
            vintage:"",
            numOfSeats:"5",
            numOfDoors:"5",
            trunkCapacity:"315",
            pricePerDay:"120",
            numOfReservations:"31",
            userId:"0012",
            image: "../img/Audi-RS.jpg"
    }
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
        },
        {
            imgSrc: imgTransport,
        },
        {
            imgSrc: imgTransport,
        },        {
            imgSrc: imgTransport,
        },        {
            imgSrc: imgTransport,
        },        {
            imgSrc: imgTransport,
        },        {
            imgSrc: imgTransport,
        },
    ]
    return (
        <>
            <VehicleSlider images={ images}/>
            <VehicleFeatures props={vehicle} />
            <HostReview />
            <VehicleReview />
        </>
    );
};

export default VehicleDetail;