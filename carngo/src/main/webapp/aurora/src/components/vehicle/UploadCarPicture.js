import React, {useEffect, useState} from 'react';
import './UploadCarPicture.css';

function UploadCarPicture(props) {
    const [images, setImages] = useState([]);

    const uploadImages = ()=> {
        console.log(images);
    }

    const previewImage = () => {
        const files = document.querySelector(".uploadField").files[0];
        setImages(images => [...images, files]);
        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
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
            />
        <div className={"previewContainer"}></div>
            <button className={"uploadButton"} onClick={uploadImages}>upload</button>
        </div>
    );
}

export default UploadCarPicture;
