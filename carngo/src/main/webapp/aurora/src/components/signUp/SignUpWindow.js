import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './signUpWindow.css';


const SignUpWindow = () => {

    const [switchButton, setSwitchButton] = useState("login");

    useEffect(() => {
        document.querySelector('.blurBackground').addEventListener("click", closeModal)
    }, [])

    const setContent = (e) => {
        const target = e.target.value
        setSwitchButton(target)
        renderContent()
    }

    const closeModal = () => {
        document.querySelector('.modalContainer').style.display = "none"
        document.querySelector('body').style.overflow = "visible"
        document.querySelector('.blurBackground').style.display = "none"
    }

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const renderContent = () => {
        if(switchButton === "login"){
            return(
                <form className='modalForm' onSubmit={clickLogin}>
                    <FontAwesomeIcon onClick={ closeModal } icon={faClose} id="icon" className='modalCloseButton' />
                    <h1 className='loginWelcomeText'>Welcome Back!</h1>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={ e => setUserName(e.target.value)} value={username}/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="password" required="required" onChange={e => setPassword(e.target.value)} value={password}/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className='rememberContainer'>
                        <input id="rememberCheckbox" type='checkbox'></input>
                        <label id="checkboxLabel" htmlFor="rememberCheckbox">Remember me</label>
                    </div>
                    <button className='modalButton' type='submit' >Log In</button>
                </form>
            )
        }
        else if(switchButton === "register"){
            return(
                <form className="modalForm">
                    <FontAwesomeIcon onClick={ closeModal } icon={faClose} id="icon" className='modalCloseButton' />
                    <h1 className='loginWelcomeText'>Sign Up!</h1>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setPassword(e.target.value)}/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setPassword(e.target.value)} />
                        <span>PASSWORD</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setConfirmPassword(e.target.value)}/>
                        <span>CONFIRM PASSWORD</span>
                        <i></i>
                    </div>
                    <button className='modalButton'>Register</button>
                </form>
            )
        }
    }
    const clickLogin = async (e) => {
        e.preventDefault();
        const user = await fetch ('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            'email': username,
            'password': password
        }),
    })
        if (user.ok) {
            await user.json();
            localStorage.setItem("user", user);
        }
        ;
    }

    return (
        <div className='modalContainer'>
            <div className="signUpSwitchContainer">
                <input type="radio" id="login" name="switch-one" value="login" onClick={setContent} className={switchButton === 'login' ? "signUpActive" : ""} checked/>
                <label id="loginLabel" htmlFor="login">Log In</label>
                <input type="radio" id="register" name="switch-one" value="register" onClick={setContent} className={switchButton === 'register' ? "signUpActive" : ""} />
                <label id="registerLabel" htmlFor="register">Register</label>
            </div>
            {renderContent()}
        </div>
    );
}

export default SignUpWindow;