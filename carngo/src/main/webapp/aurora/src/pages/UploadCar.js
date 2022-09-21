import React from 'react';
import UploadCarPicture from "../components/vehicle/uploadCar/UploadCarPicture";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

function UploadCar() {
    return (
        <>
            <div style={{backgroundColor: "black"}}>
                <Navbar />
            </div>
            <div className="uploadCarContainer">
                <UploadCarPicture />
            </div>
            <Footer />
        </>
    );
}

export default UploadCar;
