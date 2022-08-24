import "../components/vehicle/vehicleDetail.css";
import {useParams} from "react-router-dom";
import VehicleSlider from "../components/vehicle/VehicleSlider";
import VehicleFeatures from "../components/vehicle/VehicleFeatures";
import HostReview from "../components/vehicle/HostReview";
import VehicleReview from "../components/vehicle/VehicleReview";
import imgOldTimer from "../components/img/oldtimerSquare.jpg";
import imgExtreme from "../components/img/travis-essingerSquare.jpg";
import imgMustang from "../components/img/mustangSquare.jpg";
import imgBeast from "../components/img/beastSquare.jpg";
import imgAudiWater from "../components/img/audiwaterSquare.jpg";
import imgAudiRs from "../components/img/Audi-RSSquare.jpg";
import imgTransport from "../components/img/mostafa-tarekSquare.jpg";
import Footer from "../components/footer/Footer";
import {Parallax} from "react-parallax";
import Navbar from "../components/header/Navbar";
import imgAbstract from "../components/img/car-back-lights.jpg"

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
        }
    ]
    return (
        <>
            <Parallax bgImage={imgAbstract} strength={100}>
                <Navbar />
            </Parallax>
            <VehicleSlider images={ images}/>
            <VehicleFeatures props={vehicle} />
            <HostReview />
            <VehicleReview />
            <Footer />
        </>
    );
};

export default VehicleDetail;