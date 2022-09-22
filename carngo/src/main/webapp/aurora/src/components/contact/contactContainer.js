import React, {useEffect, useState} from 'react';
import './contact.css';

import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";
import {motion} from 'framer-motion';

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
            phoneValue : "+36306257595"
        }
    ]

    const [header, setHeader] = useState();
    const [text, setText] = useState();

    const {ref, inView} = useInView({
        threshold: 0
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start('visible');
        }
        if(!inView){
            animation.start('hidden');
        }
    }, [animation, inView]);

    const animationVariants = {
        hidden: { scale: 0, opacity: 0},
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    };

    useEffect( () => {
        setHeader(props.header);
        setText(props.text);
        }
    )

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={animationVariants}
        >
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
        </motion.div>
    );
};

export default ContactContainer;
