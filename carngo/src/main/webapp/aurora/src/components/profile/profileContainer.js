import React from 'react';
import {Parallax} from "react-parallax";

import palmRoad from '../img/profileImg/palmRoad.jpg'

import ProfileCard from "./ProfileCard";
import CarGallery from "./CarGallery";
import {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom"
import AuthContext from "../../context/authContext";


const ProfileContainer = (props) => {
    const userId = props.userId;
    const cars = props.cars;
    const [userData, setUserData] = useState(undefined);
    const navigate = useNavigate();

    const {setUser} = useContext(AuthContext);

    const logout = () => {
        localStorage.clear();
        setUser(null);
        navigate("/");
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `/api/users/${userId}`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setUserData(actualData);
        }
        getData().catch(reason => {console.log(reason)});
    }, [props.userId]);
    if(userData === undefined){
        return (
            <div className="pageContainer">
                <Parallax bgImage={palmRoad} strength={-400}>
                    <section className="profileContainer">
                        <div className="profileLeftCol">
                            <div className="driverProfileDetails">
                                <div className="driverStats">

                                </div>
                            </div>
                        </div>
                    </section>
                </Parallax>
                <section className="driverProfileSection">
                    <div className="driverVehicles">
                        {Object.keys(cars).length !== 0 && <div className="gallery">
                            {
                                cars.map(item => {
                                    return(
                                        <div key={item.id}>
                                            <CarGallery carId={item.id} img={item.imageSource} brand={item.brand} model={item.model}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        }
                    </div>
                </section>
            </div>
        );
    }
    return (
        <div className="pageContainer">
            <Parallax bgImage={palmRoad} strength={-400}>
            <section className="profileContainer">
                <div className="profileLeftCol">
                    <div className="driverProfileDetails">
                        <div className="driverStats">
                            <ProfileCard userData={userData}/>
                        </div>
                    </div>
                </div>
                <button className="logoutButton" onClick={logout}>Log out</button>
            </section>
            </Parallax>
            <section className="driverProfileSection">
                <div className="driverVehicles">
                    {Object.keys(cars).length !== 0 && <div className="gallery">
                        {
                            cars.map(item => {
                                return(
                                    <div key={item.id}>
                                        <CarGallery carId={item.id} img={item.imageSource} brand={item.brand} model={item.model}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default ProfileContainer;