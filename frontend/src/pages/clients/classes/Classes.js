import Header from '../../../components/Header';
import Navbar from '../../../components/navbar/Navbar';
import { ClientNavItems } from '../../../files/NavItems';
import ClassCard from '../../../components/class/ClassCard';
import { CgArrowLongRight } from 'react-icons/cg';
import './Classes.css';
import ClassDashboard from '../../../components/classDashboard/ClassDashboard';
import { withRouter } from 'react-router-dom';




const ClientClasses = () => {
    return ( 
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {ClientNavItems}/>
                <div className="dashboard_content">
                    <div className="content_container">

                        <div className="all_classes_container">  
                            
                            <div className="row">
                                <div className="row_title">
                                    <div className="row_title_left class_list_title"><p>List of all classes</p></div>
                                    <div className="row_title_right"><p>View all</p> <div className="icon"><CgArrowLongRight /></div></div>
                                </div>                        
                                
                                <div className="row_content">
                                    <ClassCard btnName='View class'/>
                                    <ClassCard btnName='View class'/>
                                    <ClassCard btnName='View class'/>
                                </div>
                                <ClassDashboard />
                            

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
     );
}
 
export default withRouter (ClientClasses);