import Header from '../../../components/Header';
import Navbar from '../../../components/navbar/Navbar';
import { TrainerNavItems } from '../../../files/NavItems';
import { Link } from 'react-router-dom';
import FlatButton from '../../../components/FlatButton';
import ClassCard from '../../../components/class/ClassCard';
import { CgArrowLongRight } from 'react-icons/cg';
import './Classes.css';
import ClassDashboard from '../../../components/classDashboard/ClassDashboard'




const TrainerClasses = () => {
    return ( 
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {TrainerNavItems}/>
                <div className="dashboard_content">
                    <div className="content_container">

                        <div className="all_classes_container">  

                            <Link to="/create-a-class"><FlatButton name='Create a new class' cName='left_add_class_btn'/></Link>
                            
                            <div className="row">
                                <div className="row_title">
                                    <div className="row_title_left class_list_title"><p>List of all classes</p></div>
                                    <div className="row_title_right"><p>View all</p> <div className="icon"><CgArrowLongRight /></div></div>
                                </div>                        
                                
                                <div className="row_content">
                                    <ClassCard btnName='Edit class'/>
                                    <ClassCard btnName='Edit class'/>
                                    <ClassCard btnName='Edit class'/>
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
 
export default TrainerClasses;