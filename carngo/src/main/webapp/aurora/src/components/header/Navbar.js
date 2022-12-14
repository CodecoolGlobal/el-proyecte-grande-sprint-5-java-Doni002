import {Link} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import SignUpWindow from "../signUp/SignUpWindow";

import './Header.css';
import AuthContext from "../../context/authContext";

const Navbar = () => {
    let {user} = useContext(AuthContext);

    let loggedInProps = false;
    if (user != null) {
        loggedInProps = true;
    }

    const [loggedIn, setLoggedIn] = useState()

    useEffect(() => {
      setLoggedIn(loggedInProps)
    }, [user])

    const addRoute = () => {
        return (loggedIn ?  `/profile/${user.id}` : "#");
    }
    const addRouteCar = () => {
        return (loggedIn ?  "/shareyourcar" : "#");
    }

    const renderSignUpModal = () => {
        if(!loggedIn){
            document.querySelector('.modalContainer').style.display = "unset"
            document.querySelector('body').style.overflow = "hidden"
            document.querySelector('.blurBackground').style.display = "unset"
        }
    }

    return (
        <>
            <nav>
                <li className="logo"><Link to="/"><h1>Aurora</h1></Link></li>
                <ul className='menu'>
                    <li onClick={renderSignUpModal}className="item"><Link to={addRouteCar()}> <strong>Share your car</strong> </Link></li>
                    <li className="item"><Link to="/vehicles"> Vehicles </Link></li>
                    <li className="item"><Link to="/contact"> Contact us </Link></li>
                    <li onClick={renderSignUpModal} className="item"><Link to={addRoute()}>{loggedIn ? 'Profile' : 'Sign Up' }  </Link></li>
                </ul>
            </nav>
            <div className="blurBackground"></div>
            <SignUpWindow />
        </>

    );
};

export default Navbar;