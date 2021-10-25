import { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import '../../dashboard/Dashboard.css';
import Header from '../../../components/Header';
import Navbar from '../../../components/navbar/Navbar';
import Class from '../../../components/class/Class';
import { TrainerNavItems } from '../../../files/NavItems';
import { Link } from 'react-router-dom';
import FlatButton from '../../../components/navbar/FlatButton';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(true);

    const hideRow = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {TrainerNavItems} />
                <div className="dashboard_content">
                    <h2 className="hello_name">Hello, First Name!</h2>
                    <Link to="/create-a-class"><FlatButton name='Create a new class' cName='new_class_btn'/></Link>
                    <br/>
                    <br/>
                    <div className="all_classes_container">           

                        <div className="row">
                            <div className="row_title">
                                <div className="row_title_left"><p>Upcoming events</p> <div className="icon">{isOpen ? <IoIosArrowDown onClick={hideRow}/> : <IoIosArrowUp onClick={hideRow}/>}</div></div>
                                <div className="row_title_right"><p>View all</p> <div className="icon"><CgArrowLongRight /></div></div>
                            </div>                        
                            
                            <div className="row_content">
                            <Class />
                            <Class />
                            <Class />
                            </div>
                        

                        </div>

                        <div className="row">
                            <div className="row_title">
                                <div className="row_title_left"><p>Your Personal Sessions</p> <div className="icon">{isOpen ? <IoIosArrowDown onClick={hideRow}/> : <IoIosArrowUp onClick={hideRow}/>}</div></div>
                                <div className="row_title_right"><p>View all</p> <div className="icon"><CgArrowLongRight /></div></div>
                            </div>                        
                            
                            <div className="row_content">
                            <Class />
                            <Class />
                            <Class />
                            </div>
                        

                        </div>

                        <div className="row">
                            <div className="row_title">
                                <div className="row_title_left"><p>Your Group Classes</p> <div className="icon">{isOpen ? <IoIosArrowDown onClick={hideRow}/> : <IoIosArrowUp onClick={hideRow}/>}</div></div>
                                <div className="row_title_right"><p>View all</p> <div className="icon"><CgArrowLongRight /></div></div>
                            </div>                        
                            
                            <div className="row_content">
                            <Class />
                            <Class />
                            <Class />
                            </div>
                        

                        </div>

                    </div>
                </div>

            </div>
        </>
     );
}
 
export default Dashboard;