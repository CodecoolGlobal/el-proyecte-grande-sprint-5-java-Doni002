import "../toggleArticle/toggleArticle.css";
import "./vehicle.css";
import AudiRS from "../img/Audi-RS.jpg";
import {useParams} from "react-router-dom";

const VehicleDetail = () => {
    const id = useParams();
    const image = AudiRS;
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
    return (
        <>
            <div className="vArticle">
            <div className="taImageContainer">
                <img className="vImage" src={image} alt={""}></img>
            </div>
                 <div className="vTextContainer">
                    <h1>{vehicle.name}</h1><br/>
                    <div className={"taText"}><strong>DESCRIPTION:</strong> {vehicle.description}</div>
                     <div className={"taText"}><strong>Car type: </strong> {vehicle.carType}</div>
                     <div className={"taText"}><strong>Brand: </strong>{vehicle.brandId}</div>
                     <div className={"taText"}><strong>Model:</strong> {vehicle.model}</div>
                     <div className="features">
                         <div className={"taText"}><strong>Fuel:</strong> {vehicle.fuel}</div>
                         <div className={"taText"}><strong>Number of seats: </strong>{vehicle.numOfSeats}</div>
                         <div className={"taText"}><strong>Number of doors: </strong>{vehicle.numOfDoors}</div>
                         <div className={"taText"}><strong>Trunk capacity: </strong>{vehicle.trunkCapacity}l</div>
                         <div className={"taText"}><strong>Color:</strong> {vehicle.color}</div>
                         <div className={"taText"}><strong>Vintage: </strong>{vehicle.vintage}</div>
                     </div>
                    <div className={"taText"}><strong>Price per day: </strong>{vehicle.pricePerDay}$</div>
                    <div className={"taText"}><strong>Number of reservations: </strong>{vehicle.numOfReservations}</div>
                    <div className={"taText"}><strong>Host: </strong>{vehicle.userId}</div>
                </div>
            </div>
        </>
    );
};

export default VehicleDetail;