import React from 'react';
import { Card } from 'react-bootstrap';
import './CategoryCard.css';

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
                    <img className="categoryCardSvg" alt="svg" src={messageImgSrc}/>
                </div>
                <div className="categoryCardMessageContainer">
                    {message}
                </div>
            </Card.Body>
        </Card>
    );
}

export default CategoryCard;
