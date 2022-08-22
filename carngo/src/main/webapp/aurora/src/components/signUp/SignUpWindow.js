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

    const closeModal = () => {
        document.querySelector('.modalContainer').style.display = "none"
        document.querySelector('body').style.overflow = "visible"
    }

    const renderContent = () => {
        if(switchButton === "login"){
            return(
                <form className='modalForm'>
                    <FontAwesomeIcon onClick={ closeModal } icon={faClose} id="icon" className='modalCloseButton' />
                    <h1 className='loginWelcomeText'>Welcome Back!</h1>
                    <div className='inputBox'>
                        <input type="text" required="required"/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="password" required="required"/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className='rememberContainer'>
                        <input id="rememberCheckbox" type='checkbox'></input>
                        <label id="checkboxLabel" for="rememberCheckbox">Remember me</label>
                    </div>
                    <button className='modalButton'>Log In</button>
                </form>
            )
        }
        else if(switchButton === "register"){
            return(
                <form className="modalForm">
                    <FontAwesomeIcon onClick={ closeModal } icon={faClose} id="icon" className='modalCloseButton' />
                    <h1 className='loginWelcomeText'>Sign Up!</h1>
                    <div className='inputBox'>
                        <input type="text" required="required"/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required"/>
                        <span>PASSWORD</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required"/>
                        <span>CONFIRM PASSWORD</span>
                        <i></i>
                    </div>
                    <button className='modalButton'>Register</button>
                </form>
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