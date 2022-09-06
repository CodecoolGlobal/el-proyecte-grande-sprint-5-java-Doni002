import {useEffect, useState} from "react";
import defaultPicture from "../img/defaultProfile.jpg";

function ProfilePicture(props){
    const path = props.img;
    const [img, setImg] = useState(undefined);
    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`http://localhost:8080/api/image/userProfile/${path}`);
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
        };

        fetchImage().then();
    }, [props.img, path]);

    if(img === undefined || path === undefined){
        return (<img className={"hostImage"} src={defaultPicture} alt=""/>)
    }
    return(<img className={"hostImage"} src={img} alt=""/>)
}
export default ProfilePicture;