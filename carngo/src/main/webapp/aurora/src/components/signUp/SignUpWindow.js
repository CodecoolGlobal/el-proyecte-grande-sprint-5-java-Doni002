import {useState, useEffect, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './signUpWindow.css';
import AuthContext from "../../context/authContext";

const SignUpWindow = () => {
    const {setUser} = useContext(AuthContext);

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState("");

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
                <form className="modalForm" onSubmit={clickRegister}>
                    <FontAwesomeIcon onClick={ closeModal } icon={faClose} id="icon" className='modalCloseButton' />
                    <h1 className='loginWelcomeText'>Sign Up!</h1>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setUserName(e.target.value)} value={username}  />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setName(e.target.value)} value={name}  />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setEmail(e.target.value)} value={email}  />
                        <span>E-mail</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setPassword(e.target.value)} value={password}/>
                        <span>PASSWORD</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="text" required="required" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
                               onBlur={validatePassword}/>
                        <span>CONFIRM PASSWORD</span>
                        <i></i>
                    </div>
                    {error && <span className='error'>{error}</span>}
                    <button className='modalButton'  type='submit' >Register</button>
                </form>
            )
        }
    }
    const validatePassword = (e) => {
        if (password !== confirmPassword) {
            setError("Password and Confirm Password does not match.");
        } else {
            setError("");
        }

    }
    const clickRegister = async (e) => {
        e.preventDefault();
        const payload = {
            'username': username,
            'name': name,
            'password': password,
            'email': email
        }
        const registeredUser = await getUserData('/api/users/register', payload);
        if (registeredUser) {
            clickLogin(e);
        }
    }

    const clickLogin = async (e) => {
        e.preventDefault();
        const payload = {
            'username': username,
            'password': password
        };
        const user = await getUserData('/login', payload);
        if (user.accessToken) {
            localStorage.setItem("user", JSON.stringify(user));
            setProfile(user);
            closeModal();
        }
     }
    const setProfile = (user) => {
        setUser(user);
    }
    const getUserData = async (url, payload) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"},
            body: JSON.stringify(payload),
        })
        return await response.json();}

    return (
        <div className='modalContainer'>
            <div className="signUpSwitchContainer">
                <input type="radio" id="login" name="switch-one" value="login" onClick={setContent} className={switchButton === 'login' ? "signUpActive" : ""} defaultChecked={true}/>
                <label id="loginLabel" htmlFor="login">Log In</label>
                <input type="radio" id="register" name="switch-one" value="register" onClick={setContent} className={switchButton === 'register' ? "signUpActive" : ""} />
                <label id="registerLabel" htmlFor="register">Register</label>
            </div>
            {renderContent()}
        </div>
    );
}

export default SignUpWindow;