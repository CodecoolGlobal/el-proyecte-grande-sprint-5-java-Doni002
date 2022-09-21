import React, {useContext, useRef} from 'react';
import AuthContext from "../../context/authContext";


function UploadCarData() {

    let {user, setUser} = useContext(AuthContext);
    const description = useRef("description");
    const carType = useRef("carType");
    const color = useRef("color");
    const brand = useRef("brand");
    const model = useRef("model");
    const fuel = useRef("fuel");
    const address = useRef("address");
    const vintage = useRef("vintage");
    const numOfSeats = useRef("numOfSeats");
    const trunkCapacity = useRef("trunkCapacity");
    const pricePerDay = useRef("pricePerDay");

    const uploadData = async ()=> {
        let response = await fetch("/api/vehicles/upload-data", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: description.current.value,
                carType : carType.current.value,
                color: color.current.value,
                brand: brand.current.value,
                model: model.current.value,
                fuel: fuel.current.value,
                address: address.current.value,
                vintage: vintage.current.value,
                numOfSeats: numOfSeats.current.value,
                trunkCapacity: trunkCapacity.current.value,
                pricePerDay: pricePerDay.current.value,
                userId: user.id
            })
        });
        if(response.status === 200) {
            alert("data uploaded!")
        }
    }

    return (
        <div>
            <label>Description
                <input id={"description"} ref={description}/>
            </label><br/>
            <label>Car type
                <input id={"carType"} ref={carType}/>
            </label><br/>
            <label>Color
                <input id={"color" } ref={color}/>
            </label><br/>
            <label>Brand
                <input id={"brand"} ref={brand}/>
            </label><br/>
            <label>Model
                <input id={"model"} ref={model}/>
            </label><br/>
            <label>Fuel
                <input id={"fuel"} ref={fuel}/>
            </label><br/>
            <label>Address
                <input id={"address"} ref={address}/>
            </label><br/>
            <label>Vintage
                <input id={"vintage"} ref={vintage}/>
            </label><br/>
            <label>Number of seats
                <input id={"numOfSeats"} ref={numOfSeats}/>
            </label><br/>
            <label>Trunk Capacity
                <input id={"trunkCapapity"} ref={trunkCapacity}/>
            </label><br/>
            <label>Price per day
                <input id={"pricePerDay"} ref={pricePerDay}/>
            </label><br/>
            <button onClick={uploadData} id={"uploadVehicleDetails"}>upload data</button><br/>
        </div>
    );
}

export default UploadCarData;
