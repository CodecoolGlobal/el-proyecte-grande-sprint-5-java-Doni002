import React from 'react';
import {Parallax} from "react-parallax";
import {useEffect, useState} from 'react';
import TextBox from "./textBox";

import "./slideshow.css";

import Bentley from "../img/slideShowImg/bentley-small.jpg";
import MercedesKey from "../img/slideShowImg/mercedesKey-small.jpg"
import Lamborghini from "../img/slideShowImg/Lamborghini-small.jpg";


const Slideshow = () => {

    const elements = [
        {
            heading: "You are in the right place if ...",
            paragraph: "looking for a luxury car for a special event (dating, bachelorette party, filming, photography)",
            imageSource: Bentley
        },
        {
            heading: "You are in the right place if ...",
            paragraph: "You don't have your own car, but you're about to travel by car to countryside or abroad",
            imageSource: MercedesKey
        },
        {
            heading: "You are in the right place if ...",
            paragraph: "your own car is broken",
            imageSource: Lamborghini
        }
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((v) => {
                return v === elements.length - 1 ? 0 : v + 1;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <TextBox heading={elements[index].heading} paragraph={elements[index].paragraph} imageSource ={elements[index].imageSource}/>
            <Parallax className='image' bgImage={elements[index].imageSource} strength={-300}>
            </Parallax >
        </>
    );
};

export default Slideshow;
