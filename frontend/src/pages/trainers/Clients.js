import Header from '../../components/Header';
import Navbar from '../../components/navbar/Navbar';
import { TrainerNavItems } from '../../files/NavItems';
// import { Types } from '../../files/ClassEntities';
import Client from '../../components/client/Client';
import { withRouter } from 'react-router-dom';



const Clients = () => {
    return (  
        <>
            <div className="main_page">
                <Header />
                <Navbar navItems = {TrainerNavItems} />
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
                        <div className="clients_container">
                            <Client />
                            <Client />
                            <Client />
                            <Client />
                            <Client />
                            <Client />
                        </div>
                    </div>
                </div>

            </div>    
        </>
    );
}
 
export default withRouter (Clients);