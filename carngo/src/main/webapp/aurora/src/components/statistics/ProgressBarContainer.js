import React from 'react';
import ProgressBar from "./ProgressBar";
import "./statistics.css"

function ProgressBarContainer() {
    const customerCount = 300;
     const customerColor = `hsl(37, 100%, 50%)`;
    const customerText = "MILLION CUSTOMERS"
    const vehicleCount = 100;
    const vehicleColor = "hsl(18,100%,50%)";
    const vehicleText = "MILLION VEHICLES"
    const countryCount = 85;
    const countryColor = "hsl(0,85%,29%)";
    const countryText = "COUNTRIES"
    const journeyCount = 150;
    const journeyColor = "hsl(18,63%,52%)";
    const journeyText = "MILLION JOURNEY"

    return (
        <section className={"statistics-container"}>
                <ProgressBar
                count={customerCount}
                color={customerColor}
                type = {customerText}
                />
                <ProgressBar
                count={vehicleCount}
                color={vehicleColor}
                type = {vehicleText}
                />
                <ProgressBar
                count={countryCount}
                color={countryColor}
                type = {countryText}
                />
                <ProgressBar
                count={journeyCount}
                color={journeyColor}
                type = {journeyText}
                />
        </section>
    );
}

export default ProgressBarContainer;