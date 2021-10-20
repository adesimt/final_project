import { FaTimes } from 'react-icons/fa';
import './SignupDropdown.css';
import { Link } from 'react-router-dom';
// import { useState } from 'react';


const SignupDropdown = () => {

    //const [dropdown, setDropdown] = useState(false);

    return ( 
        <>
            <div className="dropdown_page">
                <div className="dropdown_content">
                    <div className="close_icon">
                        <FaTimes size="2em" color="#1A272A" />
                    </div>

                    <div className="signup_items signup_client">
                        <Link to="/signup-as-a-client" className="signup_client_items">
                            <div className="signup_links">
                                Create a client account
                            </div>
                            <div className="line"></div>
                        </Link>
                    </div>

                    <div className="signup_items signup_trainer">

                        <Link to="/signup-as-a-trainer" className="signup_trainer_items">
                            <div className="signup_links">
                                Create a trainer account
                            </div>
                            <div className="line"></div>
                        </Link>

                    </div>
                </div>
                
            </div>
        
        </>
     );
}
 
export default SignupDropdown;