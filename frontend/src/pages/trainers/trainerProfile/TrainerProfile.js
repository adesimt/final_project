import Header from "../../../components/Header";
import ProfileBanner from "../../../components/profileBanner/ProfileBanner";
import SubBanner from "../../../components/SubBanner";
import { specs, offeredClasses } from '../../../files/profileFiles';
import '../../../files/Profile.css';

const TrainerProfile = () => {
    return ( 
        <>

            <div className="main_page">
                <Header />
                <ProfileBanner />
                <SubBanner name = 'Trainers' subNumber1 = '4' subNumber2 = '3'/>

                <div className="profile_info">
                    <div className="profile_section">
                        <div className="profile_Section_title">About me</div>
                        <p className="about_me_para">
                            Madison is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework and professional development.
                        </p>
                    </div>
                    <div className="profile_section">
                        <div className="profile_Section_title">Specializations</div>
                        <div className="specs_container">
                            {specs.map((item, index) => {
                                return <div className="specs" key={index}>{item}</div>
                            })}
                        </div>
                        
                    </div>
                    <div className="profile_section">
                        <div className="profile_Section_title">Offered classes</div>
                        <div className="offer_container">
                            {offeredClasses.map((item, index) => {
                                return <div className="my_classes" key={index}>{item}</div>
                            })}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default TrainerProfile;