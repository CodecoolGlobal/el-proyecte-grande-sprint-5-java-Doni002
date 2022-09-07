import React from 'react';
import RolandMarton from '../img/contactUsImg/RolandMarton.jpeg';

const ProfileCard = () => {
    return (
        <>
            <div className="card">
                <div className="card-header"
                     style={{
                         backgroundImage: `url(${RolandMarton})`
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
                    <h2 className="name">Roland Martin</h2>
                    <h4 className="job-title">1# Host in Budapest</h4>
                    <div className="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos, aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos, aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos, aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos, aperiam.
                    </div>
                </div>
                <div className="card-footer">
                    <div className="stats">
                        <div className="stat">
                            <span className="label">Cars</span>
                            <span className="value">12</span>
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