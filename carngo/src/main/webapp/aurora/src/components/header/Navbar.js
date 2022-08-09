import {Link} from "react-router-dom";

import './Header.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='menu'>
                    <li className="logo"><Link to="/"><h1>Aurora</h1></Link></li>
                    <li className="item"><Link to="/shareyourcar"> Share your car </Link></li>
                    <li className="item"><Link to="/vehicles"> Vehicles </Link></li>
                    <li className="item"><Link to="/contact"> Contact us </Link></li>
                    <li className="item"><Link to="/profile"> Profile </Link></li>
                </ul>
            </nav>
        </>

    );
};

export default Navbar;