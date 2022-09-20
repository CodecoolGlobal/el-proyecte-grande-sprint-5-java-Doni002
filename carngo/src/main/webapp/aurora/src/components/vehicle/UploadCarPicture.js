import React, {useEffect, useState} from 'react';
import './UploadCarPicture.css';


function UploadCarPicture() {
    const [image, setImage] = useState();

    const uploadImage = async ()=> {
        const formData = new FormData();
        formData.append("file", image);
        let response = await fetch("/api/vehicles/shareyourcar", {
            method: "post",
            body: formData
        });
        if(response.status == 200) {
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
            <input
                onChange={previewImage}
                className={"uploadField"}
                accept={"image/*"}
                type={"file"}
                multiple
            />
        <div className={"previewContainer"}/>
            <button className={"uploadButton"} onClick={uploadImage}>upload</button>
        </div>
    );
}

export default UploadCarPicture;
