import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./article.css";
import Button from "../header/Button";


const Article = (props) => {
    const [text, setText] = useState();
    const [title, setTitle] = useState();
    const [imageSource, setImageSource] = useState();
    const [buttonText, setButtonText] = useState();
    const [pictureSide, setPictureSide] = useState();

    useEffect(() => {
        setTitle(props.title)
        setText(props.text)
        setImageSource(props.imageSource)
        setButtonText(props.buttonText)
        setPictureSide(props.pictureSide)
    },[])

    const renderImage = (side) => {
        if(pictureSide === side){
            return(
                <img src={imageSource}></img>
            )
        }
    }

    return (
        <div id="articleContainer">    
                {renderImage("left")}
            <div id="textContainer">
                <h1 id="articleTitle">{title}</h1>
                <p id="articleText">{text}</p>
                <Link to={props.link}><Button text={buttonText}/></Link>
            </div>
            {renderImage("right")}
        </div>
    );
};

export default Article;