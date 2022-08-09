import React from 'react';
import { Card } from 'react-bootstrap';

function CategoryCard(props) {
    const message = props.message;
    const imgSrc = props.imgSrc;
    const messageImgSrc = props.messageImgSrc;

    return (
        <Card className="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={imgSrc} height="300vw"/>
            </div>
            <Card.Body className="display-flex">
                <div>
                    <img alt="image" src={messageImgSrc}/>
                </div>
                <div>
                    <Card.Title>{message}</Card.Title>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CategoryCard;
