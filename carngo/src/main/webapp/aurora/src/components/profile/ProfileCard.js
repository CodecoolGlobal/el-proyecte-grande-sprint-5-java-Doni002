import React from 'react';
import defaultPicture from '../img/defaultProfile.jpg';
import {useEffect, useState} from "react";

const ProfileCard = (props) => {
    const userData = props.userData;
    const [img, setImg] = useState(undefined);
    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`http://localhost:8080/api/image/userProfile/${userData.imageSource}`);
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
        };
        fetchImage().then();
    }, [props.userData, userData]);

    let profileImage = defaultPicture;
    let profileDescription = "";
    let numberOfCars = 0;
    let name = "";
    if(img !== undefined){
        profileImage = img;
    }
    if(userData !==undefined){
        profileDescription = userData.profileDescription;
        numberOfCars = userData.numberOfCars;
        name = userData.name;
    }
    return (
        <>
            <div className="card">
                <div className="card-header"
                     style={{
                         backgroundImage: `url(${profileImage})`
                     }}
                >
                    <div className="card-header-bar">
                        <a href="#" className="btn-message"><span className="sr-only">Message</span></a>
                    </div>

                    <div className="card-header-slanted-edge">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
                            <path className="polygon" d="M-20,200,1000,0V200Z"/>
                        </svg>
                        <a href="#" className="btn-follow"><span className="sr-only">Follow</span></a>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="name">{name}</h2>
                    <h4 className="job-title">1# Host in Budapest</h4>
                    <div className="bio">{profileDescription}</div>
                </div>
                <div className="card-footer">
                    <div className="stats">
                        <div className="stat">
                            <span className="label">Cars</span>
                            <span className="value">{numberOfCars}</span>
                        </div>
                        <div className="stat">
                            <span className="label">Followers</span>
                            <span className="value">93023</span>
                        </div>
                        <div className="stat">
                            <span className="label">Likes</span>
                            <span className="value">3m+</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;