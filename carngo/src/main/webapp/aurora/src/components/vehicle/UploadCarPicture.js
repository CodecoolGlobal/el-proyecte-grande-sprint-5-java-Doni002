import { useState, useContext } from 'react'
import './UploadCarPicture.css';
import UploadCarData from '../vehicle/UploadCarData.js'
import AuthContext from "../../context/authContext";


function UploadCarPicture() {
    const [image, setImage] = useState();
    let {user, setUser} = useContext(AuthContext);


    const uploadImage = async ()=> {
        const formData = new FormData();
        formData.append("file", image);
        let response = await fetch("/api/vehicles/upload-picture/" + user.id, {
            method: "post",
            body: formData

        });
        if(response.status === 200) {
            alert("File uploaded!")
        }
    }

    const previewImage = () => {
        const file = document.querySelector(".uploadField").files[0];
        setImage(file);
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.addEventListener("load", function () {
                const previewContainer = document.querySelector(".previewContainer");
                previewContainer.style.display = "block";
                previewContainer.innerHTML += '<img class="carPreviewPicture" src="' + this.result + '" />';
            });
        }
    }


    return (
        <div>
            <UploadCarData />
            <input
                onChange={previewImage}
                className={"uploadField"}
                accept={"image/*"}
                type={"file"}
                multiple
            />
        <div className={"previewContainer"}/>
            <button id={"uploadPictures"} onClick={uploadImage}>upload</button>
        </div>
    );
}

export default UploadCarPicture;
