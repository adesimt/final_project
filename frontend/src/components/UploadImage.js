import { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';


const UploadImage = () => {

    const [profilePicture, setProfilePicture] = useState(null);
    // const [error, setError] = useState(false);

    const imageHandler = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if(selected && ALLOWED_TYPES.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            // setError(true);
            console.log("file not supported");
        }
        
    }


    return ( 
        <>
            <div className="image_upload_container">
                <div className="image_upload">
                    <img src={profilePicture} alt="" className="img" />
                </div>
                <div className="camera_container">
                    <input type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler}/>
                    <div className="camera_icon">
                        <label htmlFor="input" className="image-uplaod">
                            <AiFillCamera />
                        </label>
                        
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default UploadImage;