import { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Dashboard.css';
import Class from '../class/Class';


const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(true);

    const hideRow = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <>
            
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

        </>
     );
}
 
export default Dashboard;