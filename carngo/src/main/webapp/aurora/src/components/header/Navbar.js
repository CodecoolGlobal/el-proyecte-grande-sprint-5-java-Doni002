import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to="/">Aurora</Link>
            <Link to="/shareyourcar"> <button>Share your car</button> </Link>
            <Link to="/vehicles"> <button>Vehicles</button> </Link>
            <Link to="/contact"> <button>Contact us</button> </Link>
            <Link to="/profile"> <button>Profile</button> </Link>
        </>
    );
};

export default Navbar;