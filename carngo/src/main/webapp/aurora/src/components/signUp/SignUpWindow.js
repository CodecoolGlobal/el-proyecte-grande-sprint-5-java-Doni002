import './signUpWindow.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignUpWindow = () => {

    const [switchButton, setSwitchButton] = useState("login");

    const setContent = (e) => {
        const target = e.target.value
        setSwitchButton(target)
        renderContent()
    }

    const renderContent = () => {
        if(switchButton === "login"){
            return(
                <form className='loginForm'>
                    <Link to="/"><FontAwesomeIcon icon={faClose} id="icon" className='modalCloseButton' /> </Link>
                    <h1 className='loginWelcomeText'>Welcome back!</h1>
                    <input className='loginUsername' placeholder='Username'></input>
                    <input className='loginPassword' placeholder='Password'></input>
                    <div className='rememberContainer'>
                        <input id="rememberCheckbox" type='checkbox'></input>
                        <label id="checkboxLabel" for="rememberCheckbox">Remember me</label>
                    </div>
                    <button className='loginButton'>Log In</button>
                </form>
            )
        }
        else if(switchButton === "register"){
            return(
                <p style={{color:"white"}}>coming soon</p>
            )
        }
    }

    return (
        <div className='modalContainer'>
            <div class="signUpSwitchContainer">
                <input type="radio" id="login" name="switch-one" value="login" onClick={setContent} className={switchButton === 'login' ? "signUpActive" : ""} checked/>
                <label id="loginLabel" for="login">Log In</label>
                <input type="radio" id="register" name="switch-one" value="register" onClick={setContent} className={switchButton === 'register' ? "signUpActive" : ""} />
                <label id="registerLabel" for="register">Register</label>
            </div>
            {renderContent()}
        </div>
    );
}

export default SignUpWindow;