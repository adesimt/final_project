import Header from "../../../components/Header";
import ProfileBanner from "../../../components/profileBanner/ProfileBanner";
import SubBanner from "../../../components/SubBanner";
import { specs, offeredClasses} from "../../../files/profileFiles";

const ClientProfile = () => {
    return ( 
        <>

            <div className="main_page">
                <Header />
                <ProfileBanner />
                <SubBanner name = 'Client' subNumber1 = '3' subNumber2 = '3'/>

                <div className="profile_info">
                    <div className="profile_section">
                        <div className="profile_Section_title">Height</div>
                        <p className="dim_para">
                            5 ft 1 in
                        </p>
                    </div>
                    <div className="profile_section">
                        <div className="profile_Section_title">About me</div>
                        <p className="dim_para">
                            180 lbs
                        </p>
                    </div>
                    <div className="profile_section">
                        <div className="profile_Section_title">Fitness goals</div>
                        <div className="specs_container">
                            {specs.map((item, index) => {
                                return <div className="specs" key={index}>{item}</div>
                            })}
                        </div>
                        
                    </div>
                    <div className="profile_section">
                        <div className="profile_Section_title">Enrolled classes</div>
                        <div className="offer_container">
                            {offeredClasses.map((item, index) => {
                                return <div className="classes" key={index}>{item}</div>
                            })}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ClientProfile;