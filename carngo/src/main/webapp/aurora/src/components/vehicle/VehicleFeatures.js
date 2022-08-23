import React from 'react';

function VehicleFeatures(props) {
    const vehicle = props.props;
    return (
        <div className="vArticle">
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
    );
}

export default VehicleFeatures;