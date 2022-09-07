import React from 'react';
import { Card } from 'react-bootstrap';
import './CategoryCard.css';
import {Link} from "react-router-dom";

function CategoryCard(props) {
    const message = props.message;
    const imgSrc = props.imgSrc;
    const messageImgSrc = props.messageImgSrc;

    return (
        <Card className="category-glow-on-hover">
            <div>
                <Card.Img className="categoryCardImg" src={imgSrc}/>
            </div>
            <Card.Body className="categoryCardFooterContainer">
                <div className="categoryCardSvgContainer">
                    <Link to={"/vehicles"}>
                        <img className="categoryCardSvg" alt="svg" src={messageImgSrc}/>
                    </Link>
                </div>
                <div className="categoryCardMessageContainer">
                    {message}
                </div>
            </Card.Body>
        </Card>
    );
}

export default CategoryCard;
