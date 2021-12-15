import Header from "../../components/Header";
import Navbar from '../../components/navbar/Navbar';
import {ClientNavItems} from '../../files/NavItems';
import ClassDashboard from '../../components/classDashboard/ClassDashboard';
import { withRouter } from 'react-router-dom';

const ClientDashboard = () => {


    return ( 
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {ClientNavItems} />
                <div className="dashboard_content">
                    <div className="content_container">
                        <h2 className="hello_name">Hello, First Name!</h2>
                        <ClassDashboard />

                    </div>    
                </div>

            </div>
        </>
     );
}
 
export default withRouter (ClientDashboard);