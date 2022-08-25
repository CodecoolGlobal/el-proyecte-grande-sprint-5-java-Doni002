import "../components/vehicle/vehicleDetail.css";
import {useParams} from "react-router-dom";
import VehicleSlider from "../components/vehicle/VehicleSlider";
import VehicleFeatures from "../components/vehicle/VehicleFeatures";
import HostReview from "../components/vehicle/HostReview";
import VehicleReviewSlider from "../components/vehicle/VehicleReviewSlider";
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
import CalendarArticle from "../components/vehicle/CalendarArticle"


const VehicleDetail = () => {
    const id = useParams();
    const vehicle = {
            name: "Audi RS",
            id: "001",
            description:"Great car in a great condition.Lorem ipsum " +
                "dolor sit amet, consectetur adipiscing elit. Ut erat tellus, porta ut eleifend sit amet, " +
                "fringilla nec nulla. Aenean at facilisis nulla. Ut rhoncus tincidunt lorem non pretium. " +
                "Curabitur feugiat turpis ut viverra sodales. Sed in luctus diam. Proin et laoreet orci. " +
                "Praesent efficitur libero sit amet nibh tempor lobortis. Ut ullamcorper est erat. " +
                "Etiam congue eu nulla a accumsan. Donec pretium lobortis rhoncus. Praesent vulputate, " +
                "nisl ut pretium porta, libero enim tempor mi, elementum sodales urna enim quis lorem. " +
                "Cras non eros sed diam mollis semper. Cras ultrices convallis maximus. ",
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
    const hostReviews = [
        {name: "David",
        review: "Good car and host."},
        {name: "Tracey",
            review: "Precise desciption."},
        {name: "Joey",
            review: "Had fun."},
        {name: "Bud",
            review: "Didn't meet my expectations."}
    ]
    const vehicleReviews = [
        {name: "Claire",
        image: imgExtreme,
        review: "Good car and host.",
        experience: 4,
        condition:5,
        consumption:5},
        {name: "Brandon",
            image: imgAudiWater,
        review: "Precise desciption.",
        experience: 4,
        condition:5,
        consumption:5},
        {name: "Lucy",
            image: imgTransport,
        review: "Had fun.",
        experience: 4,
        condition:5,
        consumption:5},
        {name: "George",
            image: imgBeast,
        review: "Didn't meet my expectations.",
        experience: 4,
        condition:5,
        consumption:5}
    ]
    return (
        <>
            <Parallax bgImage={imgAbstract} strength={100}>
                <Navbar />
            </Parallax>
            <VehicleSlider images={ images}/>
            <div style={{display:"flex"}}>
                <VehicleFeatures props={vehicle} />
                <CalendarArticle />
            </div>
            <HostReview image={imgMustang} reviews={ hostReviews}/>
            <VehicleReviewSlider reviews={ vehicleReviews}/>
            <Footer />
        </>
    );
};

export default VehicleDetail;