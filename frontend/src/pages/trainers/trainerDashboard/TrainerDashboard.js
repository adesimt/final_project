import ClassDashboard from '../../../components/classDashboard/ClassDashboard';
import Header from '../../../components/Header';
import Navbar from '../../../components/navbar/Navbar';
import { TrainerNavItems } from '../../../files/NavItems';
import FlatButton from '../../../components/FlatButton';
import { Link } from 'react-router-dom';

const TrainerDashboard = () => {

   
    return ( 
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {TrainerNavItems} />
                <div className="dashboard_content">

                    <div className="content_container">
                        <h2 className="hello_name">Hello, First Name!</h2>
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