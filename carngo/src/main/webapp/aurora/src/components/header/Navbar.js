import {Link} from "react-router-dom";
import { Parallax } from 'react-parallax';

import AudiFront from "../img/Audi Front.jpg"
import './Navbar.css';

const Navbar = () => {
    return (
        <Parallax className='image' bgImage={AudiFront} strength={800}>
            <div className='navbar'>
                <Link to="/">Aurora</Link>
                <Link to="/shareyourcar"> <button>Share your car</button> </Link>
                <Link to="/vehicles"> <button>Vehicles</button> </Link>
                <Link to="/contact"> <button>Contact us</button> </Link>
                <Link to="/profile"> <button>Profile</button> </Link>
            </div>
            <div className='content'>
                <span className="img-txt">The world of <strong>Aurora</strong> is now</span>
            </div>
        </Parallax>
    );
};

export default Navbar;