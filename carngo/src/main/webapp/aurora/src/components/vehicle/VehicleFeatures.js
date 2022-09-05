import React from 'react';
import { GiGasPump } from 'react-icons/gi';
import { GiCarSeat } from 'react-icons/gi';
import { GiResize } from 'react-icons/gi';

function VehicleFeatures(props) {
    if(props.data === undefined){
        return(<div className={"vArticle"}>
            <div className={"vTextContainer"}>
                <h1>Loading...</h1><br/>
                <div className={"vText "}><strong>DESCRIPTION:</strong> Loading...</div>
                <div className="vFeatures borderFeature">
                    <div className={"vText vFeatureItem"}><GiGasPump /><strong> Fuel:</strong> Loading...</div>
                    <div className={"vText vFeatureItem"}><GiCarSeat /><strong> Number of seats: </strong>Loading...</div>
                    <div className={"vText vFeatureItem"}><GiResize /><strong> Trunk capacity: </strong>Loading...</div>
                </div>
                <div className={"vText"}><strong>Car type: </strong> Loading...</div>
                <div className={"vText"}><strong>Color:</strong> Loading...</div>
                <div className={"vText"}><strong>Vintage: </strong>Loading...</div>
                <div className={"vText"}><strong>Price per day: </strong>Loading...</div>
                <div className={"vText"}><strong>Number of reservations: </strong>Loading...</div>
                <div className={"vText"}><strong>Host: </strong>Loading...</div>
            </div>
        </div>)
    }
    const data = props.data;
    return (
        <div className={"vArticle"}>
            <div className={"vTextContainer"}>
                <h1>{data.brand + " " + data.model}</h1><br/>
                <div className={"vText "}><strong>DESCRIPTION:</strong> {data.description}</div>
                <div className="vFeatures borderFeature">
                    <div className={"vText vFeatureItem"}><GiGasPump /><strong> Fuel:</strong> {data.fuel}</div>
                    <div className={"vText vFeatureItem"}><GiCarSeat /><strong> Number of seats: </strong>{data.numOfSeats}</div>
                    <div className={"vText vFeatureItem"}><GiResize /><strong> Trunk capacity: </strong>{data.trunkCapacity}l</div>
                </div>
                <div className={"vText"}><strong>Car type: </strong> {data.model}</div>
                <div className={"vText"}><strong>Color:</strong> {data.color}</div>
                <div className={"vText"}><strong>Vintage: </strong>{data.vintage}</div>
                <div className={"vText"}><strong>Price per day: </strong>{data.pricePerDay}$</div>
                <div className={"vText"}><strong>Number of reservations: </strong>{data.numOfReservations}</div>
                <div className={"vText"}><strong>Host: </strong>{data.host.user.name}</div>
            </div>
        </div>
    );
}

export default VehicleFeatures;