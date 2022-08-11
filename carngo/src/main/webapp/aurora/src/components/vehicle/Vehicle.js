import React from 'react';


const Vehicle = (props) => {
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
        image: "../img/Audi-RS.jpg"
    }
    return (
        <>
            <div>{vehicle.image}</div>
            <div>{vehicle.description}</div>
            <div>{vehicle.carType}</div>
            <div>{vehicle.color}</div>
            <div>{vehicle.brandId}</div>
            <div>{vehicle.model}</div>
            <div>{vehicle.fuel}</div>
            <div>{vehicle.vintage}</div>
            <div>{vehicle.numOfSeats}</div>
            <div>{vehicle.trunkCapacity}</div>
            <div>{vehicle.pricePerDay}</div>
            <div>{vehicle.numOfReservations}</div>
            <div>{vehicle.userId}</div>
        </>
    );
};

export default Vehicle;