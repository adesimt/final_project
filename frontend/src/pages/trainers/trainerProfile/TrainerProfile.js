import { specs, offeredClasses } from '../../../files/profileFiles';
import '../../../files/Profile.css';
import { withRouter } from "react-router-dom";
import Profile from "../../../components/Profile";

const TrainerProfile = () => {



    
    return ( 
        <>

            <Profile specs={specs} offeredClasses={offeredClasses}/>
        </>
     );
}
 
export default withRouter (TrainerProfile);