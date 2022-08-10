import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";
import "./statistics.css"

function ProgressBarContainer(props) {
    /*const [count, setCount] = useState(0);
    const [color, setColor] = useState("");
    const [text, setText] = useState("");*/

    const customerCount = 300;
     const customerColor = `hsl(353, 100%, 50%)`;
    const customerText = "MILLION CUSTOMER"
    const vehicleCount = 100;
    const vehicleColor = "hsl(241, 100%, 50%)";
    const vehicleText = "MILLION VEHICLE"
    const countryCount = 85;
    const countryColor = "hsl(89, 100%, 29%)";
    const countryText = "COUNTRY"
    const journeyCount = 150;
    const journeyColor = "hsl(52, 100%, 47%)";
    const journeyText = "MILLION JOURNEY"

    return (
        <section className={"statistics-container"}>
                <ProgressBar
                value={customerCount}
                color={customerColor}
                type = {customerText}
                />
                <ProgressBar
                value={vehicleCount}
                color={vehicleColor}
                type = {vehicleText}
                />
                <ProgressBar
                value={countryCount}
                color={countryColor}
                type = {countryText}
                />
                <ProgressBar
                value={journeyCount}
                color={journeyColor}
                type = {journeyText}
                />
        </section>
    );
}

export default ProgressBarContainer;