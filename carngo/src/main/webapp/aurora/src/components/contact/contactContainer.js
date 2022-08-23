import React, {useEffect, useState} from 'react';
import './contact.css';

const ContactContainer = (props) => {

    const contactInfos = [
        {
            textType : "Email",
            textValue : "aurora@carngo.com"
        },
        {
            textType : "Phone",
            textValue : "+36309504060"
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
        <div className="content">
            <div className="contactInfo">
                <ul>
                    <li><p>{contactInfos[0].textType}</p></li>
                    <li><p>{contactInfos[0].textValue}</p></li>
                </ul>
                <ul>
                    <li><p>{contactInfos[1].textType}</p></li>
                    <li><p>{contactInfos[1].textValue}</p></li>
                </ul>
                <div className="contactUsContainer">
                    <h1>{header}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;