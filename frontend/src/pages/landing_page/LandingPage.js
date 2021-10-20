import { Link } from 'react-router-dom';
import SignupDropdown from './SignupDropdown';
import { useState } from 'react';





const LandingPage = () => {

    //const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const handleClick = () => {
        //setClick(true)
        setDropdown(!dropdown)
    };

    

    return ( 

        <div className="background">
            <img src="/images/front-page-img.png" alt="front-page" />

            <div className="content">
                <div className="landing_page_navbar">
                    <Link to="/"><div className="logo">logo</div></Link>
                    <div className="nav-elements">
                        <ul>
                            <Link to="/login"><li>login</li></Link>
                            <li onClick={handleClick}>create account</li>
                        </ul>
                        
                    </div>

                </div>
                


                <Link to="/signup-as-a-trainer"><div className="train-btn trainee">i want to train</div></Link>
                <Link to="/signup-as-a-client"><div className="train-btn trainer">i want to be trained</div></Link>

            </div>

        
            {dropdown && <SignupDropdown />}
            
            
        </div>
     );
}
 
export default LandingPage;