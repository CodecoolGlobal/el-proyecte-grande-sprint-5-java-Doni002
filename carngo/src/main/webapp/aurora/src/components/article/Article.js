import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from "../header/Button";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./article.css";

import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion";

const Article = (props) => {
    const [text, setText] = useState();
    const [animation, setAnimation] = useState();
    const [title, setTitle] = useState();
    const [imageSource, setImageSource] = useState();
    const [buttonText, setButtonText] = useState();
    const [pictureSide, setPictureSide] = useState();
    const [link, setLink] = useState();
    const [textColor, setTextColor] = useState("black");
    const [hashTags, setHashTags] = useState("");

    const {ref, inView} = useInView({
        threshold: 0
    });

    const animationFromLeft = useAnimation();
    const animationFromRight = useAnimation();

    useEffect(() => {
        if(inView) {
            animationFromLeft.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                },
        });

            animationFromRight.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                },
            });
        }
        if(!inView){
            animationFromLeft.start({x: '-100vw'})
            animationFromRight.start({x: '100vw'})
        }
}, [inView]);


    useEffect(() => {
        setAnimation(props.animation);
        setTitle(props.title)
        setText(props.text)
        setImageSource(props.imageSource)
        setButtonText(props.buttonText)
        setPictureSide(props.pictureSide)
        setTextColor(props.textColor)
        setLink(props.link)
        setHashTags(props.hashTags)
    },[])

    const renderImage = (side) => {
        if(pictureSide === side){
            return(
                <LazyLoadImage id="articleImg" src={imageSource}></LazyLoadImage>
            )
        }
    }

    const renderLink = () => {
        return props.link === "vehicles" ? (<Link to={props.link}><Button text={buttonText}/></Link>) : (<a href={props.link}><Button text={buttonText}/></a>);
    }

    return (
        <motion.div
            animate={animation === "animationFromLeft" ? animationFromLeft : animationFromRight}
            // animate={animationFromLeft}
            ref={ref}
        >
            <div id="articleContainer">
                    {renderImage("left")}
                <div style={{color: textColor}} id="textContainer">
                    <h1 id="articleTitle">{title}</h1>
                    <p id="articleText">{text}</p>
                    <p style={{wordSpacing : "1rem", textAlign : "center"}}>{hashTags}</p>
                    {renderLink()}
                </div>
                {renderImage("right")}
            </div>
        </motion.div>

    );
};

export default Article;
