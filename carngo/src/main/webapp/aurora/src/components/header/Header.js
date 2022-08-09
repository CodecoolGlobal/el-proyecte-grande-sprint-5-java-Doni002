import {Parallax} from "react-parallax";
// import AudiBack from "../img/Audi Back.jpg";
import AudiFront from "../img/Audi Front.jpg";

import Navbar from "./Navbar";
import Content from "./Content";


const Header = () => {
    return (
        <>
            <Parallax className='image' bgImage={AudiFront} strength={800}>
                <Navbar />
                <Content />
            </Parallax>
        </>
    );
};

export default Header;