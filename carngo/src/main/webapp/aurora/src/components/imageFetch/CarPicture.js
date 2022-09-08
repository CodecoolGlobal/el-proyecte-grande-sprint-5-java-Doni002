import {useEffect, useState} from "react";
import defaultPicture from "../img/defaultProfile.jpg";

function CarPicture(props){
    const path = props.img;
    let className = "";
    if(props.className !== undefined){
        className = props.className;
    }
    const [img, setImg] = useState(undefined);
    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(`http://localhost:8080/api/image/carProfile/${path}`);
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
        };

        fetchImage().then();
    }, [props.img, path]);

    if(img === undefined || path === undefined){
        return (<img src={defaultPicture} alt=""/>)
    }
    return(<img className={className} src={img} alt=""/>)
}
export default CarPicture;