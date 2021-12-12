import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { GoPrimitiveDot } from 'react-icons/go';
import '../trainer/User.css';


const Trainer = ({ trainer }) => {

    console.log(trainer);
    return ( 
        <div className="card">
            <div className="card_image">
                <img src={`/uploads/${trainer.trainer_image}`} alt={`${trainer.trainer_image}`} className="trainer_img"/>

            </div>
            <div className="card_info">
                <div className="card_info_container">
                    <h5 className="person_name">{`${trainer.trainer_first_name} ${trainer.trainer_last_name}`}</h5>
                    <div className="rating">
                        <AiFillStar fill='#1DAE8C'/>
                        <AiFillStar fill='#1DAE8C'/>
                        <AiFillStar fill='#1DAE8C'/>
                        <AiOutlineStar fill='#1DAE8C'/>
                        <AiOutlineStar fill='#1DAE8C'/>
                    </div>
                    <div className="person_location">
                        <div className="location_icon"><ImLocation2 /></div>
                        <div className="location_addr">{`${trainer.trainer_city}, ${trainer.trainer_state}`}</div>

                    </div>
                    <h6>Specializations:</h6>
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

                    <div className="card_btns">
                        <div className="card_btn view_profile">
                            View profile
                        </div>

                        <div className="card_btn add_trainer">
                            Add trainer
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Trainer;