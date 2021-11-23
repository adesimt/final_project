import { Link } from 'react-router-dom';
import '../../../files/Profile.css';


const OptionPage = () => {
    return ( 

        <>
            <div className="option_page">
                <div className="content">
                    <Link to="/"><div className="logo logo1">logo</div></Link>
                    <div className="container">
                        <h3 className="heading3">Hello, First name</h3>
                        <h2>Please create a profile to maximize your experience on this platform</h2>
                        <h2>Would you like to create your profile now?</h2>
                        <div className="selections">
                            <div className="btn_select yes">Yes</div>
                            <div className="btn_select no">No</div>
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        
        </>
     );
}
 
export default OptionPage;