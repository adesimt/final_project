import { ImLocation2 } from 'react-icons/im';
import { GoPrimitiveDot } from 'react-icons/go';
import '../trainer/User.css';

const Client = () => {
    return ( 
        <div className="card">
            <div className="card_image">
                <img src="/images/client1.jpg" alt="client" className="client_img"/>

            </div>
            <div className="card_info">
                <div className="card_info_container">
                    <h5 className="person_name">Greg Joseph</h5>
                    
                    <div className="person_location">
                        <div className="location_icon"><ImLocation2 /></div>
                        <div className="location_addr">Minneapolis, MN</div>

                    </div>
                    <h6>Area of Concentration:</h6>
                    <div className="specializations">

                        <div className="sp_elements_left">
                            <div className="sp_elements">
                                <div className="sp_element_icons"><GoPrimitiveDot /></div>
                                <p>Personal training</p>
                            </div>
                            <div className="sp_elements">
                                <div className="sp_element_icons"><GoPrimitiveDot /></div>                            
                                <p>HIIT</p>
                            </div>
                        </div>

                        <div className="sp_elements_right">
                            <div className="sp_elements">
                                <div className="sp_element_icons"><GoPrimitiveDot /></div>                            
                                <p>Boot camp</p>
                            </div>
                            <div className="sp_elements">
                                <div className="sp_element_icons"><GoPrimitiveDot /></div>                            
                                <p>Group training</p>
                            </div>
                        </div>
                        

                    </div>

                    
                    <div className="card_btn view_profile client_view_profile">
                        View profile
                    </div>

                    
                </div>
            </div>
        </div>
     );
}
 
export default Client;