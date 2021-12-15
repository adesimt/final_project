import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/navbar/Navbar';
import Trainer from '../../components/trainer/Trainer';
import { ClientNavItems } from '../../files/NavItems';
// import { Types } from '../../files/ClassEntities';



const Trainers = () => {
    return (  
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {ClientNavItems} />
                <div className="dashboard_content">
                    <div className="filters_container">

                        {/* <div className="filter_elements">
                            <select name="workout types" className="filter_elements">
                                {Types.map((item, index) => {
                                    return <option value={item.name} key={index}>{item.name}</option>
                                })}
                            </select>
                        </div> */}


                    </div>
                    <div className="content_container">
                        <div className="trainers_container">
                            <Trainer />
                            <Trainer />
                            <Trainer />
                            <Trainer />
                            <Trainer />
                            <Trainer />
                        </div>
                    </div>
                </div>

            </div>    
        </>
    );
}
 
export default withRouter (Trainers);