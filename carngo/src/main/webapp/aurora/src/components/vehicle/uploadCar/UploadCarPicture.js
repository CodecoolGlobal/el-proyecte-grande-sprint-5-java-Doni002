import { useState, useContext } from 'react'
import './UploadCarPicture.css';
import UploadCarData from '../uploadCar/UploadCarData'
import AuthContext from "../../../context/authContext";


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
                previewContainer.innerHTML += '<img class="carPreviewPicture" src="' + this.result + '" />';
            });
        }
    }


    return (
        <div>
            <div className={"car-picture-container"}>
                <h2 id="h2-subheader">Uploading Details</h2>
            </div>
            <UploadCarData />
            <div className={"car-picture-container"}>
                <h2 id="h2-subheader">Uploading Pictures</h2>
                <input
                    onChange={previewImage}
                    className={"uploadField"}
                    accept={"image/*"}
                    type={"file"}
                    multiple
                />
                <button className={"glow-on-hover"} onClick={uploadImage}>Upload Image</button>
                <h2 id="h3-subheader">Selected Photos</h2>
                <div className={"previewContainer"}/><div/>
            </div>



        </div>
    );
}

export default UploadCarPicture;
