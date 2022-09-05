import { GiCarDoor } from 'react-icons/gi';
import { GiGasPump } from 'react-icons/gi';
import { GiCarSeat } from 'react-icons/gi';
import { GiResize } from 'react-icons/gi';


function VehicleFeatures(props) {
    const vehicle = props.props;
    return (
        <div className={"vArticle"}>
            <div className={"vTextContainer"}>
                <h1>{vehicle.name}</h1><br/>
                <div className={"vText "}><strong>DESCRIPTION:</strong> {vehicle.description}</div>
                <div className="vFeatures borderFeature">
                    <div className={"vText vFeatureItem"}><GiGasPump /><strong> Fuel:</strong> {vehicle.fuel}</div>
                    <div className={"vText vFeatureItem"}><GiCarSeat /><strong> Number of seats: </strong>{vehicle.numOfSeats}</div>
                    <div className={"vText vFeatureItem"}><GiCarDoor /><strong> Number of doors: </strong>{vehicle.numOfDoors}</div>
                    <div className={"vText vFeatureItem"}><GiResize /><strong> Trunk capacity: </strong>{vehicle.trunkCapacity}l</div>
                </div>
                <div className={"vText"}><strong>Car type: </strong> {vehicle.carType}</div>
                <div className={"vText"}><strong>Brand: </strong>{vehicle.brandId}</div>
                <div className={"vText"}><strong>Model:</strong> {vehicle.model}</div>
                <div className={"vText"}><strong>Color:</strong> {vehicle.color}</div>
                <div className={"vText"}><strong>Vintage: </strong>{vehicle.vintage}</div>
                <div className={"vText"}><strong>Price per day: </strong>{vehicle.pricePerDay}$</div>
                <div className={"vText"}><strong>Number of reservations: </strong>{vehicle.numOfReservations}</div>
                <div className={"vText"}><strong>Host: </strong>{vehicle.userId}</div>
            </div>
        </div>
    );
}

export default VehicleFeatures;