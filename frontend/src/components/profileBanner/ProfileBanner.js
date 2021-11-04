import { ImLocation2 } from "react-icons/im";
import './ProfileBanner.css';


const ProfileBanner = () => {
    return ( 
        <div className="banner">
            <div className="banner_elements">
                <div className="profile_pic">
                    <img src="/images/client1.jpg" alt="client" className="profile_img"/>

                </div>
                <div className="profile_name"><h5>Susan Figueroa</h5></div>
                <div className="banner_sidenote"><p>"Every moment is a fresh beginning."</p></div>
                <div className="banner_location">
                    <div className="profile_icon"><ImLocation2 /></div>
                    <div className="profile_addr">Minneapolis, MN</div>
                </div>
                <div className="edit_profile">
                    <div className="edit_btn">Edit profile</div>
                    <div className="edit_line"></div>
                </div>

            </div>
            
        </div>
     );
}
 
export default ProfileBanner;