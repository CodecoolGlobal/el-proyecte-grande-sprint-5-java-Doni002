import "./toggleArticle.css"
import { useState } from "react";

const ToggleArticle = () => {

    const [switchButton, setSwitchButton] = useState("guest");

    const setContent = (e) => {
        const target = e.target.value
        setSwitchButton(target)
        renderContent()
    }

    const renderContent = () => {
        if(switchButton === "guest"){
            return(
            <h1 className="taArticle">
                1) Car search<br/><br/>
                <span className="taText">
                    Specify where and when you want to rent a car and you can immediately see all the cars you can book.
                    You can see the conditions of the car on the terms and conditions.<br/><br/>
                </span>
                2) Create Profile<br/><br/>
                <span className="taText">
                    The first step in renting a car is to create a profile.
                    All you need for this is your basic information, your driving license and your credit card.<br/><br/>
                </span>
                3) Reservation<br/><br/>
                <span className="taText">
                    The car can be booked after entering your details. Payment is 100% online at SimplePay.
                    The Host may accept or reject the submitted booking request. In case of rejection,
                    the booking fee will be released to your account immediately.<br/><br/>
                </span>
                4) Picking up the car<br/><br/>
                <span className="taText">
                You can decide the location of the car pickup at the time of booking.
                    The Rental Agreement and the takeover report are also created online.
                    All you have to do is review the car to see if it meets your needs and start renting through the platform.<br/><br/>
                </span>
                5) Returning the car<br/><br/>
                <span className="taText">
                    The car must be returned to the same location where the pickup took place,
                    in the same condition.<br/><br/>
                </span>
                6) Rating<br/><br/>
                <span className="taText">
                    After the rental, you have the opportunity to rate the car and the Host's service. 
                    Please do not miss this, as your experience can be valuable to others.
                </span>
            </h1>
            ) 
        }
        else if(switchButton === "host"){
            return(
            <h1 className="taArticle">
                1) Sharing your car<br/><br/>
                <span className="taText">
                    The first step in car registration is to create your profile. After that, all
                    you need is basic information about your car and some well-done pictures.<br/><br/>
                </span>
                2) Reservation<br/><br/>
                <span className="taText">
                    The booking requirements for the cars are decided by who you rent your
                    car to.<br/><br/>
                </span>
                3) Car handover<br/><br/>
                <span className="taText">
                    You can pick up your car at the transfer points you specify. Please hand
                    over your car in a condition in which you would like to take it over!<br/><br/>
                </span>
                4) Returning the car<br/><br/>
                <span className="taText">
                When returning the car, check the condition of your car.<br/><br/>
                </span>
                5) Rating<br/><br/>
                <span className="taText">
                    After the rental, you have the opportunity to rate the Tenant. Please do
                    not miss this, as your experience can be valuable to others.
                </span>
            </h1>
            ) 
        }
    }

    const renderImage = () => {
        if(switchButton === "guest"){
            return <img className="taPicture" src="https://images.unsplash.com/photo-1580881647059-923632b8fd75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
        }
        else if(switchButton === "host"){
            return <img className="taPicture" src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
            
        }
    }
    


    return (
        <div className="taContainer">
            <div className="taleContainer">
                <h1 className="taTitle">How it works?</h1>
            </div>
            <div className="tacontentContainer">                    
                <div class="switch-field">
                    <input type="radio" id="radio-one" name="switch-one" value="guest" onClick={setContent} className={switchButton === 'guest' ? "active" : ""} checked/>
                    <label for="radio-one">As a Guest</label>
                    <input type="radio" id="radio-two" name="switch-one" value="host" onClick={setContent} className={switchButton === 'host' ? "active" : ""} />
                    <label for="radio-two">As a Host</label>
                </div>
                <div className="taTextContainer">

                    {renderContent()}
                    <div className="taImageContainer">
                        {renderImage()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToggleArticle;