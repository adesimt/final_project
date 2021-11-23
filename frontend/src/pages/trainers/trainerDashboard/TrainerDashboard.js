import ClassDashboard from '../../../components/classDashboard/ClassDashboard';
import Header from '../../../components/Header';
import Navbar from '../../../components/navbar/Navbar';
import { TrainerNavItems } from '../../../files/NavItems';
import FlatButton from '../../../components/FlatButton';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const TrainerDashboard = () => {

    const {currentUser} = useAuth(); 
    

   
    return ( 
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {TrainerNavItems} />
                <div className="dashboard_content">

                    <div className="content_container">
                        <h2 className="hello_name">Hello, {currentUser.trainer_first_name}!</h2>
                        <Link to="/create-a-class"><FlatButton name='Create a new class' cName='new_class_btn'/></Link>
                        <br/>
                        <br/>                         
                        <ClassDashboard />

                    </div>    
                </div>

            </div>
        </>
     );
}
 
export default TrainerDashboard;