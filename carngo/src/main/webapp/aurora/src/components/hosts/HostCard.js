
import {GiRoundStar} from 'react-icons/gi';
import ProfilePicture from "../imageFetch/ProfilePicture.js";
import {Link} from "react-router-dom";

function HostCard(props) {
    const host = props.host;
    return (
        <div>
            <Link to={"/profile/" + host.user.id}>
                <ProfilePicture img={host.user.imageSource}/>
            </Link>
            <div className={"vText"}><GiRoundStar />{host.user.name}</div>
        </div>
    );
}

export default HostCard;
