import React, {useContext, useRef} from 'react';
import AuthContext from "../../../context/authContext";
import "./UploadCarData.css"

function UploadCarData() {

    let {user} = useContext(AuthContext);
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
        if(user === null){
            alert("Please log in first");
        }
        else{
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
                alert("data uploaded!");
            }
        }

    }

    return (
        <div className={"car-data-container"}>
            <div className={"car-data-input-container"}>
                <div className={"car-data-header"}> About your car:</div>
                <div className='inputBox'>
                    <input type="text" id={"description"} required="required" ref={description}/>
                    <span>Description</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="text" id={"carType"} required="required" ref={carType}/>
                    <span>Car type</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="text" id={"color"} required="required" ref={color}/>
                    <span>Color</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="text" id={"brand"} required="required" ref={brand}/>
                    <span>Brand</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="text" id={"model"} required="required" ref={model}/>
                    <span>Model</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="text" id={"fuel"} required="required" ref={fuel}/>
                    <span>Fuel</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="text" id={"address"} required="required" ref={address}/>
                    <span>Address</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="number" id={"vintage"} required="required" ref={vintage}/>
                    <span>Vintage</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="number" id={"numOfSeats"} required="required" ref={numOfSeats}/>
                    <span>Number of seats</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="number" id={"trunkCapapity"} required="required" ref={trunkCapacity}/>
                    <span>Trunk Capacity</span>
                    <i></i>
                </div>
                <div className='inputBox'>
                    <input type="number" id={"pricePerDay"} required="required" ref={pricePerDay}/>
                    <span>Price per day</span>
                    <i></i>
                </div>
            </div>
            <div>
                <button className={"glow-on-hover"} onClick={uploadData} id={"uploadVehicleDetails"}>upload data</button><br/>
            </div>
        </div>
    );
}

export default UploadCarData;
