import React from 'react';
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import {Parallax} from "react-parallax";
import Office from "../components/img/office.jpg";
import Aurora from "../components/img/aurora.jpg";
import ContactContainer from "../components/contact/contactContainer";

const Contact = () => {
    return (
        <>
            <Parallax bgImage={Aurora} strength={-350}>
                <Navbar />
                <ContactContainer
                    header = "Contact Us"
                    text = "If you have any doubt or question about Aurora, contact the customer service"
                />
            </Parallax>
            <Footer />
        </>
    );
};

export default Contact;