import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./article.css";
import Button from "../header/Button";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Article = (props) => {
    const [text, setText] = useState();
    const [title, setTitle] = useState();
    const [imageSource, setImageSource] = useState();
    const [buttonText, setButtonText] = useState();
    const [pictureSide, setPictureSide] = useState();
    const [link, setLink] = useState();
    const [textColor, setTextColor] = useState("black");
    const [hashTags, setHashTags] = useState("");


    useEffect(() => {
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
    );
};

export default Article;