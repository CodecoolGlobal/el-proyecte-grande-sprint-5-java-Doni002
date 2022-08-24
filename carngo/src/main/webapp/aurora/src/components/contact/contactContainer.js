import React, {useEffect, useState} from 'react';
import './contact.css';

const ContactContainer = (props) => {

    const contactInfos = [
        {
            emailType : "Email",
            emailValue : "roland111187@gmail.com.com",
            phoneType : "Phone",
            phoneValue : "+3630945128"
        },
        {
            emailType : "Email",
            emailValue : "szabo.huszar.barbara@gmail.com",
            phoneType : "Phone",
            phoneValue : "+36301234567"
        },
        {
            emailType : "Email",
            emailValue : "alpardonat02@gmail.com",
            phoneType : "Phone",
            phoneValue : "+36301234567"
        },
        {
            emailType : "Email",
            emailValue : "zsol.pz@gmail.com ",
            phoneType : "Phone",
            phoneValue : "+36301234567"
        }
    ]

    const [header, setHeader] = useState();
    const [text, setText] = useState();

    useEffect( () => {
        setHeader(props.header);
        setText(props.text);
        }
    )
    return (
        <div className="contactUsContainer">
            <div className="contactInfo">
                <ul>
                    <li><p>{contactInfos[0].emailType}</p></li>
                    <li><p>{contactInfos[0].emailValue}</p></li>
                    <li><p>{contactInfos[1].emailValue}</p></li>
                    <li><p>{contactInfos[2].emailValue}</p></li>
                    <li><p>{contactInfos[3].emailValue}</p></li>
                </ul>
                <ul>

                    <li><p>{contactInfos[0].phoneType}</p></li>
                    <li><p>{contactInfos[0].phoneValue}</p></li>
                    <li><p>{contactInfos[1].phoneValue}</p></li>
                    <li><p>{contactInfos[2].phoneValue}</p></li>
                    <li><p>{contactInfos[3].phoneValue}</p></li>
                </ul>
            </div>
            <div className="contactUsText">
                <h1>{header}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ContactContainer;