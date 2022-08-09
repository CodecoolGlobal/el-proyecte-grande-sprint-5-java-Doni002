import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook , faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"
import footerPicture from "../img/footerCar.jpg"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footerUpperContainer">
                <div className='newsletterContainer'>
                    <h1 className="footerText">Subscribe to our Newsletter!</h1>
                    <input type="text" className='footerInput' placeholder='Email'></input>
                    <FontAwesomeIcon icon={faPaperPlane} id="sendIcon" />
                </div>
                <img className="footerImage" src={footerPicture}></img>
            </div>
            <div className="footerTextContainer">
                <h1 className="footerText" id="footerAurora">Aurora</h1>
                <div className="column1">
                    <Link to="/" className="footerLink">About</Link>
                    <Link to="/" className="footerLink">Contact Us</Link>
                    <Link to="/" className="footerLink">Docs</Link>
                </div>
                <div className="column2">
                    <Link to="/" className="footerLink">Terms and Conditions</Link>
                    <Link to="/" className="footerLink">Privacy Policy</Link>
                    <Link to="/" className="footerLink">Cookie Policy</Link>
                </div>
                <div className="column3">
                    <h2 className="footerText">Let's Chat!</h2>
                    <div className='iconContainer'>
                        <FontAwesomeIcon icon={faFacebook} id="icon" />
                        <FontAwesomeIcon icon={faInstagram} id="icon" />
                        <FontAwesomeIcon icon={faTwitter} id="icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;