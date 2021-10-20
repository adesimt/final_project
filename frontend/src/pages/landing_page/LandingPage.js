import { Link } from 'react-router-dom';
import SignupDropdown from './SignupDropdown';
import { useState } from 'react';





const LandingPage = () => {

    //const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    //const handleClick = () => setClick(!click);

    const onClick = () => setDropdown(true);

    return ( 

        <div className="background">
            <img src="/images/front-page-img.png" alt="front-page" />

            <div className="content">
                <div className="navbar">
                    <Link to="/"><div className="logo">logo</div></Link>
                    <div className="nav-elements">
                        <ul>
                            <Link to="/login"><li>login</li></Link>
                            <li onClick={onClick}>create account {dropdown && <SignupDropdown />}</li>
                        </ul>
                        
                    </div>

                </div>
                


                <div className="train-btn trainee">i want to train</div>
                <div className="train-btn trainer">i want to be trained</div>
            </div>

        </div>
     );
}
 
export default LandingPage;