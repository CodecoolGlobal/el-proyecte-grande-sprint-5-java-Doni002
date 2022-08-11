import "../toggleArticle/toggleArticle.css";
import "./vehicle.css";
import AudiRS from "../img/Audi-RS.jpg";


const Vehicle = (props) => {
    const image = AudiRS;
    const vehicle = {
        id: "001",
        description:"Great car in a great condition.",
        carType: "Sport",
        color: "green",
        brandId: "1",
        model: "RS",
        fuel:"petrol",
        vintage:"",
        numOfSeats:"5",
        trunkCapacity:"315",
        pricePerDay:"120",
        numOfReservations:"31",
        userId:"0012",
        image: "/img/Audi-RS.jpg"
    }
    return (
        <>
            <div className="taArticle">
            <div className="taImageContainer">
                <img className="vImage" src={image} alt={""}></img>
            </div>
                <div className="vTextContainer">
                    <div >Description: {vehicle.description}</div>
                    <div>Car type:  {vehicle.carType}</div>
                    <div>Color: {vehicle.color}</div>
                    <div> Brand: {vehicle.brandId}</div>
                    <div>Model: {vehicle.model}</div>
                    <div>Fuel: {vehicle.fuel}</div>
                    <div>Vintage: {vehicle.vintage}</div>
                    <div>Number of seats: {vehicle.numOfSeats}</div>
                    <div>Trunk capacity: {vehicle.trunkCapacity}</div>
                    <div>Price per day: {vehicle.pricePerDay}</div>
                    <div>Number of reservations: {vehicle.numOfReservations}</div>
                    <div>Host: {vehicle.userId}</div>
                </div>
            </div>
        </>
    );
};

export default Vehicle;